# Tuner - Parameter Cheat Sheet

**Plugin Type:** Visual Pitch Detection Utility
**Category:** Analysis Tool / Tuning Reference
**Official Manual:** [Tuner](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Tuner.htm)

---

## Main Display

| Element | Function | Quick Tip |
|---------|----------|-----------|
| **Note Name** | Displays detected pitch (C, D, E, etc.) | Large display for easy reading |
| **Octave Number** | Shows octave range (C0-C8) | Reference for MIDI note mapping |
| **Cent Deviation** | Shows pitch offset from exact note | Negative = flat, positive = sharp |
| **Frequency (Hz)** | Exact frequency in Hertz | Use for precise frequency analysis |
| **Visual Meter** | Graphical pitch deviation indicator | Center = perfectly in tune |

---

## Tuning Reference

| Parameter | Range | Function | When to Use |
|-----------|-------|----------|-------------|
| **Reference Pitch (A4)** | 420-460 Hz | Sets concert pitch standard | Default 440Hz for standard tuning |
| **Calibration** | -50 to +50 cents | Fine-tune reference pitch | Match to detuned instruments or alternate tunings |

---

## Display Modes

| Mode | Description | Use Case |
|------|-------------|----------|
| **Auto** | Automatically detects any pitch | General purpose tuning |
| **Chromatic** | All 12 notes of chromatic scale | Standard instrument tuning |
| **Custom Scale** | User-defined note set | Specific scales or modal tuning |

---

## Detection Settings

| Parameter | Range | Function | Practical Tip |
|-----------|-------|----------|---------------|
| **Sensitivity** | Low/Medium/High | Detection threshold | High for quiet signals, low for loud/distorted |
| **Attack Time** | Fast/Medium/Slow | How quickly tuner responds | Fast for plucked instruments, slow for sustained |
| **Release Time** | Fast/Medium/Slow | How long reading stays displayed | Slower for analyzing vibrato |

---

## Visual Indicators

| Color/Position | Meaning | Action Required |
|----------------|---------|-----------------|
| **Red (Left)** | Too flat (more than -10 cents) | Tune up |
| **Yellow (Left)** | Slightly flat (-3 to -10 cents) | Tune up slightly |
| **Green (Center)** | In tune (-3 to +3 cents) | Perfect |
| **Yellow (Right)** | Slightly sharp (+3 to +10 cents) | Tune down slightly |
| **Red (Right)** | Too sharp (more than +10 cents) | Tune down |

---

## Common Reference Pitches

| Standard | A4 Frequency | Use Case |
|----------|--------------|----------|
| **Modern Standard** | 440 Hz | Universal modern tuning |
| **Baroque** | 415 Hz | Period instrument ensembles |
| **Classical** | 430 Hz | Some orchestras |
| **High Pitch** | 442-445 Hz | Bright sound preference |

---

## Instrument-Specific Tips

### Guitar Tuning
- **Standard:** E2, A2, D3, G3, B3, E4
- **Tip:** Tune from low E to high E
- **Attack:** Fast
- **Sensitivity:** Medium

### Bass Guitar
- **Standard 4-String:** E1, A1, D2, G2
- **Tip:** Use neck pickup for clearest signal
- **Attack:** Medium
- **Sensitivity:** High (lower frequencies need more sensitivity)

### Vocals
- **Range:** Varies by voice type
- **Tip:** Sustain a vowel sound ("ah")
- **Attack:** Slow
- **Release:** Slow (to track vibrato)
- **Note:** Useful for pitch accuracy training

### Synthesizers
- **Use Case:** Verify oscillator tuning
- **Tip:** Use sine or triangle wave for clearest reading
- **Note:** Check tuning across multiple octaves

### Acoustic Instruments
- **Piano:** Check against reference for each note
- **Violin/Viola:** Tune open strings (G, D, A, E)
- **Cello:** C2, G2, D3, A3
- **Note:** Harmonic overtones can confuse tuner - play fundamentals clearly

---

## Workflow Integration

### Recording Preparation
1. Load Tuner on input channel
2. Play/sing into microphone
3. Adjust instrument until meter shows green
4. Bypass or remove Tuner
5. Begin recording

### Sample Analysis
1. Load Tuner on sample channel
2. Play sample
3. Note detected pitch and frequency
4. Use for pitch-shifting or key matching
5. Document root note for future reference

### Mix Analysis
1. Solo instrument track
2. Insert Tuner on channel
3. Identify fundamental frequency
4. Use for EQ decisions or frequency clash resolution
5. Remove Tuner after analysis

---

## Accuracy Tips

