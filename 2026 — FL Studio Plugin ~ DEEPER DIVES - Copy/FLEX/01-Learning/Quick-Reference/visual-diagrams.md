# FLEX Visual Diagrams & Reference

Quick visual reference for understanding FLEX's parameters, signal flow, and interface layout.

---

## 📐 Envelope Shapes (ADSR) Visualized

### Sharp Pluck
```
Volume
100% |█
     | ██
     |   ███
     |      ████
     |          ██████
  0% |________________███████_____
     A H  D    S      R
     ↑ ↑  ↑    ↑      ↑
     0 0  30%  0%    15%
```
**Use:** Guitars, bells, plucks, marimba

---

### Atmospheric Pad
```
Volume
100%        ████████████████
     |    ███                ████
     |  ██                       ████
     | █                            ████
  0% |█_____________________________|████
     A    H      D    S             R
     ↑    ↑      ↑    ↑             ↑
    70%  20%     0%  100%          70%
```
**Use:** Cinematic pads, drones, ambient textures

---

### Punchy Bass / 808
```
Volume
100% |██
     | ██████████████████████████
     | █                        █
     |                          █
  0% |___________________________█
     A  H    D         S        R
     ↑  ↑    ↑         ↑        ↑
     0% 10%  20%      85%       8%
```
**Use:** Trap 808s, hip-hop bass, sub bass

---

### Piano (Acoustic)
```
Volume
100% |█
     | ██
     |   ████
     |       ██████
     |             ████████████
  0% |________________________████████
     A H   D              S       R
     ↑ ↑   ↑              ↑       ↑
     0 0  55%            35%     45%
```
**Use:** Acoustic piano, electric piano, keys

---

### Synth Lead (Long)
```
Volume
100%      ████
     |   ██   ████████████████████
     |  █                         ███
     | █                             ████
  0% |█_________________________________████
     A    H    D       S                R
     ↑    ↑    ↑       ↑                ↑
    35%  15%  15%     90%              50%
```
**Use:** Trance leads, progressive house, emotional leads

---

### Percussive Hit / Stab
```
Volume
100% |█
     | ██
     |   ███
     |      ████
     |          ████████
  0% |__________________|███████████
     A H   D       S         R
     ↑ ↑   ↑       ↑         ↑
     0 0  40%      0%       40%
```
**Use:** Drums, stabs, impacts, one-shots

---

## 🎛️ Filter Response Curves

### Low Pass Filter (Cutoff @ 1kHz)
```
Amplitude
   |████████|           6dB/octave (gentle)
   |████████|___        12dB/octave (standard)
   |████████|__|        24dB/octave (steep)
   |________|__|____
   20Hz    1kHz    20kHz
            ↑
         Cutoff
```
**Use:** Darkening sounds, vintage warmth, removing harshness

---

### High Pass Filter (Cutoff @ 200Hz)
```
Amplitude
   |        |████████  6dB/octave (gentle)
   |     ___|████████  12dB/octave (standard)
   |  __|   |████████  24dB/octave (steep)
   |__|_____|████████
   20Hz   200Hz   20kHz
           ↑
        Cutoff
```
**Use:** Removing mud, cleaning non-bass elements, clarity

---

### Band Pass Filter (Center @ 1.5kHz)
```
Amplitude
   |        ████
   |       ██  ██
   |      ██    ██
   |     ██      ██
   |____██________██____
   20Hz  1.5kHz    20kHz
          ↑
       Cutoff
```
**Use:** Telephone effect, radio sound, isolating midrange

---

### Peak Filter (Boost @ 10kHz)
```
Amplitude
   |               ██
   |████████████████████  (Res: High)
   |              █  █
   |████████████████████  (Res: Low)
   |_______________|_____
   20Hz         10kHz   20kHz
                 ↑
              Cutoff
```
**Use:** Adding air/sparkle, emphasizing frequencies

---

### Notch Filter (Notch @ 2kHz)
```
Amplitude
   |███████    ███████
   |       ██ ██
   |        ███
   |        █ █
   |________|_|________
   20Hz    2kHz    20kHz
            ↑
         Cutoff
```
**Use:** Removing specific frequencies, creative sweeps

---

## 🔊 Signal Flow Diagram

