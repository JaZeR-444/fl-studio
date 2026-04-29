# Fruity Vocoder: Preset Taxonomy

## Understanding Vocoder "Presets"

Unlike synths with saved patches, Fruity Vocoder stores settings through:
1. **FL Studio project files** (.flp) - complete states
2. **Effect slot presets** - saved via right-click menu
3. **Mixer track states** - saved via track menu
4. **Manual documentation** - the primary method for this pack

## Preset Categories

### By Purpose

| Category | Description | Example Use |
|----------|-------------|-------------|
| **Speech Clarity** | Maximum intelligibility | Podcast voice, clear hooks |
| **Robot Effect** | Classic mechanical voice | Sci-fi, trap ad-libs |
| **Alien/Demon** | Otherworldly characters | Horror, experimental |
| **Musical Vocoding** | Chords played by drums | Rhythmic harmonics |
| **Ambient Texture** | Sustained spectral pads | Background atmosphere |
| **Vintage** | Lo-fi retro character | Nostalgic effects |

### By Band Count

| Preset Type | Band Range | CPU | Quality |
|-------------|------------|-----|---------|
| **Low-Fi** | 4-8 bands | Low | Effect-focused |
| **Standard** | 16-24 bands | Medium | General purpose |
| **High-Res** | 32-64 bands | High | Clear speech |
| **Maximum** | 128 bands | Very High | Critical applications |

### By Vibe Target

| Vibe | Preset Characteristics |
|------|------------------------|
| **Moody** | Low MIN, limited MAX, slow envelopes, negative FORM |
| **Upbeat** | Medium MIN, full MAX, fast envelopes, positive FORM |
| **Psychedelic** | Extreme ranges, INV on, automation-ready |
| **Jazzy** | Medium everything, neutral FORM, 16-24 bands |
| **Vibey** | Balanced, slight positive FORM, moderate bands |

## Preset Structure (Manual Presets)

Each preset in this documentation includes:

```
Preset Name
├── Core Settings
│   ├── FREQ: FORM/MIN/MAX/SCALE/INV/BW
│   ├── ENV: ATTACK/DECAY
│   └── BANDS: Count/Filter/HOLD state
├── Carrier Recommendation
├── Modulator Recommendation
├── Vibe Mapping
├── Mix Position
└── Automation Suggestions
```

## Named Preset Collection

### 1. "Clear Talker" - Speech Clarity
```yaml
FORM: 0.0
MIN: 200
MAX: 10000
SCALE: Log
INV: Off
BW: 65%
ATTACK: 10 ms
DECAY: 120 ms
BANDS: 48
FILTER: 2
```
**Best For:** Maximum speech intelligibility
**Carrier:** Sawtooth + 15% white noise
**Vibe:** Upbeat, Jazzy

### 2. "Street Robot" - Trap Ad-lib
```yaml
FORM: +0.3
MIN: 120
MAX: 9000
SCALE: Log
INV: On
BW: 55%
ATTACK: 5 ms
DECAY: 80 ms
BANDS: 24
FILTER: 2
```
**Best For:** Classic robot trap vocal effect
**Carrier:** Bright square wave
**Vibe:** Upbeat, Psychedelic

### 3. "Night Drive" - Moody Atmosphere
```yaml
FORM: -0.4
MIN: 80
MAX: 6000
SCALE: Log
INV: Off
BW: 35%
ATTACK: 200 ms
DECAY: 400 ms
BANDS: 16
FILTER: 2
```
**Best For:** Dark atmospheric beds
**Carrier:** Warm analog pad
**Vibe:** Moody

### 4. "Alien Transmission" - Psychedelic
```yaml
FORM: -0.5 (automated to +0.5)
MIN: 60
MAX: 16000
SCALE: Toggle Lin/Log
INV: On
BW: 75%
ATTACK: 15 ms
DECAY: 250 ms
BANDS: 12
FILTER: 3
```
**Best For:** Experimental weirdness
**Carrier:** FM synthesis
**Vibe:** Psychedelic

### 5. "Vintage Vibes" - Jazzy Lo-Fi
```yaml
FORM: -0.1
MIN: 150
MAX: 6000
SCALE: Log
INV: Off
BW: 40%
ATTACK: 80 ms
DECAY: 250 ms
BANDS: 20
FILTER: 2
```
**Best For:** Nostalgic jazz-hop
**Carrier:** Detuned pad with chorus
**Vibe:** Jazzy, Moody

