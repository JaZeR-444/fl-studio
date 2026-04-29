# Parameter Dictionary

## DCO (Digitally Controlled Oscillator)

### Waveform Selector
**Type:** Toggle (Saw/Pulse)

**Function:** Selects oscillator waveform.

**Technical:** Sawtooth = all harmonics; Pulse = odd harmonics only [UNVERIFIED]

**Vibe Impact:**
- **Sawtooth:** Rich, full—good for all vibes except very specific cases
- **Pulse:** Hollow, reedy—excellent for bass, Jazzy sounds

**Best Practices:**
- Pads: Usually sawtooth
- Bass: Usually pulse
- Leads: Either, depending on character needed

**Source ID:** [IL-MAN]

---

### Range
**Type:** Selector (16'/8'/4')

**Function:** Sets pitch range (like organ footage).

**Technical:** 16' = one octave below 8'; 4' = one octave above [UNVERIFIED]

**Vibe Impact:**
- **16':** Deep, warm—Moody, Vibey
- **8':** Standard—Upbeat, Jazzy
- **4':** Bright, high—specialized use

**Best Practices:**
- 8' is standard for most sounds
- 16' for deep bass or warm pads
- 4' for bright leads or special effects

**Source ID:** [IL-MAN]

---

### PWM (Pulse Width Modulation)

#### Manual PWM
**Type:** Knob [UNVERIFIED: Range]

**Function:** Sets static pulse width.

**Range:** 0-100%

**Vibe Impact:**
- **Narrow (10-30%):** Hollow, reedy, nasal—Jazzy bass
- **Medium (40-60%):** Balanced—general use
- **Wide (70-90%):** Fuller, brighter—Upbeat leads

**Best Practices:**
- Bass: 20-40% for punch
- Pads: 40-60% for warmth
- Avoid extremes (0%, 100%)

**Source ID:** [IL-MAN]

#### PWM Source
**Type:** Toggle (Manual/LFO/Env)

**Function:** Selects what modulates pulse width.

**Vibe Impact:**
- **Manual:** Static, consistent
- **LFO:** Animated, evolving—Psychedelic, Vibey
- **Env:** Dynamic, per-note

**Best Practices:**
- Static sounds: Manual
- Evolving pads: LFO
- Articulated bass: Env

**Source ID:** [IL-MAN]

---

### Sub-Oscillator
**Type:** Knob [UNVERIFIED: Range]

**Function:** Adds octave-down oscillator.

**Range:** 0-100%

**Vibe Impact Tags:** `depth`, `warmth`

**Best Practices:**
- Bass: Always 100%
- Pads: 20-40%
- Leads: 30-50%

**What to Listen For:**
- Adds fundamental low-end
- Can overwhelm if too high on non-bass

**Source ID:** [IL-MAN]

---

## VCF (Voltage Controlled Filter)

### Cutoff Frequency
**Type:** Knob [UNVERIFIED: Range in Hz]

**Function:** Sets filter cutoff point.

**Range:** ~20Hz to ~20kHz [UNVERIFIED]

**Vibe Impact:**
- **Low (20-40%):** Dark, Moody, atmospheric
- **Medium (40-60%):** Warm, Vibey, Jazzy
- **High (60-80%):** Bright, Upbeat, present

**Mix Impact Tags:** `brightness`, `depth`

**Automation Common:** High—essential for expression

**Source ID:** [IL-MAN]

---

### Resonance
**Type:** Knob [UNVERIFIED: Range]

**Function:** Emphasizes frequencies at cutoff.

**Range:** 0-100%

**Vibe Impact:**
- **Low (0-20%):** Smooth, natural—Moody, Jazzy
- **Medium (30-50%):** Character—Upbeat, Vibey
- **High (60%+):** Squeal, acid—Psychedelic, special FX

**Best Practices:**
- High resonance can self-oscillate
- Use moderate for character without harshness

**Source ID:** [IL-MAN]

---

### Filter Envelope (Env)
**Type:** Knob (bipolar) [UNVERIFIED: Range]

**Function:** Amount of envelope modulation on filter.

**Range:** Negative to positive

**Behavior:**
- **Positive:** Opens filter during note
- **Negative:** Closes filter during note
- **Zero:** No envelope modulation

**Best Practices:**
- Bass: +30% to +50% for punch
- Pads: +10% to +20% for subtle sweep

**Source ID:** [IL-MAN]

---

### Filter LFO
**Type:** Knob [UNVERIFIED: Range]

**Function:** Amount of LFO modulation on filter.

**Vibe Impact:**
- **Low:** Subtle wah effect
- **Medium:** Noticeable movement
- **High:** Extreme wah—Psychedelic

**Best Practices:**
- Pads: Low to medium for movement
- Leads: Medium for character

**Source ID:** [IL-MAN]

---

### Keyboard Tracking (Kybd)
**Type:** Toggle/Amount [UNVERIFIED]

**Function:** Filter follows keyboard pitch.

**Best Practices:**
- Enable for most sounds
- Creates consistent tone across range
- Essential for realistic playing

**Source ID:** [IL-MAN]

---

## VCA (Voltage Controlled Amplifier)

### Gate/Env Toggle
**Type:** Toggle

**Function:** Selects amplitude control mode.

**Behavior:**
- **Gate:** Organ-style on/off
- **Env:** Full ADSR envelope

**Best Practices:**
- Use Env for 99% of sounds
- Gate only for special organ/percussive effects

**Source ID:** [IL-MAN]

---

### ADSR Envelope

#### Attack
**Type:** Knob [UNVERIFIED: Time range]

**Function:** Time to reach full volume.

**Best Practices:**
- Bass: 0-5% (instant)
- Pads: 20-40% (slow fade)
- Leads: 0-10% (fast)

#### Decay
**Type:** Knob [UNVERIFIED: Time range]

**Function:** Time to fall from attack peak to sustain.

#### Sustain
**Type:** Knob [UNVERIFIED: Level range]

**Function:** Level while holding note.

#### Release
**Type:** Knob [UNVERIFIED: Time range]

**Function:** Time to fade after release.

**Best Practices:**
- Pads: Long release (40-60%)
- Bass: Short release (10-20%)

**Source ID:** [IL-MAN]

---

## LFO Section

### Rate
**Type:** Knob [UNVERIFIED: Hz range]

**Function:** Speed of LFO modulation.

**Estimated Range:** 0.1 Hz to 20+ Hz [UNVERIFIED]

**Vibe Impact:**
- **Slow:** Subtle, evolving—Moody, Vibey
- **Medium:** Noticeable—general use
- **Fast:** Vibrato/tremolo—Psychedelic, special FX

**Best Practices:**
- Pads: Slow for subtle movement
- Bass: Medium for animation

**Automation Common:** Moderate

**Source ID:** [IL-MAN]

---

### Delay
**Type:** Knob [UNVERIFIED: Time range]

**Function:** Time before LFO starts after note on.

**Best Practices:**
- Set for evolving sounds
- Creates interest after attack

**Source ID:** [IL-MAN]

---

## Chorus Section

### Chorus I
**Type:** Toggle

**Function:** Subtle chorus effect.

**Effect:** Gentle stereo width and thickness

**Best for:** Subtle enhancement, bass, Jazzy

**Source ID:** [IL-MAN]

---

### Chorus II
**Type:** Toggle

**Function:** Pronounced chorus effect.

**Effect:** More stereo width and movement

**Best for:** Standard 80s sound, Upbeat

**Source ID:** [IL-MAN]

---

### Chorus I+II
**Type:** Combined (both buttons on)

**Function:** Maximum chorus effect.

**Effect:** Thick, lush, almost reverb-like

**Best for:** Pads, maximum width

**CPU Note:** Uses more CPU than single chorus [UNVERIFIED]

**Source ID:** [IL-MAN]

---

## Arpeggiator Section

### Arp On/Off
**Type:** Toggle

**Function:** Enable arpeggiator.

**Source ID:** [IL-MAN]

---

### Mode
**Type:** Selector (Up/Down/Up-Down)

**Function:** Arpeggio pattern direction.

**Best Practices:**
- Up-Down: Classic 80s sound
- Up: Ascending sequences
- Down: Descending sequences

**Source ID:** [IL-MAN]

---

### Range
**Type:** Selector (1-4 octaves) [UNVERIFIED]

**Function:** How many octaves arpeggiator spans.

**Best Practices:**
- 2 octaves: Standard
- 3-4 octaves: Wide, dramatic

**Source ID:** [IL-MAN]

---

## Summary Table

| Parameter | Moody | Upbeat | Psychedelic | Jazzy | Vibey |
|-----------|-------|--------|-------------|-------|-------|
| Filter Cutoff | 20-40% | 60-80% | 40-60% | 40-60% | 30-50% |
| Resonance | Low | Medium | Medium | Low | Low-Med |
| Chorus | I/Off | II/I+II | I+II | I | I/II |
| Attack | Slow | Fast | Variable | Slight | Slight |
| Release | Long | Short | Medium | Medium | Med-Long |
| Sub-Osc | 30-50% | 50-100% | Variable | 20-40% | 40-60% |

---

**Version:** 1.0
**Sources:** [IL-MAN], [UNVERIFIED: exact ranges need verification]
**Last Updated:** 2026-02-03
