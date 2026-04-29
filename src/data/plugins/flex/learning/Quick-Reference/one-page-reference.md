# FLEX - One Page Quick Reference Card

**Print this or keep on second monitor while producing!**

---

## ⚡ Essential Shortcuts

| Action | Shortcut | Notes |
|--------|----------|-------|
| Reset parameter | `Alt + Click` | Returns to designer default |
| Fine adjust | `Hold Alt + Drag` | Precise control |
| Create automation | `Right-Click param` | Opens automation clip |
| Link to MIDI CC | `Ctrl + Right-Click` | Hardware control |
| Next preset | `Ctrl + ↑` | Browse faster |
| Previous preset | `Ctrl + ↓` | Browse faster |
| Favorite preset | `Shift + F` | Save for later |
| Cycle themes | `Double-click logo` | Change colors |

---

## 🎛️ Critical Parameters

### Macros (Most Important!)
- **Macro 1:** Usually Filter/Brightness
- **Macro 2:** Usually Timbre/Character
- **Macro 3-4:** Usually Envelope/Movement
- **Macro 5-8:** Usually Effects amounts
- **Reset All:** `Alt + Click` each slider

### Filter Section
- **Cutoff:** Brightness (↓ = darker, ↑ = brighter)
- **Resonance:** Emphasis at cutoff (70-90% = acid squelch)
- **Env Amt:** Filter movement (+ve = wah, -ve = ow)

### Envelope (A-H-D-S-R)
- **A**ttack: Fade-in time (0% = instant, 70% = slow)
- **H**old: Time at peak before decay
- **D**ecay: Time to reach sustain level
- **S**ustain: LEVEL while held (not time!)
- **R**elease: Fade-out after key release

---

## 🔊 Effects Chain Quick Settings

### Limiter Types
| Type | Use When | Pre Gain |
|------|----------|----------|
| **Limiter** | Clean/transparent | 0-15% |
| **Warming** | Analog warmth | 25-40% |
| **Heating** | Aggressive punch | 50-70% |
| **Distortion** | Maximum aggression | 70-100% |

### Delay Types
- **Fake Stereo:** Widening (15-25ms)
- **True Stereo:** Preserves image
- **Ping Pong:** Bounces L/R

### Reverb Settings by Genre
| Genre | Decay | Mix | Color |
|-------|-------|-----|-------|
| Lo-Fi/Hip-Hop | 0.8-1.5s | 10-20% | 40% |
| Pop/EDM | 2-3s | 25-35% | 60% |
| Cinematic | 5s+ | 40-50% | 65% |

---

## 🎯 Common Problems - Fast Fix

| Symptom | Quick Fix |
|---------|-----------|
| Too bright/harsh | Lower Cutoff OR LP filter @ 8kHz |
| Too dark/muffled | Raise Cutoff OR disable LP filter |
| Too wet/reverby | Lower Reverb Mix to 0-20% |
| Too quiet | Raise Master Volume OR Limiter Pre 10-30% |
| Never stops | Lower Release (R) to 5-15% |
| Has rhythm/arp | Click Arp icon to grey |
| Bass not mono | Check Vectorscope, lower Width/Unison macro |
| Click at start | Raise Attack (A) to 2-5% |
| Too much CPU | Lower Unison/Voices macro, increase buffer |

---

## 📊 Envelope Quick Presets

```
PLUCK    |█\___              A:0%  H:0%  D:30% S:0%   R:15%
PAD         /‾‾‾\___         A:70% H:20% D:0%  S:100% R:70%
BASS     |█‾‾‾‾‾             A:0%  H:10% D:20% S:85%  R:8%
PIANO    |█\____             A:0%  H:0%  D:55% S:35%  R:45%
LEAD       /‾‾‾‾‾\__         A:35% H:15% D:15% S:90%  R:50%
HIT      |█\____             A:0%  H:0%  D:40% S:0%   R:40%
```

---

## 🎨 Visual Analysis Quick Read

### Vectorscope (Stereo Width)
```
 MONO      STEREO     PHASE PROBLEM!
  (Bass)    (Pads)    (Fix it!)
   |         ╱●╲
   █        ●   ●      ───●●●───
   |         ╲●╱
```
**Bass MUST be vertical line!**

