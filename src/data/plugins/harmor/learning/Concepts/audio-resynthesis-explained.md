# Audio Resynthesis Explained

Understanding Harmor's revolutionary drag-and-drop resynthesis system that enables lossless audio manipulation.

## Overview

**Resynthesis** is Harmor's ability to analyze an audio sample and recreate it using its additive synthesis engine. Unlike traditional samplers that play back recordings, Harmor breaks samples into their harmonic components and rebuilds them from 516 partials per voice.

This enables unprecedented control: time-stretch without artifacts, pitch-shift without chipmunk effect, and edit individual harmonics of any sound.

[SRC: IL-MAN]

---

## How Resynthesis Works

### The Analysis Process

```
Audio Sample Input
       ↓
Spectral Analysis (FFT)
       ↓
Partial Extraction
       ↓
Phase & Amplitude Detection
       ↓
516 Partial Mapping
       ↓
Reconstruction via Additive Engine
```

1. **FFT Analysis**: Fast Fourier Transform breaks the sample into frequency bands
2. **Peak Detection**: Identifies the strongest frequencies (partials)
3. **Envelope Tracking**: How each partial's amplitude changes over time
4. **Phase Coherence**: Maintains the "snap" and character of transients
5. **Additive Reconstruction**: 516 sine waves recreate the original

### Resynthesis vs Sampling

| Aspect | Traditional Sampler | Harmor Resynthesis |
|--------|-------------------|-------------------|
| Storage | Audio file (large) | Partial data (compact) |
| Time-stretch | Algorithms (artifacts) | **Recalculation (lossless)** |
| Pitch-shift | Speed change (formant shift) | **Independent (natural)** |
| Editing | Limited to volume/pitch | **Individual harmonics** |
| Manipulation | Destructive | **Non-destructive** |

---

## The Two Resynthesis Modes

### 1. Image Synthesis (IMG Tab)

**IMG mode** creates a visual spectrogram representation:
- **Display**: Time (X-axis) vs Frequency (Y-axis) vs Amplitude (brightness)
- **Visual editing**: Draw, erase, blur, or apply effects to the image
- **File format**: Can import/export PNG or BMP files

#### How to Use IMG Tab:

1. **Drag audio** onto Harmor interface
2. Click **IMG** tab
3. Harmor renders the spectrogram
4. **Edit visually** using drawing tools
5. Play back the modified sound

#### IMG Editing Techniques:

**Time-Stretching:**
- **Vertical scaling**: Stretches time without changing pitch
- **Horizontal scaling**: Changes pitch without affecting time
- **Free transform**: Any combination

**Selective Editing:**
- **Blur tool**: Smooth transitions, remove clicks
- **Eraser**: Remove specific frequencies or time periods
- **Clone stamp**: Copy frequency content to other areas
- **Smear**: Stretch frequency content horizontally

**Pro Tip:** The Speed knob controls playback speed independently - combine with IMG stretching for complex time manipulation.

### 2. Advanced Resynthesis (ADV Tab)

**ADV mode** provides granular control over resynthesis parameters:

#### Key ADV Parameters:

**Analysis Section:**
- **Time**: Playback position in the sample
- **Speed**: Playback rate (independent of pitch)
- **Formant**: Shift formants without changing pitch (vocal manipulation)
- **Bin**: Frequency resolution of analysis

**Quality Section:**
- **Precision**: How accurately partials are tracked
- **Blending**: Smoothness between analysis frames
- **Window**: FFT window size (trade-off: frequency vs time resolution)

**Phase Section:**
- **Randomize**: Add randomness to phase (for unison effects)
- **Shift**: Phase offset (affects transient character)
- **Keep**: Preserve original phase relationships

---

## Drag-and-Drop Workflow

### Basic Resynthesis

1. **Drag audio file** directly onto Harmor's interface
2. **Choose mode**: IMG for visual editing, ADV for parameter control
3. **Harmor analyzes** and converts to partial data
4. **Edit as needed** using available tools
5. **Play** - the sample is now a Harmor patch