### 6. "Rhythm Talk" - Drum Vocoding
```yaml
FORM: 0.0
MIN: 60
MAX: 12000
SCALE: Log
INV: Off
BW: 55%
ATTACK: 2 ms
DECAY: 100 ms
BANDS: 16
FILTER: 2
```
**Best For:** Drums playing chords
**Carrier:** Rich sustained pad
**Vibe:** Upbeat, Vibey

### 7. "Ghost Note" - Sustained Hold
```yaml
FORM: -0.2
MIN: 100
MAX: 5000
SCALE: Log
INV: Off
BW: 30%
ATTACK: 150 ms
DECAY: 500 ms
BANDS: 24
FILTER: 2
HOLD: Engaged
```
**Best For:** Frozen spectral moments
**Carrier:** Pad with 10s+ release
**Vibe:** Moody, Vibey

### 8. "Demon Voice" - Extreme Character
```yaml
FORM: -0.7
MIN: 80
MAX: 8000
SCALE: Log
INV: On
BW: 50%
ATTACK: 20 ms
DECAY: 150 ms
BANDS: 12
FILTER: 2
```
**Best For:** Horror, villain characters
**Carrier:** Dark sawtooth
**Vibe:** Moody, Psychedelic

### 9. "Silk Voice" - Smooth R&B
```yaml
FORM: +0.15
MIN: 80
MAX: 10000
SCALE: Log
INV: Off
BW: 45%
ATTACK: 60 ms
DECAY: 200 ms
BANDS: 40
FILTER: 2
```
**Best For:** R&B backgrounds
**Carrier:** Lush pad with movement
**Vibe:** Vibey, Jazzy

### 10. "Radio Static" - Lo-Fi Effect
```yaml
FORM: 0.0
MIN: 300
MAX: 3500
SCALE: Log
INV: Off
BW: 35%
ATTACK: 5 ms
DECAY: 80 ms
BANDS: 8
FILTER: 2
```
**Best For:** Vintage telephone/radio
**Carrier:** Any (limited spectrum will dominate)
**Vibe:** Moody, Jazzy

## Preset Naming Convention

Use this format when saving presets in FL Studio:

```
Vocoder_[Category]_[Vibe]_[Description]

Examples:
- Vocoder_Speech_Upbeat_ClearTalker
- Vocoder_Effect_Moody_NightDrive
- Vocoder_Rhythm_Vibey_DrumTalk
- Vocoder_Texture_Psychedelic_Alien
```

## Preset Organization Strategy

### In FL Studio

1. **Effect Slot Presets:**
   - Right-click vocoder slot → Save preset as...
   - Store in: `Documents\Image-Line\FL Studio\Presets\Plugin presets\Effects\Fruity\Fruity Vocoder`

2. **Mixer Track States:**
   - Right-click mixer track → Save track state
   - Includes vocoder + all other effects

3. **Project Templates:**
   - Save entire project as template
   - File → Save as template

### In This Documentation

All presets documented in:
- `02-Data/presets/01_Preset_Notes_And_Use.md` - detailed usage
- `02-Data/presets/02_Vibe_Preset_Shortlist.md` - quick reference

## Preset Selection Decision Tree

```
Need clear speech?
├─ Yes → "Clear Talker" (48 bands, high BW)
└─ No → Need character effect?
         ├─ Yes → Robot/Sci-fi?
         │         ├─ Yes → "Street Robot" or "Alien Transmission"
         │         └─ No → Dark/Demon?
         │                   ├─ Yes → "Demon Voice" or "Night Drive"
         │                   └─ No → "Vintage Vibes"
         └─ No → Need rhythmic effect?
                   ├─ Yes → "Rhythm Talk" (drum vocoding)
                   └─ No → Need sustained texture?
                             ├─ Yes → "Ghost Note" (HOLD)
                             └─ No → Start with "Silk Voice"
```

## Compatibility Notes

- All presets work with zero latency [SRC: IL-MAN]
- Band count affects CPU: lower = less CPU
- Presets assume standard L=Modulator R=Carrier routing
- Adjust post-processing (reverb, EQ) by genre needs

---

**Source:** IL-MAN (Image-Line Manual)
**Last Updated:** 2026-02-03
