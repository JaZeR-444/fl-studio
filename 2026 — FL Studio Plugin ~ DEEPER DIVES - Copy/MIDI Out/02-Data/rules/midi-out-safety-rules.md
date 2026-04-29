# MIDI Out Safety Rules

## Connection Safety

### Port Selection
- ALWAYS verify port before sending MIDI
- Check device is powered on before connection
- Use proper MIDI cables (not audio)

### Channel Management
- Maximum 16 MIDI channels per port
- Assign unique channels per device
- Document all channel assignments

### Loop Prevention
- NEVER create MIDI feedback loops
- Disable MIDI thru if not needed
- Avoid MIDI-OX passthrough loops

## Data Transmission

### Note Safety
- Maximum 127 velocity value
- Valid notes: 0-127 (C-2 to G8)
- Never send velocity 0 as note on

### CC Message Limits
| CC Number | Function | Safety Note |
|-----------|----------|-------------|
| CC 0 | Bank Select | Use with MSB |
| CC 32 | Bank Select LSB | Use with CC 0 |
| CC 64 | Sustain Pedal | Can cause stuck notes |
| CC 121 | Reset All Controllers | Emergency reset |
| CC 123 | All Notes Off | Emergency cut |

### SysEx Safety
- Use manufacturer-specific SysEx only
- Verify device supports SysEx
- Back up before SysEx changes

## Timing Safety

### Latency Considerations
- MIDI has inherent latency (~1-5ms per device)
- Compensate for round-trip delay
- Monitor total system latency

### Clock Sync
| Mode | Use Case | Safety |
|------|----------|--------|
| Internal | Standalone | Always safe |
| External | DAW sync | Verify before playing |
| MIDI Clock | Vintage gear | Check tempo match |
| PPQ | High resolution | 96 PPQ minimum |

### Timing Drift
- Check sync every session
- Restart DAW if drift occurs
- Use dedicated MIDI interface

## Performance Safety

### CPU Usage
- MIDI Out uses minimal CPU
- Enable only needed outputs
- Disable unused ports

### Note Density
- Maximum 1000 notes per second
- Use throttling for complex patterns
- Quantize complex MIDI data

### Automation Safety
- CC automation can be resource-intensive
- Limit automation rate for smooth values
- Use last 8 bars for parameter locks

## Hardware Safety

### Device Communication
- NEVER force send during device boot
- Wait for device ready state
- Check device manual for MIDI specs

### Power Safety
- Disconnect MIDI before power cycling
- Hot-swap only if device supports
- Verify cable connections

### Device Protection
| Issue | Prevention |
|-------|------------|
| Stuck notes | Send All Notes Off (CC 123) |
| Wrong program | Verify bank select CCs |
| Data corruption | Use short SysEx messages |
| Locked device | Send Reset All (CC 121) |

## Common Mistakes to Avoid

| Mistake | Consequence | Prevention |
|---------|-------------|------------|
| Wrong channel | No response or wrong device | Double-check channel |
| No clock sync | Timing drift | Enable clock output |
| Feedback loop | Infinite notes | Disable thru when not needed |
| Velocity 127 constant | Unnatural dynamics | Use velocity curves |
| No note off | Stuck notes | Always send note off |

## Troubleshooting

### No Response
1. Check MIDI cable connection
2. Verify channel match
3. Check device power/on
4. Test with MIDI monitor

### Wrong Notes
1. Verify transpose settings
2. Check MIDI-OX mapping
3. Test with single note
4. Verify device note mapping

### Timing Issues
1. Enable clock output
2. Check buffer size
3. Restart DAW sync
4. Reduce MIDI complexity

### Stuck Notes
1. Send All Notes Off (CC 123)
2. Send Reset All Controllers (CC 121)
3. Force stop all playback
4. Check for stuck note-on messages

### Duplicate Messages
1. Disable MIDI thru
2. Check for duplicate routing
3. Remove extra MIDI Out plugins
4. Verify DAW MIDI settings

## FL Studio Integration

### MIDI Settings
1. Options > MIDI Settings
2. Enable output port
3. Set latency compensation
4. Test before session

### Multi-Port Setup
1. Document port assignments
2. Use unique channels per port
3. Label tracks with device name
4. Create template with setup

### Latency Compensation
1. Measure round-trip latency
2. Set in Preferences
3. Verify with audio recording
4. Adjust for hardware response

## Reference Charts

### GM Drum Channel
| Note | Drum Sound |
|------|------------|
| 35 | Kick 2 |
| 36 | Kick 1 |
| 38 | Snare 1 |
| 40 | Snare 2 |
| 42 | Hi-Hat Closed |
| 46 | Hi-Hat Open |
| 49 | Crash 1 |
| 51 | Ride 1 |

### Common CC Messages
| CC | Name | Typical Use |
|----|------|-------------|
| 1 | Mod Wheel | Vibrato/modulation |
| 7 | Volume | Level control |
| 10 | Pan | Stereo position |
| 11 | Expression | Dynamic level |
| 64 | Sustain | Pedal hold |
| 91 | Reverb | Send amount |
| 93 | Chorus | Effect depth |

### Emergency Reset Sequence
1. CC 121 - Reset All Controllers
2. CC 123 - All Notes Off
3. CC 120 - Local Control Off
4. CC 120 - Local Control On