### Supported Formats

- **Audio**: WAV, AIFF, MP3, FLAC, OGG
- **Images**: PNG, BMP (for image-to-sound synthesis)
- **Presets**: .fnp (Harmor preset files with embedded resynthesis data)

### Time and Speed Controls

#### Time Knob

- **Function**: Scrubs through the sample position
- **Automation**: Create time-based effects (reverse, slow-down, freeze)
- **Range**: 0% (start) to 100% (end)

**Technique - Time Freezing:**
1. Automate Time to stop at a specific point
2. Sound "freezes" at that moment
3. Add effects to create infinite sustains
4. Perfect for risers, impacts, ambient textures

#### Speed Knob

- **Function**: Controls playback rate
- **At 0%**: Stops at current Time position
- **Positive**: Forward playback (100% = normal speed)
- **Negative**: Reverse playback

**Technique - Independent Pitch/Time:**
1. Speed at 50% (half speed, no pitch change)
2. Use channel pitch to transpose
3. Result: Slowed down but natural pitch
4. No "chipmunk" or "monster" artifacts

#### Speed vs Pitch Relationship

| Speed | Pitch Effect | Use Case |
|-------|-------------|----------|
| 100% | Normal | Standard playback |
| 50% | Same pitch, half speed | Time-stretch |
| 0% | Freeze | Infinite sustain |
| -100% | Reverse playback | Creative effect |
| 200% | Same pitch, double speed | Fast playback |

---

## Vocal Resynthesis for Hip-Hop

### Robotic Vocal Effects

1. **Drag vocal** into Harmor
2. **ADV tab**: Set high Precision, low Blending
3. **Reduce Unison** to 1 voice
4. **Enable Formant** shifting
5. **Modulate Formant** with LFO for robotic movement

### Vocal Chopping Without Artifacts

Traditional chopping creates clicks at slice points. Harmor's resynthesis:
- **Smooth transitions** between slices
- **No transient clicks** because it's regenerated
- **Pitch-shift individual chops** naturally

**Workflow:**
1. Resynthesize vocal phrase
2. Automate Time knob to "jump" between words
3. Speed remains constant (no pitch change)
4. Use Blur to smooth transitions

### Harmonic Isolation

**Extract just the vocal fundamentals:**
1. In IMG tab, **erase high frequencies** (above 4kHz)
2. **Boost 200Hz-1kHz** range
3. Result: Subby vocal "ghost" track
4. Mix with original for added depth

---

## Image-to-Sound Synthesis

### Converting Images to Audio

Harmor can interpret **any PNG or BMP image** as a spectrogram:

```
Image Pixels → Frequency Content

X-axis (width) = Time
Y-axis (height) = Frequency (0Hz at bottom, Nyquist at top)
Brightness = Amplitude
Color = Phase information (if RGB)
```

### Creating Image Sounds

**From Scratch:**
1. Create image in Photoshop/GIMP
2. **White = loud**, Black = silent
3. **Vertical lines** = tones/pitches
4. **Gradients** = sweeps and risers
5. Drag into Harmor

**Common Image Patterns:**

**Sine Wave:**
- Draw a single horizontal sine wave
- Result: Pure sine tone at that frequency

**Sawtooth:**
- Diagonal line from bottom-left to top-right
- Result: Sawtooth wave with all harmonics

**Riser:**
- Start with horizontal lines at bottom
- Gradually angle upward toward top-right
- Result: Pitch riser with evolving harmonics

**Texture:**
- Noise or cloud patterns
- Result: Atmospheric, textural sounds

### Hip-Hop Image Applications

**808 Sub Visualization:**
- Draw thick horizontal line at bottom
- Taper thickness over time for decay
- Result: Perfectly controlled sub bass

**Vocal Formant Shapes:**
- Draw vowel shapes (horizontal bands with specific spacing)
- Result: Synthetic vocal-like textures

