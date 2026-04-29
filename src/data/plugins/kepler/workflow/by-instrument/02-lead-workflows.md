# Kepler Lead Workflows

## Smooth R&B Lead

### Sound Profile
Warm, emotional lead with smooth attack and silky sustain for R&B vocal-inspired melodies.

### Recommended Preset
`genre/03-silk-lead.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Sine, 0 octave, 100% | Core tone |
| Oscillator 2 | Triangle, 0 octave, 50% | Harmonics |
| Filter | Lowpass, 2200Hz, Resonance 15 | Softness |
| Filter Drive | 5% | Subtle warmth |
| Envelope | A:50, D:400, S:70, R:300 | Smooth entry/exit |
| LFO | Sine, 0.25Hz, 15% to Pan | Subtle movement |

### Genre Variations
- **Neo-Soul:** Increase resonance to 20%, add slight vibrato
- **Contemporary R&B:** Faster attack (30ms), brighter filter (2800Hz)
- **90s R&B:** Triangle wave at 70%, lower filter (1800Hz)

### Chain Processing
```
Kepler → Soft Clipper
  - Input reduction: 2dB
  → Fruity Reverb 2
  - Type: Hall
  - Decay: 2.5s
  - Pre-delay: 30ms
  - Mix: 20%
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More presence | Increase osc2 mix to 65% |
| Warmer tone | Reduce filter cutoff to 1800Hz |
| Brighter tone | Increase filter cutoff to 3000Hz |
| More movement | Increase LFO rate to 0.4Hz |
| More width | Enable stereo width processing |

### Troubleshooting
| Problem | Solution |
|---------|----------|
| Harsh highs | Reduce osc2 mix to 35% |
| Too dark | Increase filter cutoff by 300Hz |
| Weak projection | Increase filter drive to 8% |
| Clicking attacks | Increase envelope attack to 40ms |
| Monophonic feel | Increase LFO pan to 25% |

---

## EDM Supersaw Lead

### Sound Profile
Massive, stadium-filling lead with wide stereo width and powerful presence.

### Recommended Preset
`genre/05-supersaw-hero.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 90% | Core |
| Oscillator 2 | Saw, 0 octave, 90% | Width |
| Oscillator 3 | Saw, +1 octave, 70% | Harmonics |
| Filter | Lowpass, 4000Hz, Resonance 50 | Power |
| Filter Drive | 20% | Saturation |
| Envelope | A:20, D:250, S:60, R:400 | Presence |
| LFO | Saw-up, 0.5Hz, 40% to Filter | Movement |

### Genre Variations
- **Big Room:** Higher resonance (55%), longer release (500ms)
- **Progressive House:** Softer attack (30ms), moderate resonance (45%)
- **Future Bass:** Add filter LFO movement, stereo width 120%

### Chain Processing
```
Kepler → Soft Clipper
  - Input reduction: 3dB
  → Fruity Limiter
  - Ceiling: -0.3dB
  - Gain: 6dB
  → Stereo Delay
  - Time: 300ms
  - Feedback: 40%
  - Mix: 25%
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More massive | Enable all 3 oscillators at 100% |
| Tighter mix | Reduce osc3 to 60% |
| More movement | Increase LFO rate to 0.8Hz |
| More aggressive | Increase resonance to 55% |
| Smoother | Reduce filter drive to 15% |

### Safety Notes
- Use high-pass filter at 200Hz when layered with bass
- Monitor for phase cancellation when summing to mono
- Reduce polyphony if CPU becomes an issue

---

## Trap Pluck Lead

### Sound Profile
Punchy, rhythmic lead with percussive character for trap melodies and hi-hat patterns.

### Recommended Preset
`genre/07-glitch-pluck.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Square, +1 octave, 100% | Click |
| Oscillator 2 | Saw, 0 octave, 70% | Body |
| Filter | Lowpass, 3000Hz, Resonance 45 | Snap |
| Filter Drive | 10% | Edge |
| Envelope | A:1, D:80, S:0, R:50 | Percussive |
| LFO | Sample-hold, 4Hz, 50% to Pitch | Glitch |

### Genre Variations
- **Melodic Trap:** Slower LFO (2Hz), less modulation (25%)
- **Aggressive Trap:** Increase filter resonance (52%), faster decay (60ms)
- **Ethereal Trap:** Reduce LFO modulation (20%), longer release (80ms)

### Chain Processing
```
Kepler → Teq4
  - High-pass at 500Hz
  → Fruity Reverb 2
  - Type: Plate
  - Decay: 1.2s
  - Mix: 18%
  → Bitcrusher
  - Bit depth: 8-bit
  - Wet: 50%
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| Less glitchy | Reduce LFO modulation to 25% |
| More plucky | Reduce envelope decay to 60ms |
| More body | Increase osc2 mix to 80% |
| More click | Increase osc1 to 100% |

---

## Ambient Pad

### Sound Profile
Ethereal, evolving soundscape with deep stereo width and atmospheric depth.

### Recommended Preset
`genre/10-ethereal-wash.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Sine, -1 octave, 100% | Foundation |
| Oscillator 2 | Triangle, -1 octave, 70% | Body |
| Oscillator 3 | Saw, 0 octave, 40% | Air |
| Filter | Lowpass, 2500Hz, Resonance 25 | Softness |
| Filter Drive | 5% | Gentle warmth |
| Envelope | A:500, D:800, S:85, R:1500 | Slow evolution |
| LFO | Sine, 0.15Hz, 30% to Pan | Movement |

### Genre Variations
- **Cinematic:** Longer attack (800ms), longer release (2000ms)
- **Chillout:** Slower LFO (0.1Hz), reduced stereo width
- **Space Ambient:** Increase LFO pan to 45%, add reverb

### Chain Processing
```
Kepler → Vintage Chorus
  - Mix: 50%
  - Rate: 0.3Hz
  → Fruity Reverb 2
  - Type: Cathedral
  - Decay: 6s
  - Mix: 30%
```

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More width | Enable chorus processing |
| More warmth | Increase filter drive to 8% |
| More movement | Increase LFO rate to 0.25Hz |
| Smoother | Reduce oscillator3 mix to 30% |

### Troubleshooting
| Problem | Solution |
|---------|----------|
| Phasing | Reduce LFO pan to 15% |
| Too bright | Reduce filter cutoff to 2000Hz |
| Too dark | Increase filter cutoff to 3000Hz |
| Too busy | Reduce LFO rate to 0.1Hz |

---

## Lead Workflow Summary

### By Genre
| Genre | Preset | Chain Priority |
|-------|--------|----------------|
| R&B | Silk Lead | Reverb first |
| EDM | Supersaw Hero | Limiter + Delay |
| Trap | Glitch Pluck | Bitcrusher + Reverb |
| Ambient | Ethereal Wash | Chorus + Reverb |
| Lo-Fi | Dusty Texture | Phaser + Saturation |

### By Role
| Role | Recommended Settings |
|------|---------------------|
| Main hook | Supersaw Hero, +3dB at 3kHz |
| Countermelody | Silk Lead, lower octave |
| Textural layer | Ethereal Wash, low volume |
| Rhythmic accent | Glitch Pluck, short notes |
| Vocal support | Silk Lead, filtered mids |

### Quick Genre Translation
| From → To | Adjustment |
|-----------|------------|
| R&B → EDM | Add oscillator3, increase resonance |
| EDM → R&B | Remove oscillator3, reduce resonance |
| Trap → Ambient | Slow envelope, add LFO pan |
| Ambient → Trap | Shorten envelope, add pitch LFO |
