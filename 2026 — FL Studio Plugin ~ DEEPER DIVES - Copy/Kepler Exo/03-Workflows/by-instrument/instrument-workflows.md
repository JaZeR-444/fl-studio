# Kepler Exo Instrument Workflows

## Hip-Hop/Bass Instruments

### 808 Sub Bass
**Genre:** Hip-hop/rap, trap, drill
**Mood:** Dark, aggressive

#### Core Setup
1. Oscillators: Osc1 + Osc2 (saw waves, -2 octave)
2. Sub Oscillator: Enabled, 100%, sine wave
3. Filter A: Lowpass, 150-200Hz, resonance 28-35
4. Filter B: Disabled or high-pass at 80Hz
5. Envelope: Attack 4ms, Decay 180ms, Sustain 65%, Release 120ms
6. Modulation: Env to Filter A at 70-80%

#### Genre Tweaks
- **Trap:** Add subtle pitch LFO (0.2Hz, 8% amount)
- **Drill:** Increase filter drive to 25%, add aggressive pitch LFO
- **Old School:** Reduce filter resonance to 20%, shorter decay

#### Chain Processing
- Fruity Parametric EQ 2: High-pass at 30Hz
- Fruity Limiter: -15dB threshold, 4:1 ratio, fast attack
- Optional: Fruity Compressor for parallel pumping effect

#### A/B Testing Points
- Test A: Sub osc at 100% vs Test B: Sub osc at 70%
- Test A: Single filter vs Test B: Dual filter stacking

#### Troubleshooting
| Problem | Solution |
|---------|----------|
| Muddy low-end | High-pass everything below 40Hz except bass |
| Weak impact | Increase filter drive to 22% |
| Distorted | Reduce osc levels by 15% |
| Clicking on attacks | Increase envelope attack to 6ms |

---

### Mid-Range Bass
**Genre:** Hip-hop/rap, R&B
**Mood:** Funky, smooth

#### Core Setup
1. Oscillators: Osc1 (saw, -1 octave), Osc2 (square, -1 octave)
2. Sub Oscillator: Enabled, 40-60%, sine wave
3. Filter A: Lowpass, 500-800Hz, resonance 30-38
4. Envelope: Attack 3ms, Decay 140ms, Sustain 60%, Release 160ms
5. Modulation: Env to Filter A at 65-75%

#### Genre Tweaks
- **R&B:** Softer resonance (25%), longer attack (15ms)
- **Dirty South:** Higher resonance (42%), increased drive (18%)

#### Chain Processing
- Fruity Parametric EQ 2: Bell +2dB at 400Hz, cut at 100Hz
- Fruity Compressor: Attack 12ms, Release 80ms, Ratio 2.5:1
- Optional: Vintage Warmer for saturation

#### A/B Testing Points
- Test A: Square wave for presence vs Test B: Saw for warmth

---

## R&B Lead Instruments

### Smooth Lead
**Genre:** R&B, hip-hop/rap
**Mood:** Moody, emotional

#### Core Setup
1. Oscillators: Osc1 (sine, 0), Osc2 (triangle, 0, +3 cents detune)
2. Sub Oscillator: Enabled, 20-30%, sine wave
3. Filter A: Lowpass, 2500-3500Hz, resonance 15-20
4. Filter B: Highpass at 200Hz for cleanup
5. Envelope: Attack 50ms, Decay 400ms, Sustain 72%, Release 350ms
6. Modulation: LFO to pan at 30-40%, slow rate

#### Genre Tweaks
- **Modern R&B:** Add slight filter LFO movement
- **Classic 90s:** Increase resonance to 25%, warmer envelope

#### Chain Processing
- Soft clipper: 1.5dB input reduction
- Fruity Reverb 2: Hall, 2.5s decay, 20% mix
- Fruity Compressor: Soft knee, 2.5:1 ratio

#### A/B Testing Points
- Test A: Pan LFO on for movement vs Test B: Static mono

---

### Electric Keys
**Genre:** R&B, EDM crossover
**Mood:** Electric, modern

#### Core Setup
1. Oscillators: Osc1 (saw, 0), Osc2 (saw, 0, +7 cents)
2. Osc3 (triangle, +1), Osc4 (square, 0)
3. Sub Oscillator: Disabled or 15%
4. Filter A: Lowpass, 4000Hz, resonance 35
5. Envelope: Attack 15ms, Decay 250ms, Sustain 55%, Release 300ms
6. Modulation: Env to Filter at 60%, LFO to filter at 40%

#### Chain Processing
- Fruily Parametric EQ 2: Bell +3dB at 3kHz
- Fruity Limiter: -0.3dB ceiling
- Delay: Stereo, 250ms, 30% feedback

---

## EDM Lead Instruments

### Big Room Lead
**Genre:** EDM, big room, festival
**Mood:** Electric, anthem

#### Core Setup
1. Oscillators: All 4 oscillators, saw waves, varying detune
   - Osc1: 0 octave, 0 detune, 90%
   - Osc2: 0 octave, +7 cents, 88%
   - Osc3: +1 octave, +14 cents, 75%
   - Osc4: +1 octave, +21 cents, 65%
2. Sub Oscillator: Enabled, 0% (cleaner highs)
3. Filter A: Lowpass, 4000-5000Hz, resonance 45-52
4. Filter B: Lowpass, 7000Hz, resonance 25
5. Envelope: Attack 12ms, Decay 220ms, Sustain 58%, Release 400ms
6. Modulation: Env to Filter A at 75%, LFO to Filter B at 50%

