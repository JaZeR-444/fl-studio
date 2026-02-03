# FLEX Top Controls Reference

Complete guide to all interface controls in the FLEX plugin.

---

## Interface Layout Overview

```
┌─────────────────────────────────────────┐
│  ANALYSIS DISPLAY (Visualizers)         │ ← TOP SECTION
├─────────────────────────────────────────┤
│  MACROS (8 Sliders) │ FILTER & ENVELOPE │ ← MIDDLE SECTION
├─────────────────────────────────────────┤
│  MASTER FX (Filter, Delay, Reverb, Lim) │ ← BOTTOM SECTION
├─────────────────────────────────────────┤
│  PRESET BROWSER                          │ ← BOTTOM BAR
└─────────────────────────────────────────┘
```

---

## Top Section: Analysis Display

### Visual Modes

The analysis display provides four visualization modes to monitor your sound:

#### 1. Waveform Display (〰️)
- **Function:** Real-time audio wave visualization
- **Shows:** Amplitude over time, transient information
- **Use For:**
  - Detecting clipping (flat tops/bottoms)
  - Checking transient punch
  - Viewing envelope shape visually
  - Verifying attack and decay characteristics
- **Note:** Waveform locks to lowest MIDI note played
- **Pro Tip:** Right-click for "Pinch" view option

#### 2. Spectrogram (🌈)
- **Function:** Frequency heatmap over time
- **Shows:** Frequency content as color-coded heat map
- **Axes:**
  - X-Axis: Time (scrolls right to left)
  - Y-Axis: Frequency (low to high, 20Hz-20kHz)
  - Color: Intensity (hot = loud, cool = quiet)
- **Use For:**
  - Identifying frequency build-up
  - Detecting harsh resonances
  - Checking spectral balance
  - Finding frequency conflicts in layered sounds
- **Colors:** Red/yellow = high energy, blue/purple = low energy

#### 3. Vectorscope (💠)
- **Function:** Stereo width visualization
- **Shows:** Left/right channel correlation
- **Patterns:**
  - **Vertical Line:** Perfect mono (bass, kick, snare)
  - **Horizontal Line:** Wide stereo (atmospheric pads)
  - **Diagonal Ball:** Natural stereo (pianos, guitars)
  - **Perfect Circle:** Maximum stereo width (use sparingly)
- **Critical Rule:** Bass/808s MUST show vertical line
- **Use For:**
  - Verifying mono bass frequencies
  - Checking stereo spread on pads/FX
  - Identifying phase issues
  - Ensuring mono compatibility

#### 4. Histogram / Spectrum Analyzer (📊)
- **Function:** Real-time frequency spectrum
- **Shows:** Current frequency balance
- **Ranges:**
  - Left Bars: Bass (20Hz-200Hz)
  - Middle Bars: Mids (200Hz-4kHz)
  - Right Bars: Highs (4kHz-20kHz)
- **Use For:**
  - Checking overall frequency balance
  - Identifying excessive bass (too many left bars)
  - Detecting harsh highs (too many right bars)
  - Achieving balanced spectrum

### Display Options
- **Theme Cycling:** Double-click FLEX logo to cycle GUI themes
- **Disable Visualizers:** Right-click display to reduce CPU usage

---

## Middle Section: Performance Controls

### Macro Sliders (1-8)

**Overview:**
- 8 horizontal sliders per preset
- Preset-specific controls (names change per preset)
- Meta-controls that affect multiple underlying parameters
- Designer-curated ranges prevent bad sounds

**Common Macro Assignments:**

| Macro | Common Function | Typical Controls |
|-------|----------------|------------------|
| **Macro 1** | Filter Cutoff / Brightness / Tone | Cutoff frequency, spectral tilt |
| **Macro 2** | Timbre / Character / Waveform | Wavetable position, FM depth, sample blend |
| **Macro 3** | Attack / Movement / Rise | Envelope attack time, modulation speed |
| **Macro 4** | Release / Decay / Tail | Envelope release, decay time |
| **Macro 5** | Modulation / Vibrato / LFO | LFO amount, pitch wobble, vibrato |
| **Macro 6** | Effects Mix / Wet/Dry | Delay/reverb amount, chorus depth |
| **Macro 7** | Stereo Width / Space | Unison width, stereo spread |
| **Macro 8** | Distortion / Drive / Dirt | Saturation amount, distortion level |

**Shortcuts:**
- `Alt + Click` - Reset macro to default value
- `Right-Click` - Create automation clip
- `Ctrl + Right-Click` - Link to MIDI controller

**Best Practice:** Before using any preset, `Alt + Click` all macros to reset to designer's intended defaults.

---

### Pitch Controls

**Pitch Slider:**
- **Range:** ±1200 cents (±2 octaves)
- **Coarse Control:** Semitone buttons (±12 semitones)
- **Fine Control:** Cent slider (±100 cents per semitone)
- **Precision Mode:** Hold `Alt` while dragging for fine adjustment
- **Use Cases:**
  - Tuning to reference track
  - Creative detuning for layering
  - Pitch correction
  - Transposition

