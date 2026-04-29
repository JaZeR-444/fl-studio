# Workflow: Analog Pads

## Concept
Layer multiple analog voices for rich pad textures.

## Multi-Voice Setup

### 3-Voice Polyphony
```
Track 10 (Main): Voice 1
Track 11 (Out 2): Voice 2
Track 12 (Out 3): Voice 3
```

Each:
```
Left: Pitch
Right: Gate (long duration)
```

### Chord Voicing
```
Piano Roll chords trigger all 3 voices
Voice 1: Root
Voice 2: Third
Voice 3: Fifth (or Seventh)
```

## Sound Design

### Per Voice
```
Oscillator: Slight detune between voices
Filter: Individual filter per voice
Envelope: Slow attack (500ms+), long release
```

### Collective
```
Slight detuning: Chorus effect
Individual envelopes: Texture
Stereo spread: Wide image
```

## Recording Strategy

### Step 1: Sequence Chords
- Long note durations
- Slow chord changes
- Slight timing variations

### Step 2: Record to Audio
- Capture each voice
- Or mix hardware outputs first
- Record stereo sum

### Step 3: Process in FL
- Heavy reverb
- Compression for sustain
- EQ for clarity

## Variations

### Moody Pad
- Slow filter sweeps
- Dark oscillator waveforms
- Long, evolving

### Bright Pad
- Sawtooth oscillators
- Filter slightly open
- Airy, present

### Moving Pad
- LFO on PWM
- Slight pitch drift
- Living, breathing

---

**Source:** IL-MAN
**Last Updated:** 2026-02-03
