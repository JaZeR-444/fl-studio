# Pluck Filter Physics

## Mathematical String Modeling

The Pluck filter in Harmless **mathematically simulates string vibration decay**. Unlike traditional low-pass filters, it models how real strings lose energy across the frequency spectrum.

### How It Works

Real string instruments exhibit these behaviors:
1. **Initial strike**: All frequencies present
2. **High frequency decay**: Treble dissipates faster than bass (energy proportional to frequency)
3. **Exponential decay**: Energy loss follows physical laws

The Pluck filter implements this physics:
```
Decay Rate = f^2 × Damping Factor
```
Where higher frequencies (f) decay faster.

## Parameters

### Pluck Amount (0-100%)
Controls the overall decay speed:
- **0%**: No pluck effect (standard filter)
- **25%**: Subtle string-like character
- **50%**: Acoustic guitar simulation
- **75%**: Harp/plucked synth
- **100%**: Aggressive decay, kalimba-like

### Pluck Color/Tone
Determines the starting brightness:
- Lower values: Start darker, mellow decay
- Higher values: Start bright, sharp initial attack

## Use Cases

### Acoustic Guitar Plucks
- Pluck: 40-60%
- Combine with short amp envelope (fast attack, medium decay)
- Use triangle-ish mask with moderate harmonics

### Harp/Glissando
- Pluck: 70-85%
- Long release in amp envelope
- Rich harmonic mask (many harmonics)

### Synth Plucks
- Pluck: 30-50%
- Combine with filter envelope for "wow" effect
- Sawtooth mask approximation

### Kalimba/Music Box
- Pluck: 60-80%
- Sparse harmonics in mask
- High notes work best (decay more audible)

## Why It Sounds Better

Traditional filters just cut frequencies. The Pluck filter **actively removes energy** based on frequency, creating:
- More natural decay curves
- Better note-to-note consistency
- Physical realism without samples

## Pro Tip

Layer two Harmless instances: one with high Pluck setting for attack brightness, one with low Pluck for sustain body. Blend for ultimate control.

[SRC: IL-MAN - Harmless Filter Section]