---

### Filter Section

**Cutoff Knob:**
- **Range:** 20Hz - 20kHz
- **Function:** Controls filter brightness/darkness
- **Visual Feedback:** Knob position indicates cutoff frequency
- **Common Settings:**
  - **Dark Pads:** 30-40% (warm, mellow)
  - **Bright Leads:** 70-90% (cutting, present)
  - **Wobble Bass:** Automate 20-80% (rhythmic movement)
  - **Natural Sounds:** 50-60% (balanced)

**Resonance (Res) Knob:**
- **Range:** 0-100%
- **Function:** Emphasizes frequencies at cutoff point
- **Effect:** Creates characteristic "peak" at cutoff frequency
- **Common Settings:**
  - **Clean Filter:** 0-20% (subtle, transparent)
  - **Character:** 30-50% (noticeable but musical)
  - **Acid Squelch:** 70-90% (aggressive, resonant)
- **Warning:** Very high values (>80%) can create piercing frequencies

**Envelope Amount (Env Amt) Knob:**
- **Range:** -100% to +100%
- **Function:** Controls filter cutoff modulation depth
- **Behavior:**
  - **Positive Values:** "Wah" effect (filter opens with envelope)
  - **Negative Values:** "Ow" effect (filter closes with envelope)
  - **Zero:** No modulation (static filter)
- **Tip:** Combine with AHDSR envelope settings for dynamic filtering

---

### Envelope (AHDSR)

The envelope shapes how the sound evolves over time, controlling volume OR filter cutoff.

**A - Attack:**
- **Range:** 0ms - 10 seconds
- **Function:** Fade-in time from silence to peak
- **Common Settings:**
  - Plucks/Stabs: 0-10ms (instant)
  - Pads/Strings: 500-2000ms (slow swell)
  - Keys/Piano: 5-50ms (slight softness)

**H - Hold:**
- **Range:** 0ms - 10 seconds
- **Function:** Time to sustain at peak before decay begins
- **Use Cases:**
  - Percussive sounds with flat top
  - Organ-like sustain
  - Gate-style envelopes

**D - Decay:**
- **Range:** 0ms - 10 seconds
- **Function:** Time to fall from peak to sustain level
- **Use Cases:**
  - Controlling punch (shorter = more punch)
  - Shaping body of sound
  - Percussive character

**S - Sustain:**
- **Range:** 0-100% (level, not time)
- **Function:** Level held while MIDI note is active
- **Common Settings:**
  - Plucks: 0% (dies immediately after attack/decay)
  - Pads: 70-100% (holds continuously)
  - Piano: 40-60% (natural decay while held)

**R - Release:**
- **Range:** 0ms - 10 seconds
- **Function:** Fade-out time after MIDI note ends
- **Common Settings:**
  - Percussion: 50-200ms (quick cutoff)
  - Pads: 1000-3000ms (long tail)
  - Bass: 100-500ms (controlled decay)

**Visual Reference:**
```
     Peak (Attack reaches here)
      ↓
     ┌─────┐ Hold
    ╱│     │╲
   ╱ │     │ ╲ Decay
  ╱  │     │  ╲__________ Sustain Level
 ╱   │     │             ╲
╱    │     │              ╲ Release
─────┴─────┴───────────────╲─────
 A   H     D      S          R
```

**Tip:** Use `Alt + Click` to reset envelope parameters to preset defaults.

---

### Additional Controls

**Arpeggiator Toggle:**
- **Icon:** Musical note pattern icon
- **States:**
  - Active (colored) = Arpeggiator enabled
  - Inactive (grey) = Arpeggiator disabled
- **Function:** Enable/disable preset's built-in arpeggiator pattern
- **Use Case:** Turn off if you want static chords instead of arpeggiated patterns

**Voice/Polyphony Settings:**
- Located in plugin header (may require expanding)
- Controls maximum simultaneous voices
- Affects CPU usage
- **Tip:** Lower for CPU optimization

---

## Bottom Section: Master Effects Chain

### Signal Flow
```
Synthesis Engine → Macros → Pitch/Filter →
Master Filter → Delay → Reverb → Limiter → Output
```

### Master Filter

**Types (17 available):**
- **Low Pass 6dB, 12dB, 24dB** - Remove high frequencies
- **High Pass 6dB, 12dB, 24dB** - Remove low frequencies
- **Band Pass** - Keep only middle frequencies
- **Phaser, Vowel, Comb, All-Pass** - Creative filtering

**Parameters:**
- **Cutoff:** Frequency split point
- **Resonance:** Emphasis at cutoff
- **Enable Button:** Click to activate/deactivate

**Common Uses:**
- High Pass @ 180Hz on non-bass sounds (mud removal)
- Low Pass @ 8kHz for "Anti-Fizz" warmth
- Vowel filter for talkbox/dubstep effects

### Delay

**Types:**
- **Fake Stereo** - Mono delay with stereo widening
- **True Stereo** - Independent L/R delay lines
- **Ping Pong** - Alternating left-right bouncing

