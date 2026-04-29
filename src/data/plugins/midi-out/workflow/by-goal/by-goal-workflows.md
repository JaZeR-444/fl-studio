# MIDI Out By-Goal Workflows

## Goal: Hardware Control

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel | 1-16 | Match device |
| Port | Hardware port | Physical output |
| Clock Source | Internal | Host sync |
| Clock Out | True/False | Sync to device |
| Note Length | Default | Standard timing |
| Velocity | 100 | Default strength |

### Steps
1. Identify correct MIDI port
2. Match channel to device
3. Set clock source
4. Configure note length
5. Test communication
6. Verify response

### Tips
- Document channel assignments
- Test all notes before session
- Use MIDI monitor for debugging
- Label cables and ports

---

## Goal: External Sync

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel | 1 | Primary channel |
| Port | Hardware port | Physical output |
| Clock Source | External | Slave mode |
| Clock Out | True | Pass clock |
| Transport | True | Control playback |
| Song Position | True | Location sync |

### Steps
1. Set MIDI Out clock to External
2. Configure device to receive sync
3. Enable transport control
4. Test start/stop sync
5. Verify location sync
6. Monitor for drift

### Tips
- External sync requires setup
- Monitor for timing drift
- Restart sync if issues
- Document sync chain

---

## Goal: Drum Programming

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel | 10 | GM drum channel |
| Port | Hardware port | Drum machine output |
| Clock Out | True | Sync slave devices |
| Note Length | Short | Tight hits |
| Velocity | 110 | Punchy response |
| Program Change | True | Kit switching |

### Steps
1. Set channel to 10 (GM drums)
2. Connect to drum machine
3. Enable clock output
4. Program notes
5. Use program change for kits
6. Test trigger response

### Tips
- Channel 10 is standard drums
- Map notes to sounds
- Velocity affects intensity
- Program change for kits

---

## Goal: Expressive Performance

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel | 1-4 | Synth channels |
| Aftertouch | True | Channel pressure |
| Mod Wheel | True | CC 1 |
| Sustain | True | CC 64 |
| Expression | True | CC 11 |

### Steps
1. Enable expression controls
2. Configure synth to receive
3. Map CC messages
4. Test modulation
5. Record performance
6. Edit automation

### Tips
- Synth must support CC
- Document CC mappings
- Record live for feel
- Edit for precision

---

## Goal: Multiple Devices

### Configuration
| Device | Channel | Port |
|---------|---------|------|
| Synth 1 | 1 | Port 1 |
| Synth 2 | 2 | Port 1 |
| Drum Machine | 10 | Port 2 |
| Sequencer | 1 | Port 3 |

### Steps
1. Assign unique channels
2. Route to correct ports
3. Document assignments
4. Test each device
5. Monitor performance
6. Troubleshoot conflicts

### Tips
- Maximum 16 channels per port
- Document everything
- Test before recording
- Use labeled cables

---

## Goal: Sampling Workflow

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel | 1-16 | Flexible |
| Port | Hardware port | Sampler output |
| Clock Source | External or Internal | Per setup |
| Note Length | Pattern | Sample length |
| Transport | True | Transport control |
| Thru | True | Pass-through |

### Steps
1. Configure MIDI output
2. Set up sample triggering
3. Program patterns
4. Use transport control
5. Record samples
6. Edit and process

### Tips
- Precise timing important
- Use quantize for accuracy
- Record multiple takes
- Edit for perfection
