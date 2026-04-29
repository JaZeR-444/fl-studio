# Fruity Phaser – Complete Production Guide

## Overview
Classic phaser effect that creates sweeping, swooshing movement by using phase cancellation and modulation.

## Core Parameters

### Shape Controls
- **Frequency**: Center frequency of phaser sweep
- **Depth**: How wide the sweep range is
- **Stereo**: Phase offset between L/R channels
- **Stages**: Number of phase shift stages (more = deeper effect)

### Modulation
- **LFO Rate**: Speed of automatic sweep
- **LFO Depth**: Amount of LFO modulation
- **Feedback**: Resonance/intensity of effect

### Mix
- **Dry/Wet**: Balance between original and effected signal

## Hip-Hop Applications

### Synth Movement (Melodic Hip-Hop)
**Settings**:
- Frequency: 400-800Hz
- Depth: 40-60%
- LFO Rate: 1/4 - 1/2 note
- Stages: 6-8
- Wet: 30-50%

**Result**: Lush, moving pad textures

### Hi-Hat Texture (Trap)
**Settings**:
- Frequency: 2-4kHz
- Depth: 30%
- LFO Rate: 1/8 note
- Stages: 4
- Wet: 20-40%

**Result**: Rhythmic hi-hat movement

### Vocal Effect (Experimental)
**Settings**:
- Frequency: 600-1.2kHz
- Depth: 50%
- LFO Rate: 1/2 note
- Feedback: 40%
- Wet: 25%

**Result**: Spacey, modulated vocal texture

### Bass Wobble (Electronic Hip-Hop)
**Settings**:
- Frequency: 200-400Hz
- Depth: 60%
- LFO Rate: 1/4 note
- Stages: 6
- Feedback: 30%

**Result**: Pulsing bass movement

## Genre-Specific Presets

### Trap/Modern
```json
{
  "name": "Trap Sweep",
  "frequency": 1000,
  "depth": 45,
  "lfoRate": 0.25,
  "stages": 6,
  "feedback": 25,
  "wet": 35,
  "use": "Hi-hats, percussion, synth textures"
}
```

### Boom Bap
```json
{
  "name": "Classic Sweep",
  "frequency": 600,
  "depth": 50,
  "lfoRate": 0.5,
  "stages": 8,
  "feedback": 40,
  "wet": 30,
  "use": "Sample movement, drum transition"
}
```

### Lo-Fi
```json
{
  "name": "Vintage Phase",
  "frequency": 400,
  "depth": 60,
  "lfoRate": 0.125,
  "stages": 4,
  "feedback": 35,
  "wet": 25,
  "use": "Pads, keys, overall vibe"
}
```

### Melodic
```json
{
  "name": "Dreamy Motion",
  "frequency": 800,
  "depth": 55,
  "lfoRate": 0.33,
  "stages": 10,
  "feedback": 30,
  "wet": 40,
  "use": "Synth pads, atmospheric elements"
}
```

## Creative Workflows

### Build-Up Sweep
1. Start with wet at 0%
2. Automate wet to 80% over 8 bars
3. Increase feedback simultaneously
4. Creates rising tension
5. **Use**: Pre-chorus build, transitions

### Rhythmic Gating
1. Set fast LFO rate (1/8 or 1/16)
2. High depth (70%)
3. Moderate feedback
4. **Result**: Choppy, rhythmic texture
5. **Use**: Hi-hats, shakers, textures

### Stereo Widening
1. Set stereo to 100%
2. Moderate LFO rate
3. Low wet mix (20%)
4. **Result**: Subtle stereo movement
5. **Use**: Pads, synths, backing vocals

### Automated Filter Alternative
1. Link frequency to automation
2. Low LFO depth
3. Manual sweep control
4. **Use**: Filter sweep without filter

## Mixing Tips

### Do's
- ✓ Use subtle wet amounts (20-40%)
- ✓ Sync LFO to tempo
- ✓ Automate for builds/transitions
- ✓ Layer with other effects

### Don'ts
- ✗ Over-use on every element
- ✗ Too much feedback (harsh)
- ✗ Phase bass frequencies (mono issues)
- ✗ Forget to A/B test

## By Instrument

### Synths/Pads
- Frequency: 500-1000Hz
- Depth: 50-60%
- Wet: 30-50%
- Creates lush movement

### Hi-Hats
- Frequency: 2-5kHz
- Depth: 30-40%
- Wet: 20-35%
- Adds texture without overpowering

### Vocals
- Frequency: 600-1.2kHz
- Depth: 40%
- Wet: 15-25%
- Subtle effect, not obvious

### Bass (Careful!)
- Frequency: 300-500Hz
- Depth: 30%
- Wet: 15-20%
- Check mono compatibility

### Percussion
- Frequency: 800-2kHz
- Depth: 40-50%
- Wet: 25-40%
- Adds movement to loops

## Advanced Techniques

### Parallel Phasing
1. Send to aux track
2. Phaser on aux
3. Blend to taste
4. Maintains punch while adding movement

### Sidechain Modulation
1. Link phaser wet to Peak Controller
2. Rhythmic phaser amount
3. Pumping phase effect

### Multi-Band Phasing
1. Split signal with Patcher
2. Phaser on mids only
3. Keep bass/highs clean

## Troubleshooting

**Too harsh**: Lower feedback, reduce stages

**Not noticeable**: Increase depth and wet mix

**Sounds thin in mono**: Reduce stereo amount, check bass frequencies

**Too fast/slow**: Adjust LFO rate to tempo sync
