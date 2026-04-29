# Hardware Synth Workflow

## Goal
Configure MIDI Out for controlling external hardware synthesizers.

## Plugin Settings

### Basic Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel | 1-4 | Synth channel assignment |
| Port | Hardware Port | Physical MIDI output |
| Clock Source | Internal | Host tempo sync |
| Clock Out | True | Sync external gear |

### Note Settings
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Note Length | Default | Standard note duration |
| Velocity | 100 | Default hit strength |
| Pitch Bend Range | 12 | Two octave pitch bend |
| Transpose | 0 | Standard tuning |

### Expression
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Aftertouch | True | Channel pressure |
| Mod Wheel | True | CC 1 for modulation |
| Sustain | True | CC 64 pedal |
| Volume | True | CC 7 volume |

## Workflow Steps

### Stage 1: Port Setup
1. Identify correct MIDI port
2. Check cable connection
3. Verify synth receives MIDI
4. Set synth to same channel

### Stage 2: Channel Assignment
1. Assign unique channel per synth
2. Avoid channel 10 (drums)
3. Document assignments
4. Label in FL Studio

### Stage 3: Timing Configuration
1. Internal clock for standalone
2. External if synced to DAW
3. Enable clock out for multi-gear
4. Set tempo in FL Studio

### Stage 4: Expression Setup
1. Enable aftertouch on synth
2. Map mod wheel in synth
3. Connect sustain pedal
4. Test CC messages

## Genre Applications

### EDM Synth Lead
| Setting | Value |
|---------|-------|
| Channel | 1 |
| Velocity | 100 |
| Pitch Bend | 12 |
| Aftertouch | True |
| Mod Wheel | True |

### R&B Keys
| Setting | Value |
|---------|-------|
| Channel | 2 |
| Velocity | 90 |
| Pitch Bend | 2 |
| Aftertouch | True |
| Sustain | True |

### Trap 808
| Setting | Value |
|---------|-------|
| Channel | 3 |
| Velocity | 115 |
| Pitch Bend | 0 |
| Note Length | Long |
| Portamento | True |

## A/B Testing Method

### Test Points
1. Verify note reception
2. Check velocity sensitivity
3. Test modulation response
4. Verify sync timing

### Quick Tests
1. Play single note, listen for response
2. Bend pitch, verify range
3. Press sustain, test release
4. Tap tempo, check sync

## Quick Fixes

| Issue | Solution |
|-------|----------|
| No sound | Check channel match |
| Wrong notes | Verify transpose |
| Late notes | Reduce MIDI output delay |
| Stuck notes | Enable note off |
| No sync | Enable clock out |

## FL Studio Tips

### MIDI Device Setup
1. Options > MIDI Settings
2. Enable output port
3. Set latency compensation
4. Test before session

### Multi-Synth Setup
1. Channel 1-4 for 4 synths
2. MIDI channel filtering
3. Separate tracks per channel
4. Record automation separately
