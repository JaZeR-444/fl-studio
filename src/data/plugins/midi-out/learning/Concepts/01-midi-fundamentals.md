# MIDI Out Concepts

## MIDI Fundamentals

MIDI (Musical Instrument Digital Interface) transmits musical data, not audio. Understanding MIDI helps with hardware control.

---

## MIDI Data Types

### Note Messages
- **Note On** - Note begins (includes velocity)
- **Note Off** - Note ends (sometimes note on with velocity 0)
- Range: 128 notes (0-127, C-2 to G8)

### Control Change (CC)
- Continuous controller messages
- 128 controllers (CC 0-127)
- Common: Volume (CC 7), Pan (CC 10), Mod (CC 1)

### Program Change
- Patch/preset selection
- 128 programs (0-127)
- Often used with Bank Select (CC 0/32)

### Aftertouch
- Pressure after note begins
- **Channel** - Pressure on entire keyboard
- **Poly** - Pressure per individual note

---

## MIDI Channels

### 16 Channels per Port
- Each port supports 16 channels
- Channel 10 reserved for drums (GM standard)
- Devices respond to assigned channel

### Channel Assignment
- Match DAW channel to device channel
- Omni mode = receives on all channels
- Multiple devices need different channels

---

## MIDI Timing

### Clock Sources
| Source | Use Case | Description |
|--------|----------|-------------|
| Internal | Standalone | DAW tempo controls all |
| External | Sync to hardware | Device tempo controls DAW |

### Sync Types
- **MIDI Clock** - Basic tempo sync
- **Song Position** - Location pointer
- **MTC (MIDI Time Code)** - Frame-based sync

### Latency Considerations
- MIDI has inherent latency (~1-5ms per device)
- Round-trip delay = device latency + return latency
- DAW should compensate for round-trip

---

## Common CC Messages

| CC | Name | Typical Use |
|----|------|-------------|
| 0 | Bank Select MSB | Bank switching |
| 1 | Modulation | Vibrato, filter sweep |
| 7 | Volume | Level control |
| 10 | Pan | Stereo position |
| 11 | Expression | Dynamic level |
| 64 | Sustain Pedal | Hold notes |
| 91 | Reverb | Reverb amount |
| 93 | Chorus | Chorus amount |
| 121 | Reset All | Emergency reset |
| 123 | All Notes Off | Stop stuck notes |

---

## Troubleshooting

### No Response
- Check cable connection
- Verify channel match
- Confirm device power/on
- Test with MIDI monitor

### Wrong Notes
- Check transpose settings
- Verify MIDI-OX mapping
- Test single note
- Check device note mapping

### Stuck Notes
- Send All Notes Off (CC 123)
- Send Reset All (CC 121)
- Stop all playback
- Force note-off messages

### Timing Issues
- Enable clock output
- Check buffer size
- Restart DAW sync
- Reduce MIDI complexity

---

## Related Documentation

- [MIDI Out By-Instrument Workflows](../03-Workflows/by-instrument/INDEX.md)
- [MIDI Out By-Goal Workflows](../03-Workflows/by-goal/INDEX.md)
- [MIDI Out Presets](../02-Data/presets/INDEX.md)
- [MIDI Out Safety Rules](../02-Data/rules/midi-out-safety-rules.md)
