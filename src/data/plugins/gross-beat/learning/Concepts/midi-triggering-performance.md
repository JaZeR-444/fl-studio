# MIDI Triggering and Real-Time Performance

## The Power of MIDI Control

Gross Beat's 36 Time slots and 36 Volume slots can be triggered in real-time via MIDI, transforming the plugin from a static effect into a **live performance instrument**. This is essential for creating dynamic, evolving arrangements.

[SRC: IL-MAN]

---

## MIDI Mapping Overview

### Note Range
```
MIDI Note Range for Gross Beat:

OCTAVE 1 (C1 - B1): Time Slots 1-12
OCTAVE 2 (C2 - B2): Time Slots 13-24
OCTAVE 3 (C3 - B3): Time Slots 25-36

OCTAVE 4 (C4 - B4): Volume Slots 1-12
OCTAVE 5 (C5 - B5): Volume Slots 13-24
OCTAVE 6 (C6 - B6): Volume Slots 25-36
```

### Quick Reference Table

| Octave | Note Range | Controls | Slot Range |
|--------|------------|----------|------------|
| C1-B1 | White + Black keys | Time Slots | 1-12 |
| C2-B2 | White + Black keys | Time Slots | 13-24 |
| C3-B3 | White + Black keys | Time Slots | 25-36 |
| C4-B4 | White + Black keys | Volume Slots | 1-12 |
| C5-B5 | White + Black keys | Volume Slots | 13-24 |
| C6-B6 | White + Black keys | Volume Slots | 25-36 |

---

## Setting Up MIDI Triggering

### Step 1: Enable MIDI Input
1. Load Gross Beat on an insert channel
2. Right-click the Gross Beat title bar
3. Select "Receive notes from"
4. Choose your MIDI controller or channel

### Step 2: Configure Input Channel
- **Option A:** Use a separate MIDI channel routed to Gross Beat
- **Option B:** Use the same channel's note data (melody triggers effects)
- **Option C:** Use a controller's drum pads for triggering

### Step 3: Slot Selection Strategy
Organize your slots logically:
```
Time Slots 1-6:    Speed effects (half-time, normal, double)
Time Slots 7-18:   Stutter patterns (various rhythms)
Time Slots 19-30:  Tape effects and transitions
Time Slots 31-36: Special/utility slots

Volume Slots 1-6:  Basic gates (4th, 8th, 16th, triplet)
Volume Slots 7-18: Complex patterns (dotted, mixed)
Volume Slots 19-30: Sidechain curves
Volume Slots 31-36: Utility (full, fade, etc.)
```

---

## Performance Techniques

### 1. Live Stutter Performance
**Setup:**
- Load drum loop on channel
- Add Gross Beat with stutter slots (7-12)
- Route MIDI controller pads to trigger slots

**Performance:**
```
Bar 1: Play normally
Bar 2: Tap pad 7 (1/4 stutter) on beats 3-4
Bar 3: Tap pad 9 (1/16 stutter) on beat 2
Bar 4: Tap pad 8 (1/8 stutter) for fill
```

**Pro tip:** Practice the timing - hitting exactly on the beat creates tight effects, off-beat creates syncopation.

### 2. Tape-Stop Transitions
**Setup:**
- Create tape-stop slot (steep downward slope)
- Map to convenient key/pad (e.g., C3)

**Performance:**
```
[Playing normally]
Bar 8, Beat 3: Trigger tape-stop slot
[Effect: gradual slow down]
Bar 8, Beat 4: Trigger normal slot or mute
[Transition complete]
```

### 3. Half-Time Switching
**Setup:**
- Slot 1: Normal (diagonal)
- Slot 2: Half-time (gentle slope)
- Map C1 = Normal, C#1 = Half-time

**Performance:**
```
Intro:  Trigger C1 (normal) - 4 bars
Verse:  Trigger C#1 (half-time) - 8 bars
Chorus: Trigger C1 (normal) - 4 bars
Break:  Trigger C#1 (half-time) - 2 bars
```

### 4. Combined Time + Volume Performance
**Setup:**
- Time slots on Octaves 1-3
- Volume slots on Octaves 4-6
- Use both hands or split keyboard

**Performance:**
```
Left hand (Time):   Switch between normal/half-time/stutter
Right hand (Volume): Add gates, ducking, rhythmic patterns
```

**Effect:** Complete rhythmic and temporal control in real-time

---

## Programming MIDI Patterns

### In the Piano Roll
1. Create a new MIDI clip
2. Set it to output to Gross Beat's channel
3. Draw notes corresponding to desired slots
4. Quantize to ensure tight timing

