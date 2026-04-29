# MIDI Out Multiple Devices Setup

## Overview

Controlling multiple MIDI devices requires careful channel and port management to avoid conflicts and ensure reliable communication.

---

## Channel Planning

### Standard Assignment
| Channel | Device Type | Example |
|---------|-------------|---------|
| 1-4 | Synths | Lead, pad, bass |
| 5-8 | Additional synths | Layers |
| 10 | Drum machine | GM drums |
| 11-16 | Other gear | Sequencers, samplers |

### Per-Port Allocation
| Port | Channels | Capacity |
|------|----------|----------|
| Port 1 | 1-16 | Full device |
| Port 2 | 1-16 | Secondary device |
| Port 3 | 1-16 | Tertiary device |

---

## Setup Process

### Step 1: Inventory
1. List all MIDI devices
2. Note channel capabilities
3. Check port availability
4. Plan assignments

### Step 2: Assignment
| Device | Port | Channel | Notes |
|--------|------|---------|-------|
| Main Synth | Port 1 | 1 | Lead sounds |
| Bass Synth | Port 1 | 2 | Bass sounds |
| Drum Machine | Port 1 | 10 | GM drums |
| Pad Synth | Port 2 | 1 | Pad sounds |
| Sampler | Port 3 | 1 | Samples |

### Step 3: Configuration
1. Set device channels in hardware
2. Configure FL Studio MIDI settings
3. Enable correct output ports
4. Test each device

---

## Common Setups

### Two Synths + Drum Machine
```
Port 1:
  Channel 1: Lead Synth
  Channel 2: Pad Synth  
  Channel 10: Drum Machine
```

### Synth + Drum Machine + Sampler
```
Port 1:
  Channel 1: Synth
  Channel 10: Drums
Port 2:
  Channel 1: Sampler
```

### Full Studio Setup
```
Port 1: Main Keyboard Synth (Channels 1-4)
Port 2: Drum Machine (Channel 10)
Port 3: Hardware Sequencer (Channel 1)
Port 4: Backup/Sampler (Channel 1)
```

---

## Troubleshooting

### No Response from Device
- Check port assignment
- Verify channel match
- Confirm power/on status
- Test cable

### Wrong Channel
- Device receiving on different channel
- Check device MIDI channel setting
- Match in FL Studio

### Conflicting Messages
- Multiple devices on same channel
- Reassign channels
- Use different ports

### Timing Issues
- MIDI thru chain causing delay
- Use direct connections
- Check clock sync

---

## Documentation Template

Record your setup:

| Device | Port | Channel | Function | Notes |
|--------|------|---------|----------|-------|
| | | | | |
| | | | | |
| | | | | |
| | | | | |

---

## Related Documentation

- [MIDI Fundamentals](../Concepts/01-midi-fundamentals.md)
- [MIDI Out Parameter Quick Reference](../Quick-Reference/parameter-quick-reference.md)
- [Hardware Control Workflow](../03-Workflows/by-goal/01-hardware-control.md)