#### Genre Tweaks
- **Future Bass:** Softer attack (25ms), wider stereo width
- **Progressive House:** Smoother resonance (40%), longer release
- **Hardstyle:** Higher resonance (60%), shorter decay

#### Chain Processing
- Soft clipper: 2dB input reduction
- Fruity Limiter: Ceiling -0.3dB, 6dB gain
- Fruity Reverb 2: Cathedral, 4s decay, 12% mix

#### A/B Testing Points
- Test A: 4 oscillators massive vs Test B: 2 oscillators focused
- Test A: High resonance for screeches vs Test B: Lower for smooth

#### Troubleshooting
| Problem | Solution |
|---------|----------|
| Too harsh | Reduce filter A cutoff by 500Hz |
| No impact | Increase filter resonance by 10% |
| CPU overload | Switch to mono mode during drops |
| Phasing | Reduce stereo width to 100% |

---

### Pluck Lead
**Genre:** EDM, trap
**Mood:** Energetic, rhythmic

#### Core Setup
1. Oscillators: Osc1 (square, +1), Osc2 (saw, 0)
2. Sub Oscillator: Disabled
3. Filter A: Lowpass, 3000Hz, resonance 45
4. Envelope: Attack 1ms, Decay 60ms, Sustain 0%, Release 40ms
5. Modulation: Env to Filter at 90-95%

#### Chain Processing
- Fruity Reverb 2: Small room, 0.5s decay, 15% mix
- Fruity Compressor: Fast attack, 4:1 ratio

---

## Pad/Ambient Instruments

### Atmospheric Pad
**Genre:** R&B, ambient, lo-fi
**Mood:** Moody, spacey

#### Core Setup
1. Oscillators: All 4 oscillators with wide detuning
   - Osc1: Saw, -1 octave, 0 detune, 75%
   - Osc2: Saw, -1 octave, +12 cents, 70%
   - Osc3: Triangle, -2 octave, +18 cents, 60%
   - Osc4: Sine, -1 octave, +25 cents, 55%
2. Sub Oscillator: Enabled, 25-35%, sine wave
3. Filter A: Lowpass, 2000-2500Hz, resonance 18-22
4. Filter B: Highpass at 150Hz
5. Envelope: Attack 200ms, Decay 600ms, Sustain 82%, Release 1000ms
6. Modulation: LFO to pan at 50-65%, slow rate (0.1Hz)

#### Genre Tweaks
- **Lo-Fi:** Add sample-hold LFO to filter cutoff
- **Cinematic:** Increase stereo width, add reverb
- **Ambient:** Even slower modulation, longer release

#### Chain Processing
- Vintage Phaser: Mix 40%, Rate 0.25Hz
- Fruity Reverb 2: Hall/Cathedral, 3-5s decay, 25-35% mix
- Tape Saturation: 3-5% drive

#### A/B Testing Points
- Test A: Wide detune for chorus-like effect
- Test B: Tight detune for cleaner sound

---

## FX/Texture Instruments

### Risers
**Genre:** EDM, trap
**Mood:** Uplifting, build

#### Core Setup
1. Oscillators: Osc1 + Osc2 (saw waves, high octave)
2. Sub Oscillator: Disabled
3. Filter: Lowpass, sweeping from closed to open
4. Envelope: Long attack, long release
5. Automation: Filter cutoff, pitch, volume

#### Tips
- Automate filter cutoff throughout the bar
- Add pitch bend automation
- Layer with white noise if needed

---

### Downlifters
**Genre:** EDM, trap
**Mood:** Dark, tension

#### Core Setup
1. Oscillators: Osc1 + Osc2 (saw waves, low octave)
2. Filter: Lowpass, closed to slightly open
3. Envelope: Fast attack, long release
4. Automation: Filter cutoff down, pitch down slightly

---

## Workflow Quick Reference

### Bass Workflow Checklist
- [ ] Enable Sub Oscillator for any bass sound
- [ ] Set Filter A lowpass between 150-300Hz
- [ ] Start with resonance below 35%
- [ ] Set envelope attack based on genre (fast for trap, slower for R&B)
- [ ] Route through high-pass filter on other channels
- [ ] Check mono compatibility

### Lead Workflow Checklist
- [ ] Set polyphony appropriate to genre (4-8 voices)
- [ ] Enable stereo width processing
- [ ] Set filter cutoff for tonal character
- [ ] Add reverb for space
- [ ] Check frequency range against vocals
- [ ] Automate filter sweeps for interest

### Pad Workflow Checklist
- [ ] Use 4 oscillators with wide detune
- [ ] Set slow attack for smooth entry
- [ ] Enable LFO panning for movement
- [ ] Add chorus or phaser for width
- [ ] Set long release for sustained feel
- [ ] Mix at lower volume than leads

## Cross-Genre Translation

### Trap to R&B
1. Reduce filter resonance by 50%
2. Lengthen envelope attack to 20-30ms
3. Reduce filter drive by 66%
4. Add subtle stereo width
5. Increase reverb mix by 50%

### EDM to Hip-Hop
1. Reduce filter cutoff by 40%
2. Shorten envelope release by 50%
3. Increase sub oscillator level
4. Remove sidechain compression
5. Add subtle compression for consistency

### R&B to EDM
1. Increase filter resonance by 50%
2. Add filter LFO movement
3. Increase filter drive
4. Add delay effects
5. Increase stereo width
