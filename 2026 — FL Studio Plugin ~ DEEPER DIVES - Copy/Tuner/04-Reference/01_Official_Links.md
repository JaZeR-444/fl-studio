# Tuner - Official Links & Resources

## Official Documentation

### Primary Manual
- **Main Page:** [Tuner Plugin](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Tuner.htm)
- **Publisher:** Image-Line
- **Last Verified:** February 3, 2026

## Plugin Overview

### Description
Tuner is a visual pitch detection utility for monophonic audio sources. It provides real-time pitch analysis with visual feedback, helping musicians and producers achieve accurate tuning for instruments, vocals, and samples.

### Key Features
- **Visual Pitch Display:** Large, easy-to-read note name and cent deviation
- **Frequency Readout:** Exact Hz measurement
- **Reference Pitch Adjustment:** Calibrate to any concert pitch standard
- **Chromatic Detection:** All 12 notes of Western chromatic scale
- **Minimal CPU:** Lightweight analysis tool

---

## Technical Specifications

### System Requirements
- **FL Studio Version:** All modern versions (12.x+)
- **Platform:** Windows, macOS
- **Format:** Native FL Studio effect plugin
- **CPU Usage:** Negligible

### Detection Specifications
- **Pitch Range:** C0 to C8 (~16 Hz to ~4186 Hz)
- **Accuracy:** ±1 cent
- **Resolution:** 0.1 cent display
- **Reference Range:** 420-460 Hz (A4)
- **Input Type:** Monophonic signals only

---

## Music Theory Background

