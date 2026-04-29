# Kepler Exo Safety Rules

## Critical Settings

### Gain Staging
- Always maintain -6dB to -12dB headroom on output before external processing
- Individual oscillator levels should not exceed 75% when using multiple oscillators
- Sub oscillator (Exo-only) should be set to 85% to prevent low-end buildup
- Monitor input levels in Fruity Limiter; red means reduce

### Resonance Dangers
- Resonances above 70% create self-oscillation that can damage speakers
- Recommended maximum: 55% for sustained notes, 70% for short plucks
- When resonance causes distortion, reduce by 10% increments
- High resonance with high filter drive = speaker stress

### CPU Management
- Exo adds 2 additional oscillators and expanded modulation
- Each voice uses approximately 3.5% CPU on average systems
- Voices = CPU usage; reduce polyphony when not needed
- Mono mode saves 40% CPU vs stereo polyphony
- Unused modulation sources still consume CPU; disable them

### Filter Safety
- Never drive filter input above -6dB when using high resonance
- Self-oscillation from extreme settings can generate ultrasonic frequencies
- Low-pass filter at maximum cutoff can still pass harsh frequencies
- Always high-pass sounds that don't need sub frequencies

### Modulation Depth Limits
- Modulation depth over 100% creates unwanted harmonic distortion
- Recommended modulation range: 25-75% for musical results
- Audio-rate modulation (over 20Hz) creates FM-like sidebands
- Test all modulation at low volume before full sessions

## Quick-Fix Paths

| Problem | Immediate Fix |
|---------|---------------|
| Distorted output | Reduce all oscillator levels by 15% |
| Dull sound | Check if filter is in "Exo LPF" mode with low cutoff |
| No sub bass | Enable Sub Oscillator and route to output |
| Clicking on attacks | Increase envelope attack by 5-10ms |
| Phase issues | Check oscillator sync settings |
| CPU overload | Switch to Mono mode, reduce polyphony |
| Self-oscillation | Reduce filter resonance by 20% |
| Harsh highs | Enable Exo "Warmth" mode (6dB/oct filter) |
| Modulation not working | Verify modulation routing is active (green indicator) |
| Unexpected pitch | Check transpose settings in pitch section |

## Session Checklist

- [ ] Set master output to -6dB before mixing
- [ ] Enable Sub Osc for any bass sounds
- [ ] Start with resonance below 50%
- [ ] Disable unused modulation routings
- [ ] Set appropriate polyphony for instrument type
- [ ] Save safety template with these settings
- [ ] Test at high volume before mixing
- [ ] Monitor for self-oscillation on loud notes
- [ ] Check CPU meter during dense chords
- [ ] Backup patches before radical changes

## Genre-Specific Safety

### Hip-Hop/Bass
- Sub Osc must be enabled and at 100%
- Filter resonance never above 45% for 808s
- High-pass everything below 30Hz except bass
- Mono bass channel mandatory

### R&B/Keys
- Poly mode at 6-8 voices
- Resonance below 35% for clean tones
- Use "Warmth" mode for vintage feel
- Stereo width between 80-120%

### EDM/Leads
- Higher resonance acceptable (50-60%)
- Filter drive up to 25% for character
- Mono mode during drops, stereo for builds
- CPU management critical during drops
