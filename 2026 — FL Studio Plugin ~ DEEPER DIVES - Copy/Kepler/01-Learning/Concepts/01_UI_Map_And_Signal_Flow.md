# UI Map And Signal Flow

## UI Tour

### Main Interface Layout

```
┌─────────────────────────────────────────────┐
│  KEPLER - JUNO-6 Emulation                  │
│                                             │
│  ┌──────────┬──────────┬──────────┐        │
│  │   DCO    │   VCF    │   VCA    │        │
│  │ (Osc)    │ (Filter) │ (Amp)    │        │
│  └──────────┴──────────┴──────────┘        │
│                                             │
│  ┌──────────┬──────────┬──────────┐        │
│  │   LFO    │  CHORUS  │   ARP    │        │
│  └──────────┴──────────┴──────────┘        │
└─────────────────────────────────────────────┘
```

### Section Overview

| Section | Controls | Function |
|---------|----------|----------|
| **DCO** | Waveform, Range, PWM, Sub-Osc, LFO | Oscillator sound generation |
| **VCF** | Freq, Res, Env, LFO, Kybd | Filter tone shaping |
| **VCA** | Env/Gate, ADSR | Amplitude envelope |
| **LFO** | Rate, Delay | Modulation source |
| **Chorus** | I, II, I+II buttons | Stereo thickening |
| **Arp** | Range, Mode, Rate | Automatic patterns |

## Signal Flow

```
MIDI Note
    │
    ├──→ [DCO] ──────────────────────────────────┐
    │      │                                       │
    │      ├──→ Sawtooth Wave                     │
    │      ├──→ Pulse Wave (PWM)                  │
    │      ├──→ Sub-Oscillator (-1 octave)        │
    │      └──→ Noise                             │
    │              │                               │
    │              ↓                               │
    │      [LFO → Pitch Modulation]               │
    │              │                               │
    └──→ [VCF] ────┤                               │
           │       │                               │
           ├──→ Cutoff Frequency                   │
           ├──→ Resonance                         │
           ├──→ Env Amount (filter envelope)      │
           ├──→ LFO Amount (filter modulation)    │
           └──→ Keyboard Tracking                 │
                  │                               │
                  ↓                               │
           [Filter processes mixed oscillator]    │
                  │                               │
    ┌─────────────┘                               │
    │                                             │
    ↓                                             │
[VCA + Envelope] ────────────────────────────────┤
    │                                             │
    ├──→ Gate Mode (organ-style)                  │
    └──→ Env Mode (ADSR envelope)                 │
           │                                      │
           ↓                                      │
    [Chorus I/II/I+II] ──────────────────────────┤
           │                                      │
           ├──→ Chorus I (subtle)                 │
           ├──→ Chorus II (pronounced)            │
           └──→ I+II (maximum thickness)          │
                  │                               │
                  ↓                               │
           [Final Output] ←───────────────────────┘
```

## Key Interactions

### DCO (Digitally Controlled Oscillator)

**Waveform Selection:**
- **Sawtooth:** Rich, full sound—classic for pads and leads
- **Pulse:** Hollow, reedy—great for bass and brass
- **PWM:** Variable pulse width creates evolving timbres

**Range Selector:**
- 16', 8', 4' settings (like organ footage)
- Lower numbers = higher pitch
- 8' is standard concert pitch

**Pulse Width Modulation (PWM):**
- Manual: Static pulse width
- LFO: Automated pulse width sweep
- Env: Envelope-controlled width

### VCF (Voltage Controlled Filter)

**Cutoff Frequency:**
- Controls which frequencies pass
- Lower = darker, Higher = brighter
- Cornerstone of subtractive synthesis

**Resonance:**
- Emphasizes frequencies at cutoff
- High values can create self-oscillation
- Classic "squelch" sound

**Filter Envelope (Env):**
- Positive: Opens filter during note
- Negative: Closes filter during note
- Amount controls intensity

**Keyboard Tracking (Kybd):**  
- Filter follows keyboard pitch
- Ensures consistent tone across range

### VCA (Voltage Controlled Amplifier)

**Gate Mode:**
- Organ-style on/off
- No sustain control
- Good for percussive sounds

**Env Mode:**
- Full ADSR envelope
- Attack, Decay, Sustain, Release
- Standard for most sounds

### LFO (Low Frequency Oscillator)

**Rate:**
- Speed of modulation
- Can sync to tempo [UNVERIFIED]

**Delay:**
- Time before LFO starts
- Creates evolving modulation

**Destinations:**
- Pitch (vibrato)
- Filter (wah effect)
- Pulse Width (timbre shift)

### Chorus Section

**Chorus I:**
- Subtle, slow modulation
- Gentle stereo width

**Chorus II:**
- Faster, more pronounced
- Classic JUNO width

**Chorus I+II:**
- Both modes combined
- Maximum thickness
- The "secret weapon" [SRC: REPUTABLE]

## Things Beginners Misunderstand

### 1. "It's Just One Oscillator"
- **Misconception:** Limited compared to multi-osc synths
- **Reality:** Sub-oscillator + chorus = deceptively rich sound
- **Fix:** Embrace the limitation—focus on filter and envelope

### 2. "Chorus is Optional"
- **Misconception:** Chorus is an effect you can skip
- **Reality:** Chorus IS the JUNO sound
- **Fix:** Start with Chorus I or II on every patch

### 3. "Filter Self-Oscillation is a Bug"
- **Misconception:** Squealing filter means something's wrong
- **Reality:** It's a feature—creates pure sine waves
- **Fix:** Use high resonance with key tracking for melodic filtering

### 4. "More Envelope is Better"
- **Misconception:** High filter envelope = better sound
- **Reality:** Subtle envelope moves often sound more professional
- **Fix:** Start with moderate amounts, adjust to taste

### 5. "PWM is Just for Special Effects"
- **Misconception:** PWM sounds too "animated"
- **Reality:** Gentle PWM adds life to static sounds
- **Fix:** Try slow LFO PWM on pads for subtle movement

## Right-Click Behaviors

| Control | Right-Click Menu |
|---------|------------------|
| Any knob | Reset to default, MIDI learn, Create automation clip |
| Waveform buttons | N/A (toggle only) |
| Chorus buttons | N/A (toggle only) |
| Arp controls | N/A (selector buttons) |

## Verification Checklist

To verify unverified claims:

- [ ] Test LFO sync to project tempo
- [ ] Verify self-oscillation frequency at max resonance
- [ ] Compare Chorus I vs II vs I+II with spectrum analyzer
- [ ] Test keyboard tracking accuracy
- [ ] Verify PWM range and behavior

---

**Version:** 1.0
**Sources:** [IL-MAN], [UNVERIFIED: sync features]
**Last Updated:** 2026-02-03
