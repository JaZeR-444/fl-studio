# Synthesis Modes Quick Guide

One-page reference for choosing the right synthesis mode.

## Mode Selection Matrix

| Goal | Mode | Setup | Result |
|------|------|-------|--------|
| **Classic analog** | Subtractive | No modulation | Warm, vintage tone |
| **EDM supersaw lead** | Subtractive | High unisono | Thick, modern lead |
| **Aggressive bass** | SYNC | OSC2 tuned up | Sync sweep character |
| **Bell/pluck** | FM | 2:1 or 3:1 ratio | Metallic harmonics |
| **808 sub bass** | FM | Sine waves, 2:1 | Harmonic depth |
| **Industrial texture** | RM | Detuned oscillators | Inharmonic grit |
| **Sci-fi effects** | RM | Extreme tuning | Alien sounds |

[SRC: IL-MAN]

---

## Quick Setup Recipes

### Subtractive (No Modulation)
```
Modulation: None (default)
OSC 1: Sawtooth
OSC 2: Sawtooth, detuned +7 cents
Unisono: 4-8 voices
Result: Classic supersaw
```

### FM Mode
```
Modulation: 2 to 1 FM
OSC 1: Sine (carrier)
OSC 2: Sine (modulator)
Tune OSC 2: +12 semitones (2:1 ratio)
Amount: 50%
Result: Bell/metallic tones
```

### Sync Mode
```
Modulation: 1 SYNC
OSC 1: Sawtooth
OSC 2: Sawtooth
Tune OSC 2: +12 semitones
Amount: 40%
Modulate OSC 2 pitch with envelope
Result: Sync sweep bass/lead
```

### Ring Modulation
```
Modulation: 2 to 1 RM
OSC 1: Any waveform
OSC 2: Detuned +2 to +7 semitones
Amount: 70%
Result: Inharmonic texture
```

---

## Sound Design Goals

### Bass Sounds

| Type | Mode | Key Settings |
|------|------|--------------|
| **Sub bass** | FM | Sine carrier, 2:1 ratio, low cutoff |
| **Growl bass** | SYNC | Sawtooth, modulate sync amount |
| **Reese bass** | Subtractive | Two saws, heavy unisono, wide stereo |
| **808 style** | FM | Sine carrier, 3:1 ratio, long decay |

### Lead Sounds

| Type | Mode | Key Settings |
|------|------|--------------|
| **Supersaw** | Subtractive | 3 saws, 6-8 unison voices |
| **FM lead** | FM | Saw carrier, 2:1 ratio, medium cutoff |
| **Sync lead** | SYNC | Aggressive sync, add distortion |
| **Pluck** | FM | Short envelope, 2:1 or 3:1 ratio |

### Pad Sounds

| Type | Mode | Key Settings |
|------|------|--------------|
| **Evolving** | FM | Slow envelope modulating amount |
| **Wide pad** | Subtractive | Max unisono, 100% stereo |
| **Texture** | RM | Complex waveforms, moderate amount |

### Effects

| Type | Mode | Key Settings |
|------|------|--------------|
| **Bells** | FM | 2:1 or 3:1 ratio, fast envelope |
| **Metallic** | FM | Higher ratios, bright filter |
| **Robotic** | RM | Extreme detuning |
| **Sci-fi** | RM | Noise + modulation |

---

## FM Ratio Cheat Sheet

For FM mode (OSC 2 modulates OSC 1):

| OSC 2 Tuning | Ratio | Character |
|--------------|-------|-----------|
| 0 semitones | 1:1 | Dense, complex |
| +12 semitones | 2:1 | Bell-like, hollow |
| +19 semitones | 3:1 | Reed-like |
| +24 semitones | 4:1 | Bright, metallic |
| +28 semitones | 5:1 | Brass-like |

**Pro tip:** Use ratios with small whole numbers (2:1, 3:1, 4:1) for musical harmonics.

---

## Common Mistakes

| Mistake | Why It's Wrong | Fix |
|---------|----------------|-----|
| Too much FM amount | Harsh, uncontrolled sound | Start at 30-50%, increase gradually |
| Wrong FM ratio | Out-of-tune harmonics | Use 2:1, 3:1, 4:1 for consonance |
| Extreme detune in RM | Complete chaos | Keep detune under 7 semitones |
| No filter after sync | Too bright/harsh | Always use filter with sync |
| Max unison on bass | Phase cancellation | Use 1-2 voices for sub |

---

## Decision Flowchart

```
Starting point: Default patch
    ↓
Need harmonics/complexity?
    ├─ Yes → Try FM mode
    │   ├─ Bell/metallic → FM, 2:1 ratio
    │   └─ 808/sub → FM, 3:1 ratio, sines
    ↓
Need aggression/edge?
    ├─ Yes → Try SYNC mode
    │   ├─ Bass → SYNC + envelope mod
    │   └─ Lead → SYNC + distortion
    ↓
Need texture/grit?
    ├─ Yes → Try RM mode
    │   ├─ Industrial → High amount
    │   └─ Sci-fi → Extreme detune
    ↓
Want classic analog?
    └─ Use Subtractive (no modulation)
        ├─ Supersaw → High unisono
        └─ Warm tone → Medium unisono
```

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
