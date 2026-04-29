# Gross Beat Visual Reference Guide

## Interface Overview

```
┌─────────────────────────────────────────────────────────────────┐
│  GROSS BEAT                                    [Time][Volume] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ENVELOPE GRID (2 bars visible)                              │
│     ┌──────────────────────────────────────┐                    │
│     │                                      │                    │
│     │  Buffer Position                     │                    │
│     │     ↑                                │                    │
│     │ 100%│      /\\    <- Envelope        │                    │
│     │  50%│     /  \\      shape            │                    │
│     │   0%│____/    \\____________          │                    │
│     │     +-----------------------→         │                    │
│     │          Time (2 bars)               │                    │
│     └──────────────────────────────────────┘                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  SLOT GRID                                                      │
│  ┌────┬────┬────┬────┬────┬────┐                               │
│  │ 01 │ 02 │ 03 │ 04 │ 05 │ 06 │ <- Time Slots (Rows 1-6)       │
│  ├────┼────┼────┼────┼────┼────┤                               │
│  │ 07 │ 08 │ 09 │ 10 │ 11 │ 12 │                               │
│  ├────┼────┼────┼────┼────┼────┤                               │
│  │ ...│ ...│ ...│ ...│ ...│ ...│                               │
│  ├────┼────┼────┼────┼────┼────┤                               │
│  │ 31 │ 32 │ 33 │ 34 │ 35 │ 36 │                               │
│  └────┴────┴────┴────┴────┴────┘                               │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  MIX     POS     ATTACK     RELEASE                             │
│  [100%]  [0%]   [20ms]     [30ms]                               │
│                                                                 │
│  [◄ Prev]  SLOT 12 / 36  [Next ►]                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Envelope Shape Library

### Time Envelope Patterns

#### 1. Normal Playback (Baseline)
```
    |
    |     /
    |    /
    |   /
    |  /
    | /
    |/
    +----------------
```
**Meaning:** Diagonal line = normal speed playback
**Use:** Reference/bypass slot

#### 2. Half-Time (Hip-Hop Classic)
```
    |
    |       /
    |      /
    |     /
    |    /
    |   /
    |  /
    | /
    |/
    +----------------
```
**Meaning:** Gentle slope = 50% speed
**Pitch:** -12 semitones (one octave down)
**Use:** The signature hip-hop half-time effect

#### 3. Double-Time
```
    |
    | /
    |/
    +----------------
```
**Meaning:** Steep slope = 200% speed
**Pitch:** +12 semitones (one octave up)
**Use:** Energy increases, fast sections

#### 4. Freeze/Stutter
```
    |
    |_______
    |       |
    |       |
    |       |_______
    |               |
    +----------------
```
**Meaning:** Horizontal line = repeated section
**Use:** Stutter effects, trap style

#### 5. Tape-Stop
```
    |
    |\
    | \
    |  \
    |   \
    |    \
    |     \
    |      \
    |       \___
    +----------------
```
**Meaning:** Steep downward curve = gradual slow down
**Use:** Transitions, endings, dramatic moments

#### 6. Reverse Simulation (Glitch)
```
    |
    |  /\       /\
    | /  \     /  \
    |/    \___/    \
    +----------------
```
**Meaning:** Rapid position jumps
**Use:** Glitch textures, experimental

### Volume Envelope Patterns

#### 1. Full Volume (Pass-through)
```
    |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
    |                  
    |                  
    +----------------
```

#### 2. 1/4 Note Gate
```
    |‾‾‾|   |‾‾‾|   |‾‾‾|
    |   |___|   |___|   |
    +--------------------
    1   2   3   4
```

#### 3. 1/8 Note Gate
```
    |‾‾|_|‾‾|_|‾‾|_|‾‾|_
    |  | |  | |  | |  |
    +--------------------
```

#### 4. 1/16 Note Gate (Trap)
```
    |‾|_|‾|_|‾|_|‾|_|‾|_|‾|_|‾|_|‾|_
    | | | | | | | | | | | | | | | |
    +--------------------------------
```

#### 5. Sidechain Ducking
```
    |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
    |      /‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
    |_____/
    +--------------------------------
    Kick  Snare Kick  Snare
```

#### 6. Fade In/Out
```
    |        /‾‾‾‾‾‾\        
    |       /        \       
    |______/          \______
    +-------------------------
```

## Color Coding Reference

| Element | Color | Meaning |
|---------|-------|---------|
| **Time envelope line** | White/Cyan | Current time manipulation |
| **Volume envelope line** | White/Pink | Current volume shaping |
| **Active slot** | Green highlight | Currently selected |
| **MIDI triggered** | Yellow flash | Recently triggered |
| **Buffer warning** | Red | Approaching buffer limit |
| **Grid lines** | Gray | Beat/bar divisions |

## Grid Division Markers

```
    |
    |     |     |     |     |     |     |
    |     |     |     |     |     |     |
    +-----+-----+-----+-----+-----+-----+
    |     |     |     |     |     |     |
    
    Bar   Beat  Beat  Beat  Beat  Bar
    1     1     2     3     4     2
    
    Major lines = Bar divisions
    Minor lines = Beat divisions
    Fine lines = 1/4 beat divisions
