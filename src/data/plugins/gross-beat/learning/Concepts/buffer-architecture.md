# Buffer Architecture: Understanding the 2-Bar Rolling Buffer

## Core Concept

Gross Beat operates on a **2-bar rolling audio buffer** that continuously records incoming audio and allows real-time manipulation of playback position and volume. This buffer is the foundation of all Gross Beat effects.

[SRC: IL-MAN]

---

## How the Buffer Works

### Continuous Recording
- **Size:** 2 bars of audio (configurable tempo-synced)
- **Behavior:** Constantly overwrites oldest audio with newest
- **Visual:** Represented as a grid showing buffer position over time

### Playback Position (Time Envelope)
The diagonal line across the grid represents **normal playback**:
- **Left to right:** Time progression through the buffer
- **Diagonal:** Normal speed (no time manipulation)
- **Horizontal:** Frozen/repeated section (stutter effect)
- **Upward slope:** Speed up (fast forward)
- **Downward slope:** Slow down (half-speed, tape-stop)

### Volume Envelope
Vertical manipulation of the grid creates **amplitude changes**:
- **Top:** Full volume
- **Bottom:** Silence
- **Patterns:** Rhythmic gating, sidechain-style ducking

---

## The Two Envelope Types

### Time Envelope (Horizontal/Time Slots)
Controls **when** audio plays from the buffer:

| Shape | Effect | Use Case |
|-------|--------|----------|
| Diagonal line | Normal playback | Pass-through |
| Horizontal line | Freeze/repeat | Stutter, glitch |
| Shallow upward | Slight speed up | Energy increase |
| Shallow downward | Slight slow down | Half-time feel |
| Steep downward | Dramatic slow down | Tape-stop effect |
| Step pattern | Rhythmic switching | Patterned effects |

### Volume Envelope (Vertical/Volume Slots)
Controls **how loud** audio plays:

| Shape | Effect | Use Case |
|-------|--------|----------|
| Full height | Normal volume | Pass-through |
| On/off blocks | Rhythmic gating | Trap-style patterns |
| Fade in/out | Attack/release shaping | Smooth transitions |
| Ramp patterns | Sidechain simulation | Ducking effects |
| Random drops | Glitch textures | Experimental |

---

## Slot System Overview

### 36 Time Slots + 36 Volume Slots
- Each slot contains one envelope pattern
- Switch between slots in real-time via MIDI
- Slots can be combined (Time + Volume simultaneously)

### Slot Categories
**Time Slots (1-36):**
- 1-12: Speed variations (half-time, double-time)
- 13-24: Stutter/Glitch patterns
- 25-36: Tape effects and transitions

**Volume Slots (1-36):**
- 1-12: Basic gates (4th, 8th, 16th notes)
- 13-24: Complex rhythmic patterns
- 25-36: Ducking and sidechain curves

---

## Visual Grid Interpretation

### The Grid Display
```
Buffer Position (Y-axis)
    ↑
    |  \  <- Playback moves diagonally (normal)
    |   \
    |    \
    |     \____  <- Horizontal = frozen/stutter
    |          \
    +------------→ Time (X-axis)
```

### Reading Envelopes
1. **Time envelope** shows buffer read position over playback time
2. **Volume envelope** shows amplitude over playback time
3. **Intersection** creates the final effect

---

## Buffer Memory & Latency

### Zero Latency Operation
- Effect applies in real-time to live audio
- No pre-buffering required for basic effects
- MIDI triggering adds minimal latency (< 5ms)

### Memory Considerations
- 2 bars = approximately 3-6 seconds at typical tempos
- Higher sample rates = more memory usage
- Mono/stereo supported (stereo uses 2x buffer)

---

## Common Buffer Misconceptions

### "I can reverse audio with Gross Beat"
**Incorrect.** Gross Beat doesn't reverse audio - it manipulates playback position and speed from the buffer. True reverse requires time-reversing the audio file.

### "The buffer remembers everything"
**Partially correct.** Only the most recent 2 bars are retained. Older audio is continuously overwritten.

### "I need to render before hearing effects"
**Incorrect.** Gross Beat processes in real-time. However, committing to audio is recommended for CPU-intensive sessions.

---

## Practical Buffer Tips

### For Clean Half-Time
1. Start playback at exact bar boundary
2. Use slot with gentle downward slope
3. Enable Attack/Release smoothing to avoid clicks
4. Set Mix to 100% for full effect

### For Rhythmic Gating
1. Use Volume slot with stepped pattern
2. Sync to project tempo
3. Adjust envelope smoothing for click prevention
4. Blend with dry signal using Mix control

### For Tape-Stop Effects
1. Steep downward slope in Time envelope
2. May add slight volume fade in Volume envelope
3. Trigger at transition points via MIDI
4. Combine with reverb tail for smooth landing

---

## Buffer Position (Pos) Control

The **Pos** knob adjusts where in the buffer playback begins:
- **0%:** Start of buffer (2 bars ago)
- **50%:** Middle of buffer (1 bar ago)
- **100%:** End of buffer (current position)

**Use case:** Delay-style effects by playing slightly behind the beat.

---

## Technical Specifications

| Spec | Value |
|------|-------|
| Buffer Duration | 2 bars (tempo-synced) |
| Sample Rate Support | Up to 192 kHz |
| Bit Depth | 32-bit float internal |
| MIDI Note Range | C1 to B3 (36 slots) |
| Latency | < 5ms (MIDI triggered) |
| CPU Usage | Low to Moderate |

---

## Summary

The 2-bar rolling buffer is Gross Beat's core engine. Understanding that:
- **Time envelope** = Which part of buffer plays when
- **Volume envelope** = How loud it plays
- **Slots** = Preset patterns you can switch between
- **Pos** = Where in the buffer you start reading

Master these concepts and you can create everything from subtle half-time grooves to extreme glitch textures.
