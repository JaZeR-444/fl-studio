# Workflow: Drum Machine Sync

## Concept
Sync analog drum machine to FL Studio tempo.

## Setup

### Voltage Controller
```
Mod Source: Clock
PPQ: 24 (MIDI standard) or 16 (analog)
Connect to: Drum machine clock input
```

### Drum Machine
```
Clock mode: External
Start/Stop: Via FL transport
Audio: Back to FL for mixing
```

## PPQ Selection

| Hardware | PPQ | Notes |
|----------|-----|-------|
| TR-808/909 | 24 or 12 | Check sync mode |
| Modular seq | 16 | Common analog standard |
| Vintage | Varies | Check manual |

## Integration

### Step 1: Clock Connection
1. Voltage Controller clock output
2. To drum machine clock input
3. Audio from drum machine to FL

### Step 2: Transport Control
- Start FL playback
- Drum machine advances with tempo
- Stop FL → drum stops

### Step 3: Mixing
- Drum machine on dedicated track
- Apply FL effects (EQ, compression)
- Mix with software drums

## Advanced: Hybrid Drums

### Layering
```
FL Drums: Hi-hats, percussion
Hardware: Kick, snare (analog punch)
```

### Processing
1. Record hardware drums to audio
2. Slice in Slicex
3. Mix with FL drums
4. Apply parallel compression

---

**Source:** IL-MAN
**Last Updated:** 2026-02-03
