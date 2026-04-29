# Matrix Mixer Explained - Understanding Stereo Shaper's Core

## What is a Matrix Mixer?

A matrix mixer controls how Left and Right input channels are routed to Left and Right outputs using four sliders:

```
INPUT          MATRIX           OUTPUT
  L  ──→  [L→L] [L→R]  ──→  L
  R  ──→  [R→L] [R→R]  ──→  R
```

**Each slider controls:**
- **L→L:** How much Left input goes to Left output
- **L→R:** How much Left input goes to Right output  
- **R→L:** How much Right input goes to Left output
- **R→R:** How much Right input goes to Right output

## Standard Stereo (Unity Matrix)

```
L→L: 1.0    L→R: 0.0
R→L: 0.0    R→R: 1.0
```
This passes stereo signal unchanged - left stays left, right stays right.

## Mid/Side Conversion (LR to MS)

```
L→L: 0.707   L→R: 0.707   (Mid = L+R)
R→L: 0.707   R→R: -0.707  (Side = L-R)
```

**Mid Signal:** Center content (vocals, bass, kick)
**Side Signal:** Stereo width (panned elements, ambience)

## Hip-Hop Applications

### Moody/Dark Hip-Hop
**Narrow Stereo for Intimacy:**
- L→L: 1.0, L→R: -0.2
- R→L: -0.2, R→R: 1.0
- Creates tight, claustrophobic stereo field
- Perfect for dark, introspective beats

### Upbeat/Club Hip-Hop
**Wide Stereo for Energy:**
- Use MS mode to widen side content
- Add slight delay (5-10ms) for Haas effect
- Invert phase on one channel for maximum width
- Check mono compatibility!

### Lo-Fi Hip-Hop
**Mono/Narrow for Vintage:**
- L→L: 0.7, L→R: 0.3
- R→L: 0.3, R→R: 0.7
- Reduces stereo width for vintage vibe
- Emulates old cassette playback

### Electronic/Trap
**Dynamic Width:**
- Automate matrix for builds/drops
- Narrow in verse, wide in chorus
- MS processing for 808 bass (keep mono)
- Wide hi-hats and snares

## Common Matrix Recipes

### Mono Collapse
```
L→L: 0.5    L→R: 0.5
R→L: 0.5    R→R: 0.5
```
Converts stereo to mono - useful for bass checking.

### Channel Swap
```
L→L: 0.0    L→R: 1.0
R→L: 1.0    R→R: 0.0
```
Swaps left and right channels.

### Phase Inversion (Karaoke Effect)
```
L→L: 1.0    L→R: -1.0
R→L: -1.0   R→R: 1.0
```
Cancels center-panned content - removes vocals from instrumentals.

## Visual Matrix Guide

```
           TO LEFT OUT    TO RIGHT OUT
FROM L IN:    [L→L]          [L→R]
FROM R IN:    [R→L]          [R→R]
```

**Positive Values:** Same phase
**Negative Values:** Inverted phase
**Zero:** No signal routing

## Pro Tips

1. **Always check mono:** Fold down in Fruity Stereo Enhancer
2. **Bass stays center:** Keep low-end in Mid component
3. **Automate for impact:** Narrow verse, wide chorus
4. **Phase = power:** Negative values create width but risk mono cancellation
5. **Delay = depth:** 10-30ms creates Haas effect stereo width

## When to Use Matrix Processing

### Use It For:
- Mid/Side processing (vocals separate from reverb)
- Phase correction (fixing inverted channels)
- Stereo width control (narrow/wide mixing)
- Center extraction (isolating or removing center elements)

### Avoid It For:
- General stereo enhancement (use Stereo Enhancer instead)
- Quick mono check (use mixer mono button)
- EQ tasks (wrong tool)

## Signal Math

**Mid Signal:** `(L + R) / 2`
**Side Signal:** `(L - R) / 2`

**Reconstruction:**
- Left Out = Mid + Side
- Right Out = Mid - Side

Matrix converts between LR and MS representations.
