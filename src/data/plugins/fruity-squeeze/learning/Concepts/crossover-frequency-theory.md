# Crossover Frequency Theory

## What Are Crossover Frequencies?

Crossover frequencies are the points where Fruity Squeeze splits your audio spectrum into separate bands for independent processing.

## Fruity Squeeze Band Structure

```
Low Band ←─────→ Mid Band ←─────→ High Band
    0 Hz ─── X1 ─── X2 ─── 20 kHz
```

- **Low Band**: 0 Hz to X1 (Crossover 1)
- **Mid Band**: X1 to X2 (Crossover 2)
- **High Band**: X2 to 20 kHz+

## Default Crossover Points

- **Crossover 1**: ~250 Hz (separates bass from mids)
- **Crossover 2**: ~2 kHz (separates mids from highs)

These defaults work well for most full-range material.

## Choosing Crossover Points

### Bass/Low Crossover (X1)

#### Common Ranges
- **80–120 Hz**: Isolate sub-bass (kick fundamentals, 808s)
- **150–250 Hz**: Separate bass guitar/synth bass from mids
- **300–400 Hz**: Keep low-mids with bass (warmer, fuller)

#### Material-Specific
- **Kick drums**: 80–100 Hz (isolate thump)
- **Bass guitar**: 150–200 Hz (preserve body)
- **Synth bass**: 120–180 Hz (depends on patch)
- **Full mix**: 200–300 Hz (general-purpose split)

### Mid/High Crossover (X2)

#### Common Ranges
- **1.5–2.5 kHz**: General vocal/instrument presence range
- **3–5 kHz**: Brighten without harshness
- **6–8 kHz**: Isolate air and brilliance
- **10+ kHz**: Ultra-high sparkle only

#### Material-Specific
- **Vocals**: 2–3 kHz (control presence without affecting air)
- **Guitars**: 2.5–4 kHz (tame pick attack separately)
- **Drums**: 4–6 kHz (control cymbals independently)
- **Full mix**: 2–3 kHz (standard mastering split)

## Musical Frequency Ranges Reference

| Range | Frequencies | Character |
|-------|-------------|-----------|
| Sub-bass | 20–60 Hz | Feel, rumble, power |
| Bass | 60–250 Hz | Fundamental, warmth, body |
| Low-mids | 250–500 Hz | Fullness, muddiness if excessive |
| Mids | 500 Hz–2 kHz | Body, presence, clarity |
| Upper-mids | 2–4 kHz | Definition, vocal presence |
| Highs | 4–8 kHz | Brilliance, edge, sibilance |
| Air | 8–20 kHz | Sparkle, space, openness |

## Crossover Strategy by Goal

### Maximum Loudness
- X1: 100 Hz, X2: 3 kHz
- Heavy compression on all bands
- Aggressive ratios (8:1 or higher)

### Natural Dynamics
- X1: 200 Hz, X2: 2 kHz
- Light compression (2:1–4:1)
- Preserve transients in highs

### Tonal Reshaping
- X1: 150 Hz (boost bass presence)
- X2: 4 kHz (tame harshness independently)
- Use volume knobs to rebalance

### Vocal Processing
- X1: 300 Hz (keep low-mids with body)
- X2: 3 kHz (control sibilance separately)
- Light mid compression, moderate high limiting

## Technical Considerations

### Filter Slopes
- Fruity Squeeze uses Linkwitz-Riley filters (standard for crossovers)
- Creates minimal phase distortion at crossover points
- Smooth transition between bands

### Overlapping Regions
- Bands overlap slightly around crossover points
- Prevents gaps in frequency response
- Maintains phase coherence

### Interaction Effects
- Compressing one band affects perceived balance of others
- Lower crossover = more isolated bass processing
- Higher crossover = more holistic mid/high treatment

## Common Crossover Mistakes

❌ **Too many narrow bands** → Fruity Squeeze has 3 bands; use them wisely  
❌ **Crossovers in wrong spots** → Splits instruments awkwardly  
❌ **Ignoring source material** → Drums vs. vocals need different splits  
❌ **Set and forget** → Adjust per project/sound

## Practical Workflow

1. **Analyze your source**: Where are the problem frequencies?
2. **Set crossovers around problem areas**: Isolate what needs control
3. **Solo bands**: Listen to each band individually
4. **Adjust if needed**: Move crossovers if bands sound unbalanced
5. **Process**: Apply appropriate compression per band

## Frequency-Specific Examples

### Kick Drum Punch
- X1 at 80 Hz (isolate sub-thump)
- X2 at 3 kHz (separate click/attack)
- Heavy low compression, light high limiting

### Vocal Clarity
- X1 at 250 Hz (body vs. presence)
- X2 at 5 kHz (presence vs. air)
- Moderate mid compression, gentle high control

### Bass Synth Fatness
- X1 at 120 Hz (sub vs. harmonics)
- X2 at 2 kHz (warmth vs. brightness)
- Heavy low limiting, light mid squashing

### Full Mix Glue
- X1 at 200 Hz (bass elements vs. instruments)
- X2 at 2.5 kHz (body vs. clarity)
- Gentle compression across all bands (3:1–4:1)
