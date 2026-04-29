# Parameter Cheat Sheet

Quick reference for all Harmor controls organized by section.

[SRC: IL-MAN]

---

## Global Controls

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Polyphony** | 1-64 voices | 16 | Max simultaneous notes |
| **Slide** | 0-100% | 0 | Portamento time |
| **Mix (A/B)** | 0-100% | 50% | Balance between engines |
| **Output Volume** | 0-100% | 80% | Master output level |

---

## Engine Selector (A/B)

Press **A** or **B** button to switch between engines. All parameters below are per-engine.

---

## Timbre Section

### Sub Timbre (Fundamentals)

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Sub Level** | 0-100% | 100% | Overall sub amplitude |
| **Sub Shape** | Various | Sine-ish | Harmonic distribution curve |
| **Sub Slope** | -100 to +100 | 0 | Harmonic rolloff steepness |
| **Sub Width** | 0-100% | 0% | Stereo spread of sub |

### Main Timbre (Harmonics)

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Main Level** | 0-100% | 80% | Overall main amplitude |
| **Main Shape** | Various | Saw-ish | Harmonic distribution |
| **Main Slope** | -100 to +100 | 0 | Harmonic rolloff |
| **Main Width** | 0-100% | 0% | Stereo spread |

**Quick Settings:**
- **Sub only**: Main Level = 0%
- **Main only**: Sub Level = 0%
- **Even balance**: Both at 80-100%

---

## Filter Section

### Custom Filter (Drawn)

| Control | Function | Notes |
|---------|----------|-------|
| **Draw** | Click-drag to create curve | Any shape possible |
| **Clear** | Reset to flat | Removes all filtering |
| **Smooth** | Average adjacent points | Softer transitions |
| **Copy/Paste** | Transfer between A/B | Right-click menu |
| **Invert** | Flip curve vertically | Swaps pass/stop |

### Filter Envelope

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Filter EG Amount** | -100 to +100% | 0 | Envelope modulation depth |
| **Filter EG Attack** | 0-100% | 0 | Attack time |
| **Filter EG Decay** | 0-100% | 30% | Decay time |
| **Filter EG Sustain** | 0-100% | 0% | Sustain level |
| **Filter EG Release** | 0-100% | 20% | Release time |

---

## Unique Processors

### Prism (Harmonic Warping)

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Prism Amount** | 0-100% | 0% | Warping intensity |
| **Prism Depth** | Low/Full/Band | Full | Frequency range affected |

**Quick Use:**
- **0%**: Clean, harmonic
- **30%**: Subtle character
- **60%**: Metallic/bell-like
- **80%+**: Heavy growl/dissonance

### Blur (Partial Smearing)

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Blur Amount** | 0-100% | 0% | Density/thickness |

**Quick Use:**
- **0-20%**: Articulate, clear
- **40-60%**: Dense pads
- **80%+**: Ambient/cloudy

### Pluck (Decay Shaping)

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Pluck Amount** | 0-100% | 0% | Decay shaping strength |
| **Pluck Shape** | Exp/Lin | Exp | Decay curve type |
| **Pluck Tilt** | Bass/Treble | Balanced | Low vs high decay |

**Quick Use:**
- **0%**: Even sustain
- **50%**: Natural string-like
- **80%+**: Fast percussive decay

### Strum (Partial Detuning)

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Strum Amount** | 0-100% | 0% | Detune intensity |

**Quick Use:**
- **0%**: Perfect tuning
- **20-40%**: Natural thickness
- **60%+**: Vintage/analog character

---

## Envelope Generators

### EG1 (Primary Envelope)

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **EG1 Attack** | 0-100% | 0 | Time to peak |
| **EG1 Decay** | 0-100% | 30% | Time to sustain |
| **EG1 Sustain** | 0-100% | 80% | Hold level |
| **EG1 Release** | 0-100% | 20% | Release time |
| **EG1 Amount** | -100 to +100% | 0 | Modulation depth |
| **EG1 Destination** | Multiple | None | Target parameter |

### EG2 (Secondary Envelope)

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **EG2 Attack** | 0-100% | 0 | Time to peak |
| **EG2 Decay** | 0-100% | 30% | Time to sustain |
| **EG2 Sustain** | 0-100% | 0% | Hold level |
| **EG2 Release** | 0-100% | 20% | Release time |
| **EG2 Amount** | -100 to +100% | 0 | Modulation depth |
| **EG2 Destination** | Multiple | None | Target parameter |

