# Harmonic Mask Recipe Book

## Classic Waveform Approximations

### Perfect Sawtooth
Amplitude formula: 1/n where n = harmonic number
- H1: 100%
- H2: 50%
- H3: 33%
- H4: 25%
- H5: 20%
- Continue to H32 for full character

**Use for**: Full-spectrum leads, Reese bass

### Perfect Square
Odd harmonics only: 1/n where n = odd number
- H1: 100%
- H2: 0%
- H3: 33%
- H4: 0%
- H5: 20%
- H6: 0%
- H7: 14%

**Use for**: Hollow leads, chiptune sounds

### Triangle Wave
Odd harmonics with squared denominator: 1/n²
- H1: 100%
- H3: 11%
- H5: 4%
- H7: 2%
- Very mellow, few harmonics needed

**Use for**: Soft bass, mellow pads

### Pulse Wave (Variable Width)
Combine square + phase offset harmonics
- Draw: High-low alternating pattern
- Width controlled by how many highs before lows

**Use for**: Nasal character, vocal sounds

---

## Hip-Hop Specific Recipes

### 808 Mafia Screech
Boost harmonics 8-16, taper rest:
```
H1-H7: 20% (foundation)
H8-H12: 100% (scream)
H13-H20: 80% → 20% (taper)
H21+: 0%
```

### Drake-style Pluck
Sparse, hollow character:
```
H1: 100% (fundamental)
H2: 30% (warmth)
H3: 15% (fifth)
H4-H6: 10% each
H7+: 5% or 0%
```

### Metro Boomin Bass
Pure sub with touch of edge:
```
H1: 100%
H2: 40% (adds grit)
H3-H4: 20% each
H5+: 0% (keep it focused)
```

### Travis Scott Atmosphere
Filtered, evolving texture:
```
H1-H4: Full
H5-H20: Random 20-60%
H21-128: Sparse random peaks
Use with slow filter sweep automation
```

### Future Alien
Inharmonic clusters:
```
H1: 100%
H3: 80%
H6: 70%
H11: 60%
H18: 50%
H27: 40%
Leave gaps between clusters
```

---

## Formant/Vocal Recipes

### "Ahh" Vowel
Formant regions: harmonics 4-6 and 9-11 boosted
- H1-H3: Moderate (30-50%)
- H4-H6: 100% (first formant)
- H7-H8: 40%
- H9-H11: 90% (second formant)
- H12+: Gradual decline

### "Eee" Vowel
Higher formants:
- H1-H4: 40%
- H5-H7: 100%
- H8-H10: 50%
- H11-H14: 90%
- H15+: Decline

### Whisper/Ghost
- Fundamental (H1): 30%
- H2-H32: All moderate (20-40%)
- H33+: Random sparse peaks
- Add 20% noise

---

## Experimental Textures

### Metallic/Bell
Inharmonic relationships:
- H1: 100%
- H2.4 (non-integer): Draw at position ~H2.5
- H3.7: Position ~H4
- H5.2: Position ~H5
- Results in metallic ring

### Dissonant/Dark
- H1: 100%
- H2: 80%
- H3: 60%
- H4: 100% (octave clash)
- H5: 50%
- H6: 90% (dissonance)

### Pure Sine
- H1: 100%
- H2-H512: 0%
Use for: Sub-bass, testing, layering foundation

---

## Editing Tips

1. **Right-click mask** for shape tools
2. **Draw curves** by dragging horizontally across multiple bars
3. **Copy/paste** sections using Alt+drag
4. **A/B test** by using the mask preset slots
5. **Randomize** for happy accidents, then tame

[SRC: IL-MAN - Harmless Oscillator Editor]