**Parameters:**
- **Time:** Delay spacing (sync to tempo or free ms)
- **Feedback:** Number of repeats (0-100%+)
- **Mix:** Wet/dry balance
- **Color:** Low-pass filtering (damping)
- **Modulation:** Pitch wobble amount

**Common Presets:**
- Slapback: Time=80-120ms, Feedback=10%, Mix=20%
- Dub Echo: Time=1/4 note, Feedback=60%, Mix=40%
- Rhythmic: Time=1/8 dotted, Feedback=40%, Mix=25%

### Reverb

**Parameters:**
- **Decay:** Reverb tail length (room size)
- **Size:** Space dimension
- **Mix:** Wet/dry balance
- **Color:** Reverb tone (damping/brightness)
- **Modulation:** Pitch wobble (removes metallic ring)
- **Speed:** Modulation rate

**Critical Mixing Rules:**
- Bass/808s: 0% reverb (NEVER!)
- Leads: 15-25% (present)
- Pads: 30-45% (atmospheric)
- Percussion: 10-20% (subtle)

**Common Settings:**
- Intimate Room: Decay=20%, Size=30%, Mix=15%
- Hall: Decay=60%, Size=75%, Mix=35%
- Underwater: Decay=80%, Size=60%, Color=20%, Mix=50%

### Limiter/Compressor

**Based on Maximus engine** - Professional dynamics processor

**Types:**
- **Custom** - Manual settings
- **Limiter** - Clean, transparent ceiling
- **Warming** - Analog warmth (use Pre=30%)
- **Heating** - Aggressive punch (use Pre=50%)
- **Distortion** - Maximum saturation (use Pre=85%)

**Parameters:**
- **Type Dropdown:** Select limiter character
- **Pre-Gain:** Input drive amount
- **Parallel Mix:** Blend clean/processed signal

**Common Uses:**
- Safety Limiter: Type=Limiter, Pre=0-15%
- Analog Warmth: Type=Warming, Pre=25-35%
- Bass Thickener: Type=Heating, Pre=45-60%
- Creative Destruction: Type=Distortion, Pre=75-95%

**Master Volume:**
- Final output level control
- **Padlock Icon:** Lock volume across preset changes
- **Tip:** Lock at comfortable level for consistent browsing

---

## Bottom Bar: Preset Browser

### Navigation

**Browse Modes:**
- **Packs:** Browse by installed content packs
- **All:** View all presets across all packs
- **Recents:** Recently played presets
- **Favorites:** User-marked favorites

**Shortcuts:**
- `Ctrl + Up/Down` - Previous/next preset
- `Shift + F` - Toggle favorite marking
- `Alt + F` - Toggle favorites visibility
- `F10` - Open/close preset browser

### Organization

**Tags System:**
- **Type Tags:** Bass, Lead, Pad, Keys, FX, etc.
- **Style Tags:** Dark, Bright, Soft, Aggressive, etc.
- Minimum 2 tags per preset (designer-assigned)

**Search:**
- Real-time text filter
- Searches preset names
- Filters visible results instantly

**Pack Management:**
- **Cloud Icon:** Download available packs
- **Settings:** Manage installed packs
- **Location:** `Documents\Image-Line\FLEX\Packs`

---

## Lock Feature (Hidden by Default)

**Accessing:**
1. Double-click FLEX logo
2. Select "Show panel locks"
3. Padlock icons appear below parameters

**Function:**
- Lock any parameter value
- Locked parameters persist across preset changes
- Useful for consistent browsing experience

**Common Lock Targets:**
- Master Volume (consistent preview volume)
- Reverb Mix (keep all presets dry/wet)
- Macro 8 (often controls effects)
- Arpeggiator (disable all arps)

---

## Keyboard Shortcuts Quick Reference

| Shortcut | Function |
|----------|----------|
| `Ctrl + Up/Down` | Load previous/next preset |
| `Shift + F` | Favorite current preset |
| `Alt + F` | Show only favorites |
| `Alt + Click` | Reset parameter to default |
| `Right-Click` | Create automation clip |
| `Ctrl + Right-Click` | Link to MIDI controller |
| `Hold Alt` | Fine control on sliders |
| `F10` | Open preset browser |
| `Double-Click Logo` | Cycle GUI themes / Access settings |

---

## Related Documentation

- [`parameter-cheat-sheet.md`](./parameter-cheat-sheet.md) - Complete parameter specs
- [`visual-analysis.md`](../Concepts/visual-analysis.md) - Deep dive on visualizers
- [`master-effects-modes.md`](../Concepts/master-effects-modes.md) - Effects chain guide
- [`sound-design-macros.md`](../../03-Workflows/by-goal/sound-design-macros.md) - Macro workflow
- [`preset-surfing-locks.md`](../../03-Workflows/by-goal/preset-surfing-locks.md) - Lock feature guide

---

**Version:** 1.0
**Created:** 2026-02-01
**Based on:** Official Image-Line FLEX Manual