### Frequency Zones
```
   20Hz ════ Sub Bass
  100Hz ──── Bass Fundamental
  200Hz ════ Bass Harmonics
  500Hz ──── Muddy Zone (HP this on non-bass)
  1kHz  ════ Midrange Core
  4kHz  ──── Vocal Clarity
  8kHz  ════ Brightness
 12kHz  ──── Air/Sparkle
```

---

## 🎵 Genre Quick Start

### Lo-Fi Hip Hop (70-90 BPM)
- **Filter:** LP 12dB @ 2-4kHz
- **Limiter:** Warming @ 30-40% Pre
- **Reverb:** Short decay, low mix
- **Macros:** Detune 30-50%, Noise 10-20%

### Trap (130-160 BPM)
- **Filter:** HP to clear bass space
- **Limiter:** Distortion @ 70-100% (808s)
- **Reverb:** High (drenched), 40%+
- **Bass:** Mono, tight release (5-10%)

### Techno (125-135 BPM)
- **Filter:** Automate cutoff aggressively
- **Limiter:** Heating @ 50-70%
- **Reverb:** Dark (30%), controlled
- **Delay:** Ping Pong 1/8

### Trance (135-140 BPM)
- **Filter:** Open (70-90%)
- **Limiter:** Clean @ 10-20%
- **Reverb:** Massive (5s+, 50% mix)
- **Delay:** 1/4 Dot, high feedback

### Cinematic (Variable)
- **Filter:** Full range
- **Limiter:** Transparent @ 0-15%
- **Reverb:** Epic (5s+, 40-50%)
- **Envelope:** Long attacks (50-70%)

---

## 🔧 Master Filter Quick Settings

| Need | Type | Cutoff | Res | Use |
|------|------|--------|-----|-----|
| Clean up | HP 12dB | 180Hz | 0% | Remove mud |
| Vintage | LP 12dB | 3kHz | 0% | Lo-fi warmth |
| Telephone | BP | 1.5kHz | 15% | Special FX |
| Acid bass | LP 24dB | Automate! | 80% | Squelch |
| Air/sparkle | Peak | 10kHz | 30% | Brightness |
| Tame harsh | LP 6dB | 9kHz | 0% | Smooth highs |

---

## 💡 Golden Rules

1. **Lock Master Volume** when browsing presets
2. **Bass MUST be mono** - check Vectorscope
3. **NO reverb on bass** - ever!
4. **High Pass everything** except kick/bass
5. **Alt + Click macros** to reset defaults
6. **Automate for movement** - static = boring
7. **Short release on bass** (5-10%) to avoid mud
8. **Check in mono** before finalizing
9. **Start with Limiter mode** - only add color if needed
10. **Use locks feature** to maintain settings while browsing

---

## 📐 Percentage to Time Guide

| % | Attack/Release Time |
|---|---------------------|
| 0% | Instant (0ms) |
| 10% | Very fast (10-30ms) |
| 25% | Fast (50-100ms) |
| 50% | Medium (200-500ms) |
| 75% | Slow (1-2s) |
| 100% | Very slow (3-5s+) |

---

## 🎚️ Mixing Checklist

- [ ] Bass in mono (Vectorscope = vertical line)
- [ ] No reverb on bass (0%)
- [ ] High Pass non-bass elements (180Hz)
- [ ] Master Volume locked
- [ ] Release times short enough (no overlap)
- [ ] Limiter appropriate for genre
- [ ] Check mono compatibility
- [ ] Vectorscope shows no phase issues
- [ ] CPU usage acceptable
- [ ] Automation adds movement

---

## 📍 File Locations

**Packs:** `Documents\Image-Line\FLEX\Packs`
**Presets:** Built into `.flexpack` files (encrypted)

---

## 🔗 Quick Navigation

- **Full Index:** `MASTER-INDEX.md`
- **Visual Diagrams:** `01-Learning/Quick-Reference/visual-diagrams.md`
- **Parameter Details:** `02-Data/parameters/flex-params.json`
- **Genre Templates:** `02-Data/presets/genre-templates.json`
- **Effect Recipes:** `02-Data/presets/delay-reverb-spaces.json`
- **Troubleshooting:** `02-Data/rules/flex-troubleshooting.json`

---

**💾 Save this file as PDF or print for desk reference!**

*Version 1.1 - 2026-01-30*