```
                    ┌─────────────────────────────────────┐
                    │         FLEX PRESET                 │
                    │  (Oscillators/Samples/Synthesis)    │
                    └─────────────┬───────────────────────┘
                                  │
                                  ↓
                    ┌─────────────────────────────────────┐
                    │         MACROS (1-8)                │
                    │  Control multiple parameters        │
                    └─────────────┬───────────────────────┘
                                  │
                                  ↓
                    ┌─────────────────────────────────────┐
                    │      FILTER SECTION                 │
                    │  Cutoff / Resonance / Env Amt       │
                    └─────────────┬───────────────────────┘
                                  │
                                  ↓
                    ┌─────────────────────────────────────┐
                    │    ENVELOPE (A-H-D-S-R)             │
                    │  Shapes volume & filter             │
                    └─────────────┬───────────────────────┘
                                  │
                                  ↓
                    ┌─────────────────────────────────────┐
                    │      MASTER FILTER                  │
                    │  Global filtering (17 types)        │
                    └─────────────┬───────────────────────┘
                                  │
                                  ↓
                    ┌─────────────────────────────────────┐
                    │         DELAY                       │
                    │  Echo effects (3 types)             │
                    └─────────────┬───────────────────────┘
                                  │
                                  ↓
                    ┌─────────────────────────────────────┐
                    │        REVERB                       │
                    │  Spatial effects                    │
                    └─────────────┬───────────────────────┘
                                  │
                                  ↓
                    ┌─────────────────────────────────────┐
                    │        LIMITER                      │
                    │  Dynamics & saturation (5 modes)    │
                    └─────────────┬───────────────────────┘
                                  │
                                  ↓
                    ┌─────────────────────────────────────┐
                    │      MASTER VOLUME                  │
                    │  Final output level                 │
                    └─────────────┬───────────────────────┘
                                  │
                                  ↓
                            FL STUDIO MIXER
```

---

## 🖥️ Interface Layout Map

```
┌──────────────────────────────────────────────────────────────────┐
│  ┌──────────┐                                                     │
│  │  FLEX    │         ANALYSIS DISPLAY                            │
│  │  LOGO    │    ┌────────────────────────────────┐              │
│  └──────────┘    │  [〰] [🌈] [💠] [📊]          │  Theme       │
│  (Double-click   │                                 │  Selector   │
│   for themes)    │   Waveform/Spectrogram/etc     │              │
│                  └────────────────────────────────┘              │
├──────────────────────────────────────────────────────────────────┤
│                                                                    │
│  PITCH SECTION              MACROS (1-8)              FILTER      │
│  ┌──────────┐              ━━━━━━━━━━━━             ┌─────┐     │
│  │   [🎵]   │              ━━━━━━━━━━━━             │ Cut │     │
│  │ Fine Tune│              ━━━━━━━━━━━━             │ off │     │
│  │  [🎹][🔁]│              ━━━━━━━━━━━━             ├─────┤     │
│  │ Arp Dump │              ━━━━━━━━━━━━             │ Res │     │
│  └──────────┘              ━━━━━━━━━━━━             ├─────┤     │
│                            ━━━━━━━━━━━━             │Env  │     │
│                            ━━━━━━━━━━━━             │Amt  │     │
│                                                       └─────┘     │
│                                                                    │
│                          ENVELOPE (A-H-D-S-R)                     │
│                          | | | | |                                │
│                          █ █ █ █ █                                │
│                          █ █ █ █ █                                │
│                          ▓ ▓ ▓ ▓ ▓                                │
│                                                                    │
├──────────────────────────────────────────────────────────────────┤
│  MASTER FX CHAIN                                                  │
│                                                                    │
│  [MASTER FILTER]    [DELAY]         [REVERB]       [LIMITER]     │
│  ┌────────────┐    ┌────────┐      ┌────────┐     ┌────────┐    │
│  │Type: [▼]   │    │Type:[▼]│      │Decay   │     │Type:[▼]│    │
│  │Cutoff  [◐] │    │Time[◐] │      │Size[◐] │     │Pre [◐] │    │
│  │Res     [◐] │    │Fdbk[◐] │      │Mix [◐] │     │        │    │
│  │            │    │Mix [◐] │      │Color[◐]│     │        │    │
│  │            │    │        │      │Mod [◐] │     │        │    │
│  └────────────┘    └────────┘      └────────┘     └────────┘    │
│                                                                    │
│                                              [MASTER VOL]  [🔒]   │
│                                                  ▓▓▓▓▓             │
├──────────────────────────────────────────────────────────────────┤
│  PRESET BROWSER                                    [Show Locks]   │
└──────────────────────────────────────────────────────────────────┘

Legend:
[◐] = Knob (rotary control)
━━━ = Slider (horizontal)
 █  = Slider (vertical)
[▼] = Dropdown menu
[🔒] = Lock icon
```

---

## 🔄 Parameter Interaction Map

