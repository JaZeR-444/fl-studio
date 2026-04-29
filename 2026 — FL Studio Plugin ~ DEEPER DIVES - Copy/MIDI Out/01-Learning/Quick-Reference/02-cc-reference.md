# MIDI Out CC Message Reference

## Complete CC List

### Channel Volume/Expression
| CC | Name | Range | Purpose |
|----|------|-------|---------|
| 7 | Volume | 0-127 | Master volume |
| 11 | Expression | 0-127 | Dynamic level |
| 10 | Pan | 0-127 L-63-C | Stereo position |

### General Purpose
| CC | Name | Range | Purpose |
|----|------|-------|---------|
| 1 | Modulation | 0-127 | Vibrato, filter |
| 64 | Sustain | 0/127 | Hold pedal |
| 65 | Portamento | 0/127 | Glide on/off |
| 66 | Sostenuto | 0/127 | Selective sustain |
| 67 | Soft Pedal | 0/127 | Soft pedal |
| 91 | Reverb | 0-127 | Reverb amount |
| 93 | Chorus | 0-127 | Chorus amount |
| 74 | Cutoff | 0-127 | Filter frequency |
| 71 | Resonance | 0-127 | Filter resonance |

### Bank Selection
| CC | Name | Purpose |
|----|------|---------|
| 0 | Bank Select MSB | Bank switching |
| 32 | Bank Select LSB | Extended banks |

### Control
| CC | Name | Purpose |
|----|------|---------|
| 120 | All Sound Off | Silence all |
| 121 | Reset All Controllers | Clear settings |
| 123 | All Notes Off | Stop stuck notes |
| 122 | Local Control | Keyboard on/off |

---

## Common CC Mappings

### Synthesizer
| CC | Parameter | Typical |
|----|-----------|---------|
| 1 | Mod Wheel | Filter cutoff |
| 7 | Volume | Level |
| 11 | Expression | Dynamics |
| 74 | Cutoff | Filter frequency |
| 71 | Resonance | Filter resonance |
| 91 | Reverb | Send amount |
| 93 | Chorus | Send amount |

### Drum Machine
| CC | Parameter | Typical |
|----|-----------|---------|
| 7 | Volume | Master level |
| 10 | Pan | |
| 91 Output pan | Reverb | Send amount |

### Effects Unit
| CC | Parameter | Typical |
|----|-----------|---------|
| 7 | Volume | Output level |
| 74 | Cutoff | Filter |
| 71 | Resonance | Emphasis |

---

## NRPN (Non-Registered Parameter Numbers)

### What Are NRPN?
- Extended parameter control
- Device-specific parameters
- Require MSB/LSB setup

### NRPN Setup
| CC | Purpose |
|----|---------|
| 99 | NRPN MSB |
| 98 | NRPN LSB |
| 6 | Data Entry MSB |
| 38 | Data Entry LSB |

### Example: NRPN Message
```
CC 99 = 1 (Parameter MSB)
CC 98 = 0 (Parameter LSB)  
CC 6 = 64 (Value MSB)
[CC 38 = 0] (Value LSB, optional)
```

---

## Troubleshooting CC

### Device Not Responding
- Verify CC number matches device
- Check device documentation
- Try different CC values
- Confirm CC is enabled

### Stuck Values
- Send CC 121 (Reset All)
- Send CC 123 (All Notes Off)
- Check for stuck notes
- Restart device if needed

### Unexpected Behavior
- CC might be mapped differently
- Check device CC chart
- Try minimal CC set
- Consult manual

---

## Quick Reference Card

| Need | CC | Value |
|------|-----|-------|
| Volume up | 7 | 127 |
| Volume down | 7 | 0 |
| Pan center | 10 | 64 |
| Sustain on | 64 | 127 |
| Sustain off | 64 | 0 |
| Reset all | 121 | Any |
| All notes off | 123 | Any |

---

## Related Documentation

- [MIDI Fundamentals](../Concepts/01-midi-fundamentals.md)
- [MIDI Out Parameter Quick Reference](../Quick-Reference/parameter-quick-reference.md)
