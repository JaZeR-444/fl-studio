# Fruity Vocoder: UI Map and Signal Flow

## UI Tour

### Main Interface Layout

```
┌─────────────────────────────────────────────────────────┐
│                    FRUIRY VOCODER                       │
├─────────────────┬─────────────────┬───────────────────────┤
│                 │                 │                       │
│  FREQ Section   │  ENV Section    │  MIX Section          │
│  (Top Left)     │  (Top Center)   │  (Top Right)          │
│                 │                 │                       │
├─────────────────┴─────────────────┴─────────────────────┤
│                                                         │
│              BANDS DISPLAY (Center)                     │
│      ┌─────────────────────────────────────┐             │
│      │ ████  ██  ████████  ██  ████       │ ← 16-128  │
│      │ bars showing per-band levels        │   band    │
│      │ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐   │   meters  │
│      └─────────────────────────────────────┘             │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  HOLD  [ ]      BANDS: [16 ▼]      FILTER: [2 ▼]        │
└─────────────────────────────────────────────────────────┘
```

### Section Breakdown

#### FREQ Section (Spectral Controls)

| Control | Function | Range | Visual Feedback |
|---------|----------|-------|-----------------|
| **FORM** | Formant shift | -1.0 to +1.0 | Slider position |
| **MIN** | Low cutoff | ~20Hz to ~5kHz | Knob position |
| **MAX** | High cutoff | ~1kHz to ~20kHz | Knob position |
| **SCALE** | Frequency scaling | Linear ↔ Logarithmic | Button state |
| **INV** | Invert spectrum | On/Off | LED indicator |
| **BW** | Bandwidth | ~0% to ~100% | Knob position |

#### ENV Section (Temporal Controls)

| Control | Function | Effect |
|---------|----------|--------|
| **ATTACK** | Envelope rise time | Fast = tight, Slow = smooth/lush |
| **DECAY** | Envelope fall time | Fast = gated, Slow = sustained |

#### MIX Section (Routing Controls)

| Element | Function | Note |
|---------|----------|------|
| **L/R Labels** | Swap modulator/carrier channels | Click to toggle assignment |
| **L Slider** | Modulator level | Usually kept low (just for analysis) |
| **R Slider** | Carrier level | Usually primary audio source |
| **LCD Switches** | Solo L or R channel | Useful for setup verification |

#### Bands Display (Visual Feedback)

| Element | Function | Interaction |
|---------|----------|-------------|
| **Band Meters** | Real-time per-band levels | Visual only |
| **Band Sliders** | Individual band volume | Drag up/down to adjust |
| **HOLD Button** | Freeze current spectrum | Click or automate |
| **BANDS Dropdown** | Band count (4-128) | Higher = more resolution |
| **FILTER Dropdown** | Filter order (steepness) | Higher = sharper bands |

## Signal Flow

### Input Stage

```
Modulator Source (Channel L) ─┐
                              ├─► [Mixer Track with Fruity Vocoder]
Carrier Source (Channel R) ────┘
```

**Routing Methods:** [SRC: IL-MAN]

1. **Pan Method (Recommended for Beginners)**
   - Route both sources to vocoder track
   - Pan modulator hard-left
   - Pan carrier hard-right
   - Simple, visual, easy to understand

2. **Fruity Mute 2 Method (Advanced)**
   - Separate tracks for modulator and carrier
   - Use Fruity Mute 2 to isolate L/R
   - Route both to vocoder track
   - More flexible for complex routing

### Processing Chain

```
┌────────────────────────────────────────────────────────────┐
│  STAGE 1: Analysis                                         │
│  ┌──────────┐                                              │
│  │MODULATOR │──► Bandpass filter bank (4-128 bands)       │
│  │ (Input L)│   └──► Envelope follower per band           │
│  └──────────┘       └──► Control signals (CVs)             │
│                                                            │
│  STAGE 2: Synthesis                                        │
│  ┌─────────┐                                               │
│  │ CARRIER │──► Bandpass filter bank (same bands)          │
│  │(Input R)│   └──► CV-controlled amplitude per band      │
│  └─────────┘       └──► Summed output                     │
│                                                            │
│  STAGE 3: Post-Processing                                  │
│  ├──► Formant shifting (FORM knob)                         │
│  ├──► Inversion (if INV enabled)                           │
│  ├──► Min/Max band limiting                                │
│  └──► Mix balance (L/R sliders)                            │
└────────────────────────────────────────────────────────────┘
```

### Output Stage

```
Processed Signal ──► Mixer Track Output ──► Next Effect / Master
        │
        └─ Can be: 100% wet (vocoded only)
            Mixed wet/dry (blend with original)
            Parallel processed (on return track)
```

## Key Interactions and Right-Click Behaviors

### Standard FL Studio Interactions

| Element | Right-Click Action | Use Case |
|-----------|-------------------|----------|
| Any knob | **Init/Reset** to default | Quick return to neutral |
| Any knob | **Type in value** | Precise numerical entry |
| Any knob | **Link to controller** | Automation/MIDI mapping |
| Any knob | **Copy/Paste value** | Match settings across instances |
| Band sliders | **Reset all bands** | Return to flat response |
| HOLD button | **Automate this** | Create held spectral moments |