**Common Destinations:**
- **Timbre**: Harmonic balance
- **Filter**: Filter movement
- **Prism**: Evolving character
- **Volume**: Amplitude shaping
- **Pitch**: Pitch envelope

---

## LFO Section

### LFO1 & LFO2

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **LFO Rate** | 0-100% | 30% | Speed |
| **LFO Sync** | On/Off | Off | Tempo sync |
| **LFO Shape** | Sine/Tri/Saw/Sqr/Rand | Sine | Waveform |
| **LFO Amount** | -100 to +100% | 0 | Modulation depth |
| **LFO Destination** | Multiple | None | Target |
| **LFO Phase** | 0-360° | 0 | Start phase |
| **LFO Retrig** | On/Off | Off | Restart on note |

**Sync Rates (when Sync On):**
- 1/64, 1/32, 1/16, 1/8, 1/4, 1/2, 1/1, 2/1, 4/1

---

## Unison Section

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Unison Voices** | 1-9 | 1 | Voices per note |
| **Unison Detune** | 0-100% | 0% | Pitch spread |
| **Unison Stereo** | 0-100% | 0% | Pan spread |
| **Unison Blend** | 0-100% | 50% | Wet/dry mix |

**Quick Settings:**
- **1 voice**: Mono, focused
- **3 voices**: Subtle width
- **6 voices**: Wide, rich
- **9 voices**: Maximum, dense

---

## Resynthesis Controls (ADV Tab)

### Playback

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Time** | 0-100% | 0% | Position in sample |
| **Speed** | -200 to +200% | 100% | Playback rate |
| **Formant** | -12 to +12 semis | 0 | Formant shift |

### Quality

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Precision** | 0-100% | 50% | Analysis accuracy |
| **Blending** | 0-100% | 50% | Frame smoothing |
| **Window** | Small-Med-Large | Med | FFT window size |

### Phase

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Randomize** | 0-100% | 0% | Phase randomization |
| **Shift** | 0-360° | 0° | Phase offset |
| **Keep** | On/Off | On | Preserve phase |

---

## Global Effects

### Chorus

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Chorus Depth** | 0-100% | 0% | Modulation depth |
| **Chorus Rate** | 0-100% | 30% | LFO speed |
| **Chorus Mix** | 0-100% | 0% | Wet amount |

### Delay

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Delay Time** | 0-100% | 30% | Echo time |
| **Delay Sync** | On/Off | Off | Tempo sync |
| **Delay Feedback** | 0-100% | 30% | Echo repeats |
| **Delay Mix** | 0-100% | 0% | Wet amount |

### Reverb

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Reverb Size** | 0-100% | 50% | Room size |
| **Reverb Damping** | 0-100% | 50% | High-freq decay |
| **Reverb Mix** | 0-100% | 0% | Wet amount |

---

## MISC Tab Parameters

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Pitch Bend Range** | 1-48 semis | 12 | PB wheel range |
| **Mod Wheel** | Various | Filter | MW destination |
| **Expression** | On/Off | On | CC11 control |
| **Sustain** | On/Off | On | CC64 pedal |
| **Legato** | On/Off | Off | Re-trigger behavior |
| **Voice Cut** | Oldest/Newest | Oldest | Polyphony behavior |

---

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Switch Engine A | Click **A** button |
| Switch Engine B | Click **B** button |
| Copy A→B | Right-click → Copy A to B |
| Copy B→A | Right-click → Copy B to A |
| Clear Filter | Right-click filter display → Clear |
| Load Sample | Drag audio onto Harmor |
| Open IMG Tab | Click **IMG** button |
| Open ADV Tab | Click **ADV** button |

---

## Common Quick Values

### 808-Style Bass
```
Sub Level: 100%
Main Level: 40%
Pluck: 60%
Prism: 0%
Filter: Low-pass, 200Hz cutoff
```

### Growl Bass
```
Pluck: 30%
Prism: 70%
LFO → Prism: 40%, rate 1/8
Filter: High resonance at 1kHz
```

### Vocal Pad
```
Blur: 40%
Strum: 30%
Pluck: 0%
Chorus: 30%
Reverb: 40%
```

### Metallic Lead
```
Prism: 50%
Strum: 10%
Blur: 20%
Unison: 5 voices
Stereo: 60%
```

---

**Version:** 1.0  
**Last Updated:** 2026-02-03
