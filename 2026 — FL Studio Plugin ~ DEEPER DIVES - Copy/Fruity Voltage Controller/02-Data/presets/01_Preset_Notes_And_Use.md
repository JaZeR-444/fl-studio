# Fruity Voltage Controller: Preset Notes and Use

## Detailed Preset Documentation

### Preset 1: "Eurorack Basic"

**Purpose:** Standard monophonic voice control

**Setup:**
1. Connect Left output to VCO 1V/Oct input
2. Connect Right output to envelope gate
3. Set envelope to control VCA and/or filter
4. Play notes in Piano Roll

**Settings:**
```
Pitch Scale: 1V/Oct
Voltage Range: 5V

Left:
  Mod Source: Pitch
  Offset: 0.0
  Scale: 1.0

Right:
  Mod Source: Gate
  Offset: +2.0
  Scale: 1.0
```

**When to Use:**
- Any Eurorack oscillator
- Moog, Doepfer, Intellijel, etc.
- Standard 1V/Oct systems

---

### Preset 2: "Moog Mother-32"

**Purpose:** Optimized for Mother-32 semi-modular

**Setup:**
1. Left → Mother-32 KB (pitch)
2. Right → Mother-32 Gate (envelope trigger)
3. Use Mother-32's internal envelope and VCA

**Settings:**
```
Same as Eurorack Basic
```

**Notes:**
- Mother-32 uses 1V/Oct standard
- Gate input expects 5V positive
- No additional modules needed

---

### Preset 3: "Analog Drums"

**Purpose:** Sync analog drum machine to FL tempo

**Setup:**
1. Set one channel to Clock
2. Set PPQ to match drum machine
3. Connect to drum machine clock input

**Settings:**
```
Mod Source: Clock
PPQ: 24 (MIDI) or 16 (common analog)
```

**Common Drum Machines:**
- TR-808/909: 24 PPQ or 12 PPQ
- Modular sequencers: 16 PPQ
- Vintage: Check manual

---

### Preset 4: "3-Voice Stack"

**Purpose:** Control 3 analog voices from FL

**Setup:**
```
Track 10 (Main): Voice 1
Track 11 (Out 2): Voice 2
Track 12 (Out 3): Voice 3
Track 13 (Out 4): Clock/Modulation
```

**Settings per voice:**
```
Each:
  Left: Pitch
  Right: Gate
```

**Notes:**
- Each voice needs calibration
- Use Automap for quick setup [SRC: IL-MAN]
- Layer voices for thickness

---

### Preset 5: "Filter Sweep"

**Purpose:** Pitch + gate + filter automation

**Setup:**
```
Main L: Pitch → VCO
Main R: Gate → EG
Out 2 L: None(0V) + automated offset → Filter cutoff
Out 2 R: Velocity → VCA
```

**Automation:**
- Create automation clip for Out 2 L offset
- Draw filter sweeps
- Link to song sections

---

## Quick Selection Guide

| I Have... | Use Preset | Notes |
|-----------|-----------|-------|
| Eurorack oscillator | Eurorack Basic | Calibrate first |
| Mother-32 | Moog Mother-32 | Plug and play |
| TR-808/909 | Analog Drums | 24 PPQ |
| Multiple voices | 3-Voice Stack | Calibrate each |
| Want filter sweeps | Filter Sweep | Add automation |

---

**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03