### Filter Section Interactions
```
    ┌─────────────┐
    │   CUTOFF    │ ← Controlled by Macro 1 (often)
    └──────┬──────┘
           │
           ↓
    ┌─────────────┐
    │ RESONANCE   │ ← Boosts frequencies AT cutoff point
    └──────┬──────┘
           │
           ↓
    ┌─────────────┐
    │  ENV AMT    │ ← Modulates Cutoff using AHDSR
    └──────┬──────┘
           │
           ↓
    ┌─────────────┐
    │   ENVELOPE  │ ← Affects both Volume AND Filter
    │  (A-H-D-S-R)│
    └─────────────┘
```

### Effects Chain Interactions
```
    SOURCE SOUND
         ↓
    MASTER FILTER ← Global tone shaping
         ↓
    DELAY ← Creates echoes
         ↓
    REVERB ← Adds space (processes delay too!)
         ↓
    LIMITER ← Controls peaks + adds saturation
         ↓
    MASTER VOLUME
         ↓
    FL MIXER
```

---

## 📊 Parameter Value Reference

### Common Cutoff Frequencies
```
   20Hz  ═══════════════════════════════════════ Sub Bass Range
   50Hz  ─────────────────────────────────────── Kick Fundamental
  100Hz  ─────────────────────────────────────── Bass Fundamental
  200Hz  ═══════════════════════════════════════ Bass Harmonics
  500Hz  ─────────────────────────────────────── Muddy Range
  1kHz   ═══════════════════════════════════════ Midrange Core
  2kHz   ─────────────────────────────────────── Presence
  4kHz   ═══════════════════════════════════════ Vocal Clarity
  8kHz   ─────────────────────────────────────── Brightness
 12kHz   ═══════════════════════════════════════ Air/Sparkle
 20kHz   ─────────────────────────────────────── Upper Limit
```

### Percentage to Time Guide (Envelope)
```
  0% ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 0ms (Instant)
 10% ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 10-30ms (Very Fast)
 25% ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50-100ms (Fast)
 50% ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 200-500ms (Medium)
 75% ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 1-2s (Slow)
100% ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 3-5s+ (Very Slow)
```

---

## 🎨 Vectorscope Reference

### Mono Signal (Bass - CORRECT)
```
    L
    |
    |
 ───█───
    |
    |
    R
```
Vertical line = Perfect mono

### Stereo Signal (Pads - CORRECT)
```
    L
    ╱●╲
   ╱   ╲
  ●     ●
   ╲   ╱
    ╲●╱
    R
```
Ball shape = Good stereo

### Phase Issues (PROBLEM!)
```
    L

 ───────
    ●●●
    R
```
Horizontal line = Phase cancellation!

---

## 🎚️ Limiter Mode Comparison

### Clean (Limiter Mode)
```
Input:  ╱╲  ╱╲  ╱╲
       ╱  ╲╱  ╲╱  ╲

Output: ╱─╲ ╱─╲ ╱─╲  ← Just catches peaks
       ╱  ╲╱  ╲╱  ╲
```

### Warming Mode
```
Input:  ╱╲  ╱╲  ╱╲
       ╱  ╲╱  ╲╱  ╲

Output: ╱─╲ ╱─╲ ╱─╲  ← Soft compression
       ╱   ╲   ╲   ╲   + analog warmth
```

### Distortion Mode
```
Input:  ╱╲  ╱╲  ╱╲
       ╱  ╲╱  ╲╱  ╲

Output: ╱█╲ ╱█╲ ╱█╲  ← Hard clipping
       ╱   █   █   ╲  + heavy saturation
```

---

## 🔍 Quick Problem Diagnostics

### Sound Too Bright?
```
CHECK:  Cutoff ─→ Lower to 30-50%
        Macro 1 ─→ Often controls brightness
        Master Filter ─→ Enable LP 12dB @ 8-10kHz
        Resonance ─→ Reduce if high
```

### Sound Too Dark?
```
CHECK:  Cutoff ─→ Raise to 70-90%
        Master Filter ─→ Disable if LP is active
        Macro 1 ─→ Increase
        Reverb Color ─→ Increase to 70%+
```

### Bass Not Mono?
```
CHECK:  Vectorscope ─→ Should be vertical line
        Macros ─→ Look for "Width" or "Unison"
        Master Filter ─→ Use HP on other elements
        Mixer ─→ Set stereo separation to 0%
```

### Too Much CPU?
```
CHECK:  Macros ─→ "Unison" or "Voices" - reduce
        Buffer Size ─→ Increase in FL Settings
        Polyphony ─→ Reduce max voices
        Freeze Track ─→ Render to audio
```

---

*Visual reference guide - keep this handy while producing!*
