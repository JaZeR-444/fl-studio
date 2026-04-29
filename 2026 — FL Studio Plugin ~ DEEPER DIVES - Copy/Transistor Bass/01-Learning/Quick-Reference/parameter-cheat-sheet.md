# Transistor Bass - Parameter Cheat Sheet

**Plugin Type:** Subtractive Synthesizer (TB-303 Emulation)
**Category:** Bass Synth / Acid Bassline Generator
**Official Manual:** [Transistor Bass](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Transistor%20Bass.htm)

---

## 🎚️ Main Synthesis Parameters

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **Waveform** | Square ↔ Saw | Blends between square and sawtooth waves | Start with full square for classic acid |
| **Cutoff** | 0-100% | Filter cutoff frequency | Sweep this for the signature TB-303 squelch |
| **Resonance** | 0-100% | Filter resonance (Q factor) | High values create screaming acid sounds |
| **Env Mod** | 0-100% | Filter envelope modulation depth | Higher = more envelope movement on cutoff |
| **Decay** | 0-100% | Filter envelope decay time | Short decay = plucky, long decay = sweeping |
| **Accent** | 0-100% | Boosts cutoff, resonance, and volume | Use sparingly for emphasis on key notes |
| **Tuning** | -1 to +1 octave | Master pitch adjustment | Fine-tune to other instruments |
| **Volume** | 0-100% | Output level (pre-distortion) | Set before distortion to control drive amount |

---

## 🎛️ Advanced Tweaks Section

| Parameter | Range | Function | When to Use |
|-----------|-------|----------|-------------|
| **HP (High-Pass)** | 0-100% | High-pass filter for bass character | Remove excessive sub-bass rumble |
| **Min Envelope Decay** | 0-100% | Critical for accent circuit behavior | Affects how accents respond dynamically |
| **Filter Key Follow** | 0-100% | Makes cutoff track keyboard pitch | Add brightness to higher notes (not in original TB-303) |
| **LFO → PW** | -100 to +100% | LFO modulation of pulse width | Create evolving timbres |
| **LFO Rate** | 0-100% | LFO oscillation speed | Sync to BPM for rhythmic modulation |
| **PW (Pulse Width)** | 0-100% | Direct pulse width control | 50% = square wave, adjust for tone |
| **VCA Smooth** | 0-100% | Removes attack/release clicks | Increase if you hear pops on note triggers |

---

## 🔧 Synthesis Engine Options

| Engine | Description | Use Case |
|--------|-------------|----------|
| **V1 Legacy** | Original algorithm | Preserves compatibility with old projects |
| **V2 Extended** | Extended cutoff range | More extreme filter sweeps |
| **V2 TB303** | Most accurate emulation | Closest to hardware TB-303 behavior |

**Recommendation:** Use **V2 TB303** for authentic acid bass, **V2 Extended** for modern production flexibility.

---

## 🎹 Sequencer Parameters

| Control | Function | Shortcut |
|---------|----------|----------|
| **Length** | 1-16 steps | Adjust pattern length |
| **Gate** | On/Off per step | **G** key |
| **Slide** | Portamento between notes | **S** key |
| **Accent** | Emphasis on step | **A** key |
| **Octave** | 0-10 range | Set note pitch range |
| **Gate Length** | Note duration | Shorter = staccato, longer = legato |
| **Swing/Shuffle** | Groove timing | Add swing for less robotic feel |
| **Transpose** | Via MIDI Channel 13 | Change key without reprogramming |

**Navigation:** Arrow keys to move between steps

---

## 🎸 Effects Section

### Distortion (Pro Co Rat Emulation)
| Parameter | Function |
|-----------|----------|
| **Drive** | Distortion amount |
| **Tone** | Brightness/darkness of distortion |
| **Mix** | Dry/wet balance |

**Tip:** Inspired by Hardfloor's setup - use heavy drive for aggressive acid

### Delay
| Parameter | Function |
|-----------|----------|
| **Time** | Delay length (BPM sync available) |
| **Feedback** | Number of repeats |
| **Mix** | Delay level |

### Reverb (Based on FL Reeverb 2)
| Parameter | Function |
|-----------|----------|
| **Size** | Room size simulation |
| **Damping** | High-frequency absorption |
| **Predelay Feedback** | Echo before reverb tail |
| **Mix** | Reverb level |

---

## 📊 Program System

- **128 Programs** available (each links a patch + sequence)
- **Edit Buffer System:** Prevents accidental overwrite
  - **Read:** Load program into edit buffer
  - **Write:** Save edit buffer to program slot
- **Autofollow Mode:** MIDI notes automatically trigger programs

---

## 🎹 Piano Roll Integration

When **Sequencer Mode** is deselected:

| Feature | How to Use |
|---------|------------|
| **Portamento/Slide** | Overlap notes in piano roll |
| **Accent** | Set velocity ≥ 86% (220/255) |
| **Transpose** | Use color group 13 for sequence transposition |

---

## 🎯 Quick Start Workflow

### Classic Acid Bass in 30 Seconds
1. **Engine:** Select **V2 TB303**
2. **Waveform:** Full **Square**
3. **Cutoff:** Start at **30%**
4. **Resonance:** Set to **70%**
5. **Env Mod:** Set to **80%**
6. **Decay:** Set to **40%**
7. **Sequencer:** Program 16-step pattern with slides and accents
8. **Distortion:** Drive to **50%**, Tone to **60%**

### Deep Sub Bass
1. **Waveform:** Full **Sawtooth**
2. **Cutoff:** Set to **20%**
3. **Resonance:** Keep low at **10%**
4. **HP Filter:** Reduce to **0%** for maximum sub
5. **Effects:** Keep dry (no distortion/reverb)

---

## ⚡ Pro Tips

1. **Accent Circuit:** The accent parameter simultaneously boosts cutoff, resonance, AND volume - use strategically
2. **Slide Technique:** Overlapping notes creates portamento/glide between pitches - essential for acid lines
3. **Edit Buffer Safety:** Always **Read** before making major changes to preserve original
4. **Multi-Pattern Sharing:** Use same patch across multiple programs for different melodies with identical timbre
5. **BPM Sync Everything:** Sync LFO and Delay to project tempo for tight groove integration

---

## 🔗 Related Plugins

- **BooBass** - Alternative subtractive bass synth
- **Sawer** - Advanced subtractive synthesis
- **Sytrus** - FM-based bass synthesis
- **Fruity DX10** - Another FM option for bass

---

**Last Updated:** February 3, 2026
**Status:** ⭐ HIGH PRIORITY - Essential reference material
