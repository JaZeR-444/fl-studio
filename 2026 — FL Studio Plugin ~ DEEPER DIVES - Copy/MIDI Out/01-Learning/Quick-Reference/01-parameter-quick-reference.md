# MIDI Out Quick Reference

## Parameters at a Glance

| Parameter | Options | Default | Purpose |
|-----------|---------|---------|---------|
| Channel | 1-16 | 1 | Device channel |
| Port | Auto/Port 1-16 | Auto | Physical output |
| Clock Source | Internal/External | Internal | Sync source |
| Clock Out | On/Off | Off | Send clock |
| Note Length | Default/Short/Long/Pattern | Default | Duration |
| Velocity | 1-127 | 100 | Strength |
| Transpose | -24 to +24 semitones | 0 | Pitch shift |

---

## Channel Reference

| Channel | Common Use |
|---------|------------|
| 1-9 | Melodic instruments |
| 10 | GM Drums (standard) |
| 11-16 | Additional devices |

---

## Note Numbers

### GM Drum Map (Channel 10)
| Note | Drum Sound |
|------|------------|
| 35 | Kick 2 |
| 36 | Kick 1 |
| 38 | Snare 1 |
| 40 | Snare 2 |
| 42 | Hi-Hat Closed |
| 44 | Hi-Hat Pedal |
| 46 | Hi-Hat Open |
| 49 | Crash 1 |
| 51 | Ride 1 |

---

## Common CC Messages

| CC | Name | Range | Purpose |
|----|------|-------|---------|
| 0 | Bank Select MSB | 0-127 | Bank switching |
| 1 | Mod Wheel | 0-127 | Modulation |
| 7 | Volume | 0-127 | Level |
| 10 | Pan | 0-127 L-63-C-63 R | Position |
| 11 | Expression | 0-127 | Dynamics |
| 64 | Sustain | 0=Off, 127=On | Hold |
| 65 | Portamento | 0=Off, 127=On | Glide |
| 71 | Resonance | 0-127 | Filter resonance |
| 74 | Cutoff | 0-127 | Filter frequency |
| 91 | Reverb | 0-127 | Send amount |
| 93 | Chorus | 0-127 | Send amount |
| 121 | Reset All | Any | Emergency reset |
| 123 | All Notes Off | Any | Stop notes |

---

## Emergency Messages

| Message | CC | Purpose |
|---------|-----|---------|
| Reset All Controllers | CC 121 | Clear all settings |
| All Notes Off | CC 123 | Stop stuck notes |
| Local Control Off | CC 122 | Disconnect keyboard |
| Local Control On | CC 122 | Connect keyboard |

---

## Sync Settings

| Mode | Clock Source | Clock Out | Use Case |
|------|--------------|-----------|----------|
| Standalone | Internal | Off | Single device |
| Master | Internal | On | Control slaves |
| Slave | External | Off | Sync to device |

---

## Troubleshooting Quick Fixes

| Issue | Quick Fix |
|-------|-----------|
| No response | Check channel match |
| Wrong notes | Check transpose setting |
| Stuck notes | Send CC 123 |
| Timing drift | Enable clock out |
| Duplicate notes | Disable thru |
| No sync | Check clock source |

---

## Related Documentation

- [MIDI Fundamentals](../02-Learning/Concepts/01-midi-fundamentals.md)
- [MIDI Out Workflows](../03-Workflows/INDEX.md)
- [MIDI Out Presets](../02-Data/presets/INDEX.md)