### For Best Detection
1. **Monophonic Input:** Tune one note at a time
2. **Clean Signal:** Minimize background noise and reverb
3. **Strong Fundamental:** Avoid overly bright or filtered sources
4. **Sustained Notes:** Hold notes steady for accurate reading
5. **Proper Gain Staging:** Not too quiet, not clipping

### When Tuner Struggles
- **Issue:** Jumpy readings
  - **Solution:** Increase attack time, reduce sensitivity
- **Issue:** Wrong octave detected
  - **Solution:** Adjust sensitivity, play louder/clearer
- **Issue:** No reading
  - **Solution:** Increase sensitivity, check input signal level
- **Issue:** Unstable with effects
  - **Solution:** Place Tuner before reverb/delay/modulation

---

## Alternative Tuning References

| Tuning System | A4 Frequency | Characteristics |
|---------------|--------------|-----------------|
| **Scientific Pitch** | 432 Hz | "Natural" tuning (controversial) |
| **Philosophical Pitch** | 512 Hz (C5) | Based on powers of 2 |
| **Verdi Tuning** | 432 Hz | Historical Italian standard |
| **Modern Sharp** | 444 Hz | Bright, cutting tone |

---

## MIDI Integration

### Pitch to MIDI
- Use detected pitch to verify MIDI note accuracy
- Check if MIDI controller is sending correct note values
- Verify VST instrument tuning against reference

### Pitch Bend Analysis
- Monitor pitch bend range on synths
- Verify pitch wheel calibration
- Check after-touch pitch modulation accuracy

---

## Cent Deviation Guide

| Cents Offset | Perception | Musical Impact |
|--------------|------------|----------------|
| **0-3 cents** | Negligible | Perfectly acceptable |
| **3-6 cents** | Slight | Noticeable in isolation |
| **6-10 cents** | Noticeable | Out of tune in mix |
| **10-20 cents** | Obvious | Clearly out of tune |
| **20+ cents** | Very obvious | Nearly quarter-tone off |

**Note:** 100 cents = 1 semitone

---

## Frequency to Note Reference

| Note | Frequency (A440) | Note | Frequency (A440) |
|------|------------------|------|------------------|
| **C0** | 16.35 Hz | **C4** | 261.63 Hz |
| **C1** | 32.70 Hz | **A4** | 440.00 Hz |
| **C2** | 65.41 Hz | **C5** | 523.25 Hz |
| **C3** | 130.81 Hz | **C6** | 1046.50 Hz |

---

## Polyphonic vs Monophonic

### Monophonic Sources (Tuner Works Well)
- Single vocal line
- Solo guitar notes
- Bass guitar
- Individual synth oscillator
- Single trumpet/saxophone note

### Polyphonic Sources (Tuner May Struggle)
- Chords on guitar/piano
- Full mix/master bus
- Layered vocals
- Orchestral sections
- Multiple synth voices

**Tip:** For polyphonic sources, solo individual notes or use spectrum analyzer instead

---

## CPU & Performance

- **CPU Usage:** Negligible
- **Latency:** Minimal analysis delay
- **Realtime:** Yes - suitable for live tuning
- **Offline:** Also useful for sample analysis

---

## Related Tools

### FL Studio Native
- **Wave Candy** - Spectrum analyzer with pitch display
- **Edison** - Spectral analysis for pitch identification
- **Parametric EQ 2** - Frequency analysis

### External Alternatives
- **Guitar Tuna (Mobile)** - Smartphone tuning app
- **PolyTune (Plugin)** - Polyphonic guitar tuner
- **Peterson StroboSoft** - High-precision tuner software

---

## Live Performance Use

### On-Stage Tuning
1. Insert Tuner on input channel
2. Mute output during tuning
3. Visual feedback for silent tuning
4. Bypass Tuner for performance
5. Quick reference between songs

### Soundcheck Setup
- Verify all instruments are in tune with each other
- Check reference pitch matches band standard
- Tune before recording individual tracks
- Document any intentional detuning for creative effect

---

## Creative Uses

### Sound Design
- Identify pitch of found sounds
- Match samples to project key
- Verify pitch-shifted sample accuracy
- Document synthesizer oscillator frequencies

### Microtonal Music
- Set custom reference pitches
- Verify microtonal intervals
- Check equal-temperament deviations
- Document alternate tuning systems

### Harmonic Analysis
- Identify overtones in complex sounds
- Verify sub-bass fundamental frequency
- Check harmonic series accuracy
- Analyze bell/metallic timbres

---

**Last Updated:** February 3, 2026
**Status:** Complete reference material