```

## Slot Layout Visual

### Full 36-Slot Grid
```
        Time Slots                    Volume Slots
        ┌──┬──┬──┬──┬──┬──┐          ┌──┬──┬──┬──┬──┬──┐
Row 1   │01│02│03│04│05│06│          │01│02│03│04│05│06│
        ├──┼──┼──┼──┼──┼──┤          ├──┼──┼──┼──┼──┼──┤
Row 2   │07│08│09│10│11│12│          │07│08│09│10│11│12│
        ├──┼──┼──┼──┼──┼──┤          ├──┼──┼──┼──┼──┼──┤
Row 3   │13│14│15│16│17│18│          │13│14│15│16│17│18│
        ├──┼──┼──┼──┼──┼──┤          ├──┼──┼──┼──┼──┼──┤
Row 4   │19│20│21│22│23│24│          │19│20│21│22│23│24│
        ├──┼──┼──┼──┼──┼──┤          ├──┼──┼──┼──┼──┼──┤
Row 5   │25│26│27│28│29│30│          │25│26│27│28│29│30│
        ├──┼──┼──┼──┼──┼──┤          ├──┼──┼──┼──┼──┼──┤
Row 6   │31│32│33│34│35│36│          │31│32│33│34│35│36│
        └──┴──┴──┴──┴──┴──┘          └──┴──┴──┴──┴──┴──┘
        
MIDI:   C1 to B3 (36 notes)          C4 to B6 (36 notes)
```

## MIDI Keyboard Overlay

```
┌────────────────────────────────────────────────────┐
│                    MIDI KEYBOARD                    │
├────────────────────────────────────────────────────┤
│  C1  C#1 D1  D#1 E1  F1  F#1 G1  G#1 A1  A#1 B1   │
│  [1] [2] [3] [4] [5] [6] [7] [8] [9] [10][11][12]  │
│  Time Slot 1-12                                    │
├────────────────────────────────────────────────────┤
│  C2  C#2 D2  D#2 E2  F2  F#2 G2  G#2 A2  A#2 B2   │
│  [13][14][15][16][17][18][19][20][21][22][23][24]  │
│  Time Slot 13-24                                   │
├────────────────────────────────────────────────────┤
│  C3  C#3 D3  D#3 E3  F3  F#3 G3  G#3 A3  A#3 B3   │
│  [25][26][27][28][29][30][31][32][33][34][35][36]  │
│  Time Slot 25-36                                   │
├────────────────────────────────────────────────────┤
│  C4  C#4 D4  D#4 E4  F4  F#4 G4  G#4 A4  A#4 B4   │
│  [1] [2] [3] [4] [5] [6] [7] [8] [9] [10][11][12]  │
│  Volume Slot 1-12                                  │
├────────────────────────────────────────────────────┤
│  C5  C#5 D5  D#5 E5  F5  F#5 G5  G#5 A5  A#5 B5   │
│  [13][14][15][16][17][18][19][20][21][22][23][24]  │
│  Volume Slot 13-24                                 │
├────────────────────────────────────────────────────┤
│  C6  C#6 D6  D#6 E6  F6  F#6 G6  G#6 A6  A#6 B6   │
│  [25][26][27][28][29][30][31][32][33][34][35][36]  │
│  Volume Slot 25-36                                 │
└────────────────────────────────────────────────────┘
```

## Signal Flow Diagram

```
INPUT SIGNAL
     │
     ▼
┌─────────────────────────────────┐
│      2-BAR ROLLING BUFFER       │
│  ┌──────────────────────────┐    │
│  │ ◄── Audio stored here  │    │
│  │    (constantly updated) │    │
│  └──────────────────────────┘    │
└─────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────┐
│      TIME ENVELOPE (Pos)        │
│  - Determines playback speed  │
│  - Diagonal = normal          │
│  - Horizontal = freeze         │
│  - Slope = speed change        │
└─────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────┐
│      VOLUME ENVELOPE (Amp)      │
│  - Determines loudness         │
│  - Full = no change            │
│  - Gated = rhythmic cuts       │
│  - Curved = fades              │
└─────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────┐
│      MIX (Dry/Wet)              │
│  0% = original only            │
│  50% = equal blend             │
│  100% = effected only          │
└─────────────────────────────────┘
     │
     ▼
OUTPUT SIGNAL
```

## Quick Visual Diagnosis

| What You See | What It Means | Fix If Wrong |
|--------------|---------------|--------------|
| Diagonal line | Normal playback | Switch to different slot for effect |
| Horizontal line | Frozen/stutter | Ensure that's intended |
| Jagged pattern | Glitch effect | Add smoothing if too harsh |
| Curved line | Gradual change | Normal for tape effects |
| Red warning | Buffer overflow | Adjust Pos control |
| Yellow flash | MIDI triggered | Normal during performance |

## Screen Real Estate Tips

### Minimum Recommended Size
- **Width:** 800px minimum for full grid visibility
- **Height:** 400px minimum for envelope detail

### High DPI Displays
- Enable "Auto-Scale" in FL Studio for crisp rendering
- Envelope lines remain clear at all zoom levels

### Multi-Monitor Setups
- Gross Beat can be dragged to any monitor
- MIDI triggering works regardless of window position

## Source
Visual references verified from:
- [SRC: IL-MAN] Image-Line Gross Beat interface documentation
- [SRC: IL-MAN] FL Studio 21+ UI guidelines