**Drum Transients:**
- Vertical white lines (sharp attacks)
- Fade to black (quick decay)
- Result: Snappy drum hits

---

## Advanced Resynthesis Techniques

### 1. Formant Shifting for Character

Formants are the resonant frequencies that give sounds their "character" (especially vocals):

- **Formant +12**: "Donald Duck" effect (higher formants)
- **Formant -12**: "Monster" effect (lower formants)
- **Modulated Formant**: Talking synth effect

**Technique:** Keep Speed at 100% (normal time), adjust Formant for character change without pitch change.

### 2. Blending for Smoothness

**Blending** controls how frames interpolate:
- **0%**: Staccato, distinct frames (glitchy)
- **50%**: Balanced (default)
- **100%**: Maximum smoothing (cloudy, ambient)

**Application:** Low blending for glitch-hop, high blending for ambient textures.

### 3. Window Size Trade-offs

FFT window size affects analysis resolution:

| Window Size | Time Resolution | Frequency Resolution | Best For |
|-------------|-----------------|---------------------|----------|
| Small | High (fast changes) | Low | Transients, drums |
| Medium | Balanced | Balanced | General use |
| Large | Low (slow changes) | High | Tones, sustained sounds |

**Technique:** Use smaller windows for drum resynthesis (preserve transients), larger windows for vocals (capture harmonics).

### 4. Phase Randomization

Randomizing phase on resynthesized sounds:
- **0%**: Preserves original attack character
- **50%**: Some thickening
- **100%**: Maximum unison-like effect

**Use:** Add 20-30% phase randomization to make resynthesized vocals sound more "live" and less synthetic.

---

## Common Resynthesis Issues and Solutions

### Issue: "Metallic" or "Ringing" Sound

**Cause:** Phase coherence issues in high frequencies
**Solution:** 
- Increase Blending (smooth transitions)
- Add slight Blur effect
- Reduce highest partials in filter

### Issue: Transients Sound "Soft"

**Cause:** Window size too large, losing attack detail
**Solution:**
- Decrease Window size
- Increase Precision setting
- Keep Phase Randomization low (0-10%)

### Issue: "Underwater" or Muddy Sound

**Cause:** Too many partials in low-mid frequencies
**Solution:**
- Use custom filter to scoop 200-500Hz
- Reduce Sub Timbre amount
- Increase Pluck amount (faster low-mid decay)

### Issue: Pitch Sounds "Wobbly"

**Cause:** Analysis frame rate vs playback mismatch
**Solution:**
- Lock Speed to musical values (25%, 50%, 100%, 200%)
- Increase Precision
- Use Time automation carefully (smooth ramps)

---

## CPU Optimization for Resynthesis

### Analysis vs Real-time

Harmor performs analysis **when you load the sample** (one-time CPU hit), then plays back the partial data efficiently.

### Optimizing Performance:

1. **Freeze tracks** with complex resynthesis
2. **Reduce unison voices** when using resynthesis (3-4 instead of 9)
3. **Disable unused effects** (Prism, Blur if not needed)
4. **Use IMG mode** for simpler resynthesis (less CPU than ADV with high settings)

### Rendering Tips

Before final export:
- **Freeze the channel** to convert to audio
- Or: **Render to sample** (right-click channel → Render)
- This "bakes in" the resynthesis for zero CPU playback

---

## Summary: The Power of Resynthesis

1. **True time-stretch**: Speed and pitch are completely independent
2. **Lossless manipulation**: Edit individual harmonics of any sound
3. **Visual editing**: IMG tab provides intuitive sound design
4. **Vocal processing**: Unprecedented control over formants and character
5. **Image synthesis**: Convert any image to unique sounds
6. **Non-destructive**: Original sample always preserved

**The Hip-Hop Advantage:** Sample any sound, manipulate it beyond recognition, create entirely new instruments from existing audio - all without artifacts or quality loss.

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Harmor.htm