### Equal Temperament
- **Standard:** 12-tone equal temperament (12-TET)
- **Semitone Ratio:** 2^(1/12) ≈ 1.059463
- **Cents:** 1 semitone = 100 cents, 1 octave = 1200 cents
- **Wikipedia:** [Equal Temperament](https://en.wikipedia.org/wiki/Equal_temperament)

### Concert Pitch Standards
- **A440:** Modern international standard (1939-)
- **History:** [A440 (pitch standard) - Wikipedia](https://en.wikipedia.org/wiki/A440_(pitch_standard))
- **Variations:** Baroque (415 Hz), some orchestras (442-444 Hz)

---

## Use Cases & Applications

### Recording Preparation
1. **Instrument Tuning:** Guitar, bass, strings, brass, woodwinds
2. **Vocal Training:** Pitch accuracy practice
3. **Sample Analysis:** Identify root pitch of samples
4. **Synthesizer Calibration:** Verify oscillator tuning

### Mixing & Production
- **Frequency Identification:** Determine fundamental of bass/kick
- **Key Matching:** Ensure samples are in same key
- **Pitch Correction Reference:** Verify auto-tune results
- **Sound Design:** Document synthesizer patch pitches

---

## Instrument Tuning References

### String Instruments

**Guitar (Standard):**
- E2 (82.41 Hz), A2 (110.00 Hz), D3 (146.83 Hz), G3 (196.00 Hz), B3 (246.94 Hz), E4 (329.63 Hz)

**Bass Guitar (Standard 4-String):**
- E1 (41.20 Hz), A1 (55.00 Hz), D2 (73.42 Hz), G2 (98.00 Hz)

**Violin:**
- G3, D4, A4, E5

**Cello:**
- C2, G2, D3, A3

**Ukulele (Standard C Tuning):**
- G4, C4, E4, A4

### Keyboard Instruments
- **Middle C:** C4 = 261.63 Hz (note: some systems call this C3)
- **Concert Pitch:** A4 = 440.00 Hz
- **Octave Reference:** Each octave doubles frequency

---

## Related FL Studio Plugins

### Analysis Tools
- **Wave Candy** - Spectrum analyzer with pitch tracking
- **Edison** - Spectral view for pitch identification
- **Parametric EQ 2** - Frequency analyzer (indirect pitch reference)

### Pitch Processing
- **Pitcher** - Pitch correction and creative effects
- **NewTone** - Advanced pitch editing
- **Newtone** - Polyphonic pitch correction

---

## External Resources

### Online Tuners
- **Guitar Tuna (Mobile App)** - Free smartphone tuner
- **Pro Guitar Tuner (Web)** - Browser-based tuner
- **TunaBass** - Specialized for bass guitar

### Theory & Education
- **Music Theory.net** - Pitch and interval training
- **Perfect Ear (App)** - Ear training with pitch focus
- **Dave Conservatoire** - Free music theory lessons

### Hardware Tuners
- **Boss TU-3** - Industry standard guitar tuner pedal
- **TC Electronic PolyTune** - Polyphonic tuning
- **Peterson StroboClip** - High-precision clip-on tuner
- **Korg Pitchblack** - Popular pedal tuner

---

## Community Resources

### FL Studio Forums
- **Forum Section:** [FL Studio Effects](https://forum.image-line.com/viewforum.php?f=200)
- **Search:** "Tuner plugin" OR "pitch detection"

### Video Tutorials
- **Official FL Studio Channel:** [YouTube](https://www.youtube.com/user/FLStudio)
- **Search:** "FL Studio Tuner" OR "tuning instruments FL Studio"

---

## Alternative Tuning Systems

### Historical Tunings
- **Just Intonation:** Pure intervals based on ratios
- **Pythagorean Tuning:** Based on perfect fifths
- **Meantone Temperament:** Renaissance/Baroque standard
- **Well Temperament:** Bach's preferred system

### Modern Alternatives
- **432 Hz Tuning:** A4 = 432 Hz (controversial "natural" tuning)
- **Scientific Pitch:** C5 = 512 Hz (powers of 2)
- **Orchestral High Pitch:** A4 = 442-445 Hz (brighter sound)

### Resources
- **Kyle Gann's Tuning Page** - Microtonality and alternate tunings
- **Huygens-Fokker Foundation** - Microtonal music theory

---

## Pitch Detection Technology

### How It Works
- **Autocorrelation:** Identifies repeating patterns in waveform
- **Fast Fourier Transform (FFT):** Frequency domain analysis
- **Zero-Crossing Detection:** Counts waveform cycles
- **Combined Approach:** Most modern tuners use multiple methods

### Limitations
- **Monophonic Only:** Cannot detect multiple simultaneous pitches
- **Fundamental Required:** Weak fundamental = poor detection
- **Harmonic Content:** Very bright sounds may confuse tuner
- **Attack Time:** Transient-heavy sounds need time to settle

---

## Scientific & Academic Resources

### Acoustics
- **Wikipedia:** [Pitch (music)](https://en.wikipedia.org/wiki/Pitch_(music))
- **Book:** "The Physics of Musical Instruments" by Fletcher & Rossing
- **Course:** MIT OpenCourseWare - Music and Technology

### Psychoacoustics
- **Pitch Perception:** How humans perceive frequency
- **Critical Bands:** Frequency resolution of human hearing
- **Missing Fundamental:** Brain reconstructs implied pitch

---

## Troubleshooting Resources

### Common Issues
- **No Reading:** Check input signal level, increase sensitivity
- **Wrong Octave:** Harmonic overtone detected instead of fundamental
- **Unstable Reading:** Signal too quiet, too much noise, or polyphonic
- **Inaccurate:** Verify reference pitch (A4 = 440 Hz)

### FL Studio Support
- **Official Forum:** [Support Section](https://forum.image-line.com/viewforum.php?f=100)
- **Knowledge Base:** [FL Studio Support](https://support.image-line.com/)

---

## Professional Standards

### Recording Industry
- **Standard Pitch:** A4 = 440 Hz (ISO 16:1975)
- **Tolerance:** ±3 cents considered "in tune" for most applications
- **Precision:** ±1 cent for professional orchestral work

### Film & TV
- **Sync Requirements:** Must match orchestra pitch if scoring to live players
- **Post-Production:** Verify all elements at 440 Hz unless specified otherwise

---

## Educational Use

### Teaching Applications
- **Ear Training:** Students tune by listening, verify with Tuner
- **Pitch Accuracy:** Vocal students practice matching pitch
- **Instrument Setup:** Learn proper tuning procedures
- **Frequency Awareness:** Understand relationship between pitch and Hz

### Classroom Resources
- **Worksheet Ideas:** Frequency-to-note conversion exercises
- **Listening Tests:** Identify cent deviations by ear
- **Instrument Care:** Teach tuning as part of maintenance

---

## Updates & Compatibility

### Version History
- **Included Since:** Early FL Studio versions
- **Updates:** Minor UI improvements over time
- **Compatibility:** Backwards compatible with all modern FL versions

### Cross-Platform
- **Windows:** Full support
- **macOS:** Full support
- **Linux (Wine):** Generally works

---

**Last Updated:** February 3, 2026
**Status:** Complete reference links