### Unique Interaction Behaviors

| Control | Special Behavior | Tip |
|---------|-----------------|-----|
| **L/R Labels** | Click to swap assignments | Essential for troubleshooting silent output |
| **Band Sliders** | Drag in display to paint EQ curve | Think of it as a 16-128 band graphic EQ |
| **SCALE button** | Linear = even band spacing | Best for speech |
| **SCALE button** | Logarithmic = hearing-matched | Best for musical content |
| **INV button** | Swaps high/low spectrum | Creates "demon" or "alien" character |

## Things Beginners Misunderstand

### 1. "Why is there no sound?"

**Common Issue:** No carrier signal in the right channel.

**Diagnosis Checklist:**
- [ ] Is something routed to the vocoder track's right channel?
- [ ] Are the L/R labels showing correct assignment?
- [ ] Is the carrier source audible when bypassing vocoder?
- [ ] Is the Mix section's R slider turned up?

### 2. "The words are unintelligible"

**Solutions:**
- **Bandwidth:** Increase BW for sharper definition [SRC: IL-MAN]
- **Bands:** Increase to 32-64 for speech clarity
- **Carrier:** Ensure carrier covers full spectrum (add white noise if needed)
- **Modulator:** Apply compression for consistent level
- **Min/Max:** Narrow range to focus on speech frequencies (300Hz-8kHz)

### 3. "The effect is too subtle/barely audible"

**Likely Causes:**
- Carrier has weak harmonics in modulator's active bands
- Modulator level too low (L slider affects analysis sensitivity)
- Wet/dry balance favoring dry signal

### 4. "Invert mode sounds weird"

**That's the point.** Invert swaps high modulator bands to control low carrier bands and vice versa. [SRC: IL-MAN]
- Normal: Modulator bass → Carrier bass
- Invert: Modulator bass → Carrier treble

**Use for:** Robot/demon voices, alien textures, sci-fi effects.

### 5. "FORM slider changes the pitch"

**Misconception:** Formant shifting changes pitch.
**Reality:** Formant shifting changes vocal "color" (masculine/feminine) while preserving pitch. [SRC: IL-MAN]

- **Positive (+):** Feminine, brighter vowels
- **Negative (-):** Masculine, darker vowels
- **Center (0):** Neutral, original character

## Visual Signal Flow in Use

### Example: Classic Talking Synth

```
INPUT
Voice: "Hello world" ────────┐ (Modulator - L channel)
                             ├─► FRUITY VOCODER ──► OUTPUT
Sawtooth Pad ────────────────┘ (Carrier - R channel)

INTERNAL PROCESSING
Voice spectrum:  [High]  [Mid]  [Low]
                      ↓     ↓     ↓
Sawtooth gates:  [OPEN] [OPEN] [CLOSED]
                      ↓     ↓     ↓
Output:         [Bright][Mid]  [Quiet]
                         ↑
                   Voice spectral shape
                   applied to sawtooth
```

### Example: Drum Loop Vocoding

```
INPUT
Drum loop (kick+snare) ────┐ (Modulator - L channel)
                             ├─► FRUITY VOCODER ──► OUTPUT
Rich pad chord ──────────────┘ (Carrier - R channel)

RESULT
Kick hits ──► Pad opens in bass bands ──► Bass notes "played"
Snare hits ──► Pad opens in high bands ──► Treble "played"
Silence ──► All bands closed ──► Silence

EFFECT: The pad "plays" the rhythm of the drums
```

## Band Display Deep Dive

### Understanding the Visualization

The band display shows 16-128 vertical bars representing frequency bands from low (left) to high (right):

```
LOW ◄──────────────────────────────────► HIGH
20Hz    100Hz    1kHz     4kHz     16kHz
  │        │        │        │        │
  ▓        ░        ▓▓       ░░       ▓
  ▓        ░        ▓▓       ░░       ▓
  └────────┴────────┴────────┴────────┘
   Bass    Low-Mid    Mid    High-Mid  Air
```

**Bar Height:** Current amplitude of that band in the modulator
**Your Control:** Drag bars up/down to boost/cut carrier response per band

### Painting Custom Responses

| Technique | How To | Result |
|-----------|--------|--------|
| **Telephone effect** | Cut all except 300Hz-3kHz bars | Narrow band "radio" voice |
| **Sub boost** | Raise only left 3-4 bars | Emphasize bass response |
| **De-esser** | Lower 4kHz+ bars | Reduce sibilance in vocoded output |
| **Flat reset** | Right-click display → Reset | Return to neutral |

## Verification Steps

To confirm your understanding:

1. **Test Routing:** Load vocoder, route vocal to L, synth to R, verify vocoded output exists
2. **Test HOLD:** Play vocal, click HOLD, stop vocal, verify sustained spectrum
3. **Test FORM:** Shift FORM while vocal plays, verify character change without pitch change
4. **Test INV:** Enable INV, verify "demon" quality (high modulator controls low carrier)
5. **Test Bands:** Set to 4 bands, hear resolution decrease; set to 64, hear clarity increase

---

**Source IDs:** IL-MAN (Image-Line Manual)
**Verification Status:** Signal flow diagrams based on manual description
**Last Updated:** 2026-02-03
