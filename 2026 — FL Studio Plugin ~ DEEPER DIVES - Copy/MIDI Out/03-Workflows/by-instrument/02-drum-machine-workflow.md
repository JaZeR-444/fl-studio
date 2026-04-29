# Drum Machine Workflow

## Goal
Configure MIDI Out for triggering drum machines and samplers.

## Plugin Settings

### Standard Drum Settings
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel | 10 | GM drum channel |
| Port | Hardware Port | Physical output |
| Clock Source | Internal | Tempo sync |
| Clock Out | True | Sync slave devices |

### Drum-Specific
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Note Length | Short | Tight hits |
| Velocity | 110 | Punchy response |
| Pitch Bend Range | 0 | No pitch change |
| Aftertouch | False | Not used for drums |

### Drum Machine Features
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Program Change | True | Kit switching |
| Bank Select | True | Bank selection |
| MIDI Thru | True | Pass-through |
| Note Off | True | Clean releases |

## Workflow Steps

### Stage 1: Channel Setup
1. Set MIDI channel to 10
2. Verify drum machine receives
3. Match drum machine channel
4. Test kick trigger

### Stage 2: Note Mapping
1. GM drum map standard
2. Verify kick on note 36
3. Verify snare on note 38
4. Map custom sounds as needed

### Stage 3: Velocity Tuning
1. Default velocity 110
2. Adjust per sound:
   - Kick: 115-120
   - Snare: 100-110
   - Hi-hats: 90-100
3. Program velocity variations

### Stage 4: Clock Sync
1. Enable clock out
2. Set drum machine to MIDI sync
3. Verify tempo matches
4. Test start/stop sync

## Genre Applications

### Trap Drums
| Setting | Value |
|---------|-------|
| Channel | 10 |
| Velocity | 115 |
| Note Length | Short |
| Clock Out | True |
| 808 tuning | Via program change |

### Boom Bap Drums
| Setting | Value |
|---------|-------|
| Channel | 10 |
| Velocity | 100 |
| Note Length | Medium |
| Swing | 55% |
| Clock Out | True |

### EDM Drums
| Setting | Value |
|---------|-------|
| Channel | 10 |
| Velocity | 110 |
| Note Length | Short |
| Clock Out | True |
| Quantize | 100% |

## A/B Testing Method

### Drum Trigger Test
1. Play kick pattern
2. Listen for consistent hits
3. Check ghost notes
4. Test rimshots

### Sync Test
1. Start FL Studio playback
2. Verify drum machine starts
3. Stop, verify sync stop
4. Check tempo accuracy

## Quick Fixes

| Issue | Solution |
|-------|----------|
| Wrong sounds | Check note-to-sound mapping |
| Late hits | Reduce output delay |
| No sync | Enable clock out on MIDI Out |
| Stuck notes | Enable note off |
| Velocity too hard | Reduce to 100 |

## FL Studio Tips

### Pattern-Based Workflow
1. Program drums in piano roll
2. Send via MIDI Out to drum machine
3. Record audio back to FL
4. Mix with other elements

### Multi-Drum Setup
1. Channel 10 for main drums
2. Channel 11-16 for extras
3. Program variations
4. Layer for depth

### Velocity Programming
1. Ghost notes: velocity 50-60
2. Main hits: velocity 100-120
3. Accents: velocity 120-127
4. Humanize for feel
