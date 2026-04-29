# Gross Beat Quick Start Checklist

## First-Time Setup (5 minutes)

### 1. Load Gross Beat
- [ ] Add Gross Beat to desired mixer channel
- [ ] Verify audio is passing through
- [ ] Set Mix to 50% as starting point

### 2. Explore Preset Slots
- [ ] Click through Time slots 1-12
- [ ] Click through Volume slots 1-6
- [ ] Note which slots produce audible effects
- [ ] Identify your favorites

### 3. Test Basic Effects
- [ ] Try Slot 2 (C#1) for half-time
- [ ] Try Slot 9 (G1) for 1/16 stutter
- [ ] Try Slot 19 (F#2) for tape-stop
- [ ] Try Volume slot 4 (D#4) for 1/16 gate

### 4. Adjust Global Settings
- [ ] Set Attack to 15-20ms (prevents clicks)
- [ ] Set Release to 25-35ms (smooth transitions)
- [ ] Leave Pos at 0% (real-time)
- [ ] Adjust Mix to taste (start at 50%)

---

## Creating Your First Effect

### Half-Time (Hip-Hop Style)

**Step 1:** Load audio (loop or track)
```
Any melodic loop or drum break
Recommended: 140 BPM hip-hop beat
```

**Step 2:** Navigate to Time Slot 2
```
Click slot 02 or press C#1
This is your half-time preset
```

**Step 3:** Configure settings
```
Mix:     100% (full effect)
Pos:     0%   (real-time)
Attack:  20ms (smooth entry)
Release: 30ms (smooth exit)
```

**Step 4:** Test and adjust
```
Play your track
Hear the half-speed effect
If too extreme, reduce Mix to 70%
If clicking, increase Attack to 30ms
```

---

## Common First Effects to Try

### 1. Trap Stutter (Volume)
```
Time Slot:  1 (normal, no change)
Volume Slot: 4 (1/16 gate)
Mix:        80%

Effect: Rhythmic 16th-note gating
Use on: Hi-hats, percussion, vocals
```

### 2. Build-Up Stutter (Time)
```
Time Slot: 9 (1/16 stutter)
Volume:    1 (full)
Mix:       100%

Effect: Fast 16th-note stutters
Use on: Synths, builds, transitions
```

### 3. Tape-Stop Transition
```
Time Slot: 19 (tape-stop)
Volume:    15 (fade out)
Mix:       100%

Effect: Gradual slow-down with fade
Use on: End of sections, transitions
```

### 4. Sidechain Simulation
```
Time:      1 (normal)
Volume:    18 (sidechain 4/4)
Mix:       100%

Effect: Ducking on each beat
Use on: Pads, bass, background elements
```

---

## MIDI Setup (for Performance)

### Step-by-Step

**1. Enable MIDI Input**
```
Right-click Gross Beat title bar
→ Receive notes from
→ Select your controller
```

**2. Test Triggering**
```
Press C1 on keyboard
→ Should trigger Time Slot 1
Press C#1
→ Should trigger Time Slot 2 (half-time)
Press D#4
→ Should trigger Volume Slot 4 (1/16 gate)
```

**3. Create MIDI Clip**
```
Add MIDI Out to separate channel
Set output to Gross Beat channel
Draw notes in piano roll
Quantize to grid (1/16 recommended)
```

---

## Quick Settings Reference

### Attack/Release Starting Points

| Effect Type | Attack | Release | Why |
|-------------|--------|---------|-----|
| General use | 20ms | 30ms | Safe default |
| Stutter | 5ms | 15ms | Snappy |
| Half-time | 20ms | 40ms | Smooth |
| Tape-stop | 50ms | 100ms | Gradual |
| Gate | 10ms | 20ms | Tight |

### Mix Percentages

| Context | Mix % | Result |
|---------|-------|--------|
| Subtle texture | 25-40% | Barely noticeable |
| Moderate effect | 50-60% | Balanced blend |
| Strong effect | 70-85% | Prominent |
| Full effect | 90-100% | Maximum impact |

---

## Safety Checks

### Before Committing to Audio
- [ ] Attack is 10ms or higher (no clicks)
- [ ] Release is appropriate for the effect
- [ ] Mix level works in context
- [ ] No low-end smear on bass (if applicable)
- [ ] Effect is tempo-synced
- [ ] MIDI triggers are quantized (if using)

### Signs You're Doing It Right
- [ ] Effect is musical and groovy
- [ ] No clicks, pops, or artifacts
- [ ] Timing aligns with beat
- [ ] Effect enhances rather than distracts
- [ ] Low end remains intact (for bass)

### Signs You Need to Adjust
- [ ] Clicking sounds → Increase Attack
- [ ] Muddy sound → Decrease Release
- [ ] Can't hear effect → Increase Mix
- [ ] Too extreme → Decrease Mix or adjust slope
- [ ] Out of sync → Enable snap to grid
- [ ] Bass sounds wrong → See low-end warnings

---

## Next Steps

### After This Checklist

1. **Read Buffer Architecture**
   → `01-Learning/Concepts/buffer-architecture.md`

2. **Learn MIDI Triggering**
   → `01-Learning/Concepts/midi-triggering-performance.md`

3. **Try Workflows**
   → `03-Workflows/by-goal/perfect-half-time.md`
   → `03-Workflows/by-goal/trap-stutter-effects.md`

4. **Explore Instruments**
   → `03-Workflows/by-instrument/vocals.md`
   → `03-Workflows/by-instrument/808-sub-bass.md`

---

## One-Page Cheat Sheet

```
GROSS BEAT IN 30 SECONDS:

MIX:     0-100% (effect amount)
POS:     0-100% (buffer position)
ATTACK:  10ms+ (prevents clicks)
RELEASE: 20ms+ (smooth transitions)

TIME SLOTS (C1-B3): Control speed/stutter
VOLUME SLOTS (C4-B6): Control gates/ducking

MOST USED:
C1  = Normal      C4  = Full volume
C#1 = Half-time   D#4 = 1/16 gate  
G1  = 1/8 stutter F5  = Sidechain
F#2 = Tape-stop

DIAGONAL LINE = Normal playback
HORIZONTAL    = Freeze/stutter  
DOWN SLOPE    = Slow down
UP SLOPE      = Speed up

TOP = Full volume, BOTTOM = Silence
```

---

## Source
Quick start based on:
- [SRC: IL-MAN] Image-Line Gross Beat getting started guide
- Common first-user workflows
