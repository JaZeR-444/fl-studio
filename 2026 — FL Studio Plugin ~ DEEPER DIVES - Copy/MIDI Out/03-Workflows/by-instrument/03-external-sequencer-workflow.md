# External Sequencer Workflow

## Goal
Configure MIDI Out for syncing with vintage hardware sequencers.

## Plugin Settings

### Sync Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel | 1-16 | Programmable |
| Port | Hardware Port | Physical output |
| Clock Source | External | Slave to hardware |
| Clock Out | True | Pass sync |

### Transport Control
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Transport | True | Start/Stop/Cont |
| Song Position | True | Location pointer |
| Song Select | False | Not commonly used |
| MIDI Thru | True | Pass-through |

### Timing
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Note Length | Default | As programmed |
| Latency | Compensated | Round-trip |
| Swing | As needed | Groove setting |
| Quantize | As needed | Timing resolution |

## Workflow Steps

### Stage 1: Clock Setup
1. Set MIDI Out clock to External
2. Set hardware sequencer to MIDI sync
3. Enable song position
4. Verify tempo transmission

### Stage 2: Transport Setup
1. Enable transport MIDI
2. Configure hardware receive
3. Test start/stop
4. Verify continue

### Stage 3: Song Position
1. Enable song position
2. Set hardware to receive SP
3. Test jump locations
4. Verify bar accuracy

### Stage 4: Thru Routing
1. Enable MIDI thru
2. Route incoming to output
3. Test pass-through
4. Use for loop sync

## Common Hardware

### Roland MC-303/808
| Setting | Value |
|---------|-------|
| Channel | 1 |
| Clock | External |
| Transport | True |
| Song Position | True |

### Akai MPC Series
| Setting | Value |
|---------|-------|
| Channel | 1 |
| Clock | MIDI |
| Transport | True |
| Song Position | True |

### Elektron Devices
| Setting | Value |
|---------|-------|
| Channel | 1 |
| Clock | External |
| Transport | True |
| Song Position | True |

## A/B Testing Method

### Sync Test
1. Start both devices
2. Verify tight sync
3. Stop, restart
4. Check re-sync speed

### Position Test
1. Set song position
2. Verify hardware jumps
3. Test multiple locations
4. Verify bar accuracy

## Quick Fixes

| Issue | Solution |
|-------|----------|
| Sync drift | Enable clock out on MIDI Out |
| Wrong start | Verify transport CCs |
| Position error | Enable song position |
| No data | Check cable, port settings |

## FL Studio Tips

### Latency Compensation
1. Measure round-trip latency
2. Set in MIDI settings
3. Verify with audio recording
4. Adjust as needed

### Multiple Devices
1. Cascade sync clock
2. Master clock to first device
3. Thru to second, etc.
4. Document chain order

### Performance Setup
1. Pre-program sequences
2. Use transport for switching
3. Mute tracks via MIDI CC
4. Program changes for sounds
