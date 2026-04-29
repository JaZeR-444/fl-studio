# Unisono System Deep Dive

Mastering GMS's advanced unisono for thick, professional sounds.

## What is Unisono?

Unisono creates multiple detuned voices per note for a chorus-like effect. GMS supports **1-16 voices** (unison voices), each with independent detuning and stereo positioning.

[SRC: IL-MAN]

---

## Unisono Controls

| Parameter | Range | Function |
|-----------|-------|----------|
| **VOICES** | 1-16 | Number of unison voices per note |
| **STEREO** | 0-100% | Stereo spread of voices across L/R field |
| **DETUNE** | 0-100% | Amount of pitch variation between voices |
| **PHASE** | 0-360° | Starting phase offset for voice alignment |

---

## How Unisono Works

### Voice Generation
When you play a note with unisono enabled:

```
Note On
    ↓
Generate 1-16 identical voices
    ↓
Apply detune to each voice (±DETUNE amount)
    ↓
Pan voices across stereo field (based on STEREO setting)
    ↓
Randomize phase (if PHASE enabled)
    ↓
Mix all voices → Filter → FX
```

### The Science of Thickness
- **1 voice:** Single, focused sound
- **2-4 voices:** Noticeable thickening, subtle movement
- **5-8 voices:** Rich chorus effect, wide stereo image
- **9-16 voices:** Maximum thickness, significant CPU usage

---

## Voice Count Guidelines

### CPU vs. Quality Trade-off
More voices = richer sound but higher CPU usage.

| Voice Count | CPU Load | Best For |
|-------------|----------|----------|
| **1** | Minimal | Monophonic leads, precise bass |
| **2-3** | Low | Subtle thickening, background elements |
| **4-6** | Medium | Supersaws, modern leads, standard pads |
| **7-10** | High | Professional EDM sounds, rich textures |
| **11-16** | Very High | Maximum impact, final renders, freezing recommended |

### Recommended Settings by Application

#### Supersaw Leads
- **VOICES:** 6-8
- **STEREO:** 60-80%
- **DETUNE:** 40-60%
- **Result:** Classic trance/EDM supersaw thickness

#### Modern Trap Leads
- **VOICES:** 4-6
- **STEREO:** 40-60%
- **DETUNE:** 30-50%
- **Result:** Wide but focused lead sound

#### Bass Sounds
- **VOICES:** 1-3
- **STEREO:** 0-20%
- **DETUNE:** 10-30%
- **Result:** Thick but mono-compatible low-end

#### Atmospheric Pads
- **VOICES:** 8-12
- **STEREO:** 80-100%
- **DETUNE:** 50-70%
- **Result:** Lush, evolving textures

#### Plucks/Arps
- **VOICES:** 2-4
- **STEREO:** 30-50%
- **DETUNE:** 20-40%
- **Result:** Tight but lively transients

---

## Stereo Spread Strategies

### Mono Bass (STEREO: 0%)
- Essential for kick drums and sub-bass
- Prevents phase cancellation in mono playback
- Maintains low-end power on club systems

### Narrow Spread (STEREO: 20-40%)
- Good for supporting elements
- Subtle width without overwhelming
- Mixes well with wide elements

### Medium Spread (STEREO: 50-70%)
- Standard for most lead sounds
- Clear stereo image
- Professional width

### Wide Spread (STEREO: 80-100%)
- Maximum stereo field
- Great for pads and effects
- Can create "big" sound easily
- May cause phase issues if overused

---

## Detune Amount Guide

### Subtle Detune (10-30%)
- Nearly imperceptible pitch variation
- Natural analog-style warmth
- Use for: Bass, tight leads

### Moderate Detune (40-60%)
- Clear chorusing effect
- Standard for supersaws
- Balanced movement and stability

### Heavy Detune (70-100%)
- Maximum pitch variation
- Very obvious chorus effect
- Can sound out of tune if too extreme
- Use for: Special effects, experimental

---

## Phase and Retrigger

### PHASE Control
Sets the starting phase for unison voices:
- **0°:** All voices start together (focused attack)
- **Scattered:** Randomized phase (softer attack, more natural)

### RETRIG (Oscillator 2 Phase Retrigger)
- **On:** OSC 2 phase resets on each note
- **Off:** OSC 2 free-runs (phase continues from previous note)

**Use RETRIG ON for:**
- Consistent attack character
- Monophonic leads
- Precise rhythmic sounds

**Use RETRIG OFF for:**
- Evolving pad textures
- Natural variation
- Polyphonic playing

---

## Unisono + Modulation Interactions

### Unisono with FM
When using FM mode with unisono:
- Each unison voice has its own FM relationship
- Creates complex, evolving textures
- CPU-intensive but rich results

**Technique:**
1. Enable FM mode
2. Set unisono to 6+ voices
3. Moderate detune (30-50%)
4. **Result:** Dense, shimmering FM textures

### Unisono with SYNC
Sync mode + unisono creates aggressive variations:
- Each voice syncs independently
- Produces "supersync" effect
- Great for modern dubstep/trap basses

---

## CPU Optimization

### Freezing/Unisono
When using high unisono counts:
1. Freeze the GMS channel (Alt+F)
2. Render to audio
3. Disable original GMS
4. **Result:** Same sound, no CPU hit

### Strategic Voice Count
- **Writing/arranging:** Use lower voices (4-6)
- **Final mix:** Increase to 8-12 as needed
- **Rendering:** Maximum voices for best quality

---

## Common Unisono Mistakes

### 1. Too Wide in Mono
**Problem:** Great stereo sound, disappears in mono mix check
**Fix:** Test with mono button, reduce STEREO or use mono-compatible settings for bass

### 2. Excessive Detune on Bass
**Problem:** Bass sounds out of tune, loses impact
**Fix:** Keep bass detune under 30%, or use 1-2 voices

### 3. CPU Overload
**Problem:** Project stuttering with many unison instances
**Fix:** Freeze tracks, use lower voice counts, or render to audio

### 4. Muddy Mix
**Problem:** Too many wide unison sounds competing
**Fix:** Strategic width - lead wide, supporting elements narrow

---

## Pro Tips

1. **Layer narrow + wide:** Use 2-voice narrow for body, 8-voice wide for shimmer
2. **Automate detune:** Increase detune during chorus for bigger sound
3. **Bass mono rule:** Keep sub-bass elements in mono (0% stereo)
4. **Check mono compatibility:** Always test with mono button before finalizing

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