### Example MIDI Pattern: Trap Build-Up
```
MIDI Notes in Piano Roll:

Bar 1: C1 (normal) - held for full bar
Bar 2: C1 (normal) - held for full bar
Bar 3: 
  - Beat 1: C1 (normal)
  - Beat 2: C#1 (half-time)
  - Beat 3: D1 (1/8 stutter)
  - Beat 4: D#1 (1/16 stutter)
Bar 4:
  - Beat 1: E1 (tape-stop)
  - Beat 2-4: [silence/drop]
```

### Automation vs. MIDI Notes
| Method | Best For | Pros | Cons |
|--------|----------|------|------|
| **MIDI Notes** | Rhythmic patterns, performance | Easy to edit, visual in piano roll | Requires dedicated channel |
| **Automation** | Gradual changes, fixed arrangements | Smooth curves, precise timing | Less immediate, harder to edit |
| **Hybrid** | Complex productions | Best of both | More setup time |

---

## Advanced MIDI Techniques

### Velocity Sensitivity
Gross Beat responds to note velocity:
- **High velocity (100-127):** Full effect (Mix = 100%)
- **Medium velocity (64-99):** Blend (Mix = 50-75%)
- **Low velocity (1-63):** Subtle effect (Mix = 25-50%)

**Application:**
```
Verse:  Medium velocity for subtle half-time
Chorus: High velocity for full stutter effects
Bridge: Low velocity for texture only
```

### Note Length = Duration
Hold notes longer for sustained effects:
- **Short notes (1/16):** Quick stutter triggers
- **Medium notes (1/4):** Pattern duration
- **Long notes (1 bar+):** Sustained time effects

### Layering Slots
Trigger multiple slots simultaneously:
- Time slot C1 + Volume slot C4 = Half-time with gating
- Time slot D1 + Volume slot D4 = Stutter with ducking

### Using Black Keys
Don't forget the sharps/flats:
```
C1  = Slot 1    C#1 = Slot 2
D1  = Slot 3    D#1 = Slot 4
E1  = Slot 5    F1  = Slot 6
F#1 = Slot 7    G1  = Slot 8
G#1 = Slot 9    A1  = Slot 10
A#1 = Slot 11   B1  = Slot 12
```

---

## Common MIDI Performance Mistakes

### 1. Timing Drift
**Problem:** Notes not quantized, effects sound sloppy
**Solution:** Quantize to 1/16 or 1/32, use grid snap

### 2. Over-Triggering
**Problem:** Too many slot changes create chaos
**Solution:** Leave space between triggers, let effects breathe

### 3. Wrong Octave
**Problem:** Notes in wrong octave don't trigger anything
**Solution:** Check keyboard range, use note labels

### 4. Forgetting Release
**Problem:** Effect continues indefinitely
**Solution:** Program "normal" slot triggers to reset, or automate Mix to 0%

### 5. MIDI Channel Conflict
**Problem:** Notes intended for instrument trigger Gross Beat instead
**Solution:** Use separate MIDI channels, filter with MIDI Out

---

## Integration with FL Studio Features

### Using MIDI Out
Route MIDI from one channel to control Gross Beat on another:
1. Add MIDI Out to source channel
2. Set output channel to Gross Beat's channel
3. Play notes on source, hear effects on Gross Beat channel

### With Layer Channels
Layer multiple Gross Beat instances:
1. Create Layer channel
2. Add multiple channels with Gross Beat
3. Each with different slot configurations
4. Trigger from single MIDI input

### Patcher Integration
Build complex Gross Beat setups:
1. Load Patcher
2. Add multiple Gross Beat modules
3. Route MIDI to specific modules
4. Create parallel processing chains

### Gross Beat + Gross Beat
Stack two instances:
- **Instance 1:** Time manipulation (half-time)
- **Instance 2:** Volume gating (16th notes)
- **Result:** Complex rhythmic half-time effect

---

## Performance Workflow Tips

### Preparation Checklist
Before performing/recording:
- [ ] All slots programmed and labeled
- [ ] MIDI routing confirmed
- [ ] Controller mapped and tested
- [ ] Backup "normal" slot ready (C1)
- [ ] Mix levels balanced

### Recording MIDI Performance
1. Arm Gross Beat channel for recording
2. Enable "Note" recording (not just automation)
3. Perform slot switching
4. Edit in piano roll after recording

### Live Performance Considerations
- **Latency:** Test system latency, compensate if needed
- **CPU:** Freeze tracks to ensure stable performance
- **Backup:** Have audio stems ready in case of issues
- **Simplicity:** Use fewer slots live than in studio

---

## Summary

MIDI triggering transforms Gross Beat from a studio tool into a **performance instrument**:
- **36 Time slots** = Real-time speed/stutter control
- **36 Volume slots** = Real-time gating/ducking
- **MIDI notes** = Instant, musical triggering
- **Velocity/Length** = Dynamic expression

Master MIDI triggering and you'll unlock Gross Beat's full potential for live production and performance.
