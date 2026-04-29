# Modulation Control Workflow

## Goal
Configure MIDI Out for expressive modulation control of hardware.

## Plugin Settings

### CC Message Setup
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Mod Wheel | CC 1 | Vibrato/modulation |
| Volume | CC 7 | Volume control |
| Pan | CC 10 | Stereo position |
| Expression | CC 11 | Dynamic level |

### Advanced Modulation
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Breath | CC 2 | Wind controller |
| Foot | CC 4 | Pedal control |
| Resonance | CC 71 | Filter resonance |
| Cutoff | CC 74 | Filter cutoff |

### NRPN Setup
| Parameter | Value | Purpose |
|-----------|-------|---------|
| NRPN | True | Parameter-specific |
| MSB | CC 99 | NRPN MSB |
| LSB | CC 98 | NRPN LSB |
| Data Entry | CC 6 | Value change |

## Workflow Steps

### Stage 1: CC Mapping
1. Identify synth CC assignments
2. Enable CC in MIDI Out
3. Map automation to CC
4. Test single CC

### Stage 2: Automation
1. Draw automation in playlist
2. Link to MIDI Out CC
3. Test smooth transitions
4. Verify hardware response

### Stage 3: NRPN Routing
1. Enable NRPN
2. Set MSB/LSB for parameter
3. Test data entry
4. Automate NRPN values

### Stage 4: Expression Setup
1. Set up expression pedal
2. Map to CC 4 or 11
3. Test sweep range
4. Configure min/max values

## Common CC Mappings

### Filter Sweep
| CC | Value | Purpose |
|----|-------|---------|
| CC 74 | Filter Cutoff | Timbre sweep |
| CC 71 | Resonance | Emphasis control |
| CC 91 | Reverb | Send amount |
| CC 93 | Chorus | Effect depth |

### Volume Dynamics
| CC | Value | Purpose |
|----|-------|---------|
| CC 7 | Volume | Master volume |
| CC 11 | Expression | Dynamic range |
| CC 64 | Sustain | Pedal hold |
| CC 65 | Portamento | Glide control |

## Genre Applications

### EDM Filter Sweeps
| CC | Purpose |
|----|---------|
| CC 74 | Main filter cutoff |
| CC 91 | Reverb mix |
| CC 1 | Mod wheel LFO |
| CC 77 | Filter resonance |

### R&B Expression
| CC | Purpose |
|----|---------|
| CC 11 | Expression pedal |
| CC 7 | Volume swells |
| CC 1 | Vibrato depth |
| CC 71 | String resonance |

### Trap 808 Slide
| CC | Purpose |
|----|---------|
| CC 65 | Portamento on/off |
| CC 5 | Portamento time |
| CC 1 | Pitch bend range |
| CC 64 | Sustain hold |

## A/B Testing Method

### Modulation Test
1. Automate single CC
2. Verify smooth response
3. Check range limits
4. Test hardware interpretation

### NRPN Test
1. Set specific NRPN
2. Change value
3. Verify parameter change
4. Test automation recording

## Quick Fixes

| Issue | Solution |
|-------|----------|
| No modulation | Verify CC enabled |
| Wrong parameter | Check synth CC chart |
| Choppy automation | Increase automation rate |
| Stuck value | Check CC reset |

## FL Studio Tips

### Automation Drawing
1. Use smooth line tool
2. Right-click for automation
3. Link to MIDI Out CC
4. Test before recording

### Multiple Parameters
1. Use different CCs per parameter
2. Document CC assignments
3. Create CC templates
4. Use MIDI OX for mapping

### Performance Automation
1. Record live modulation
2. Use MIDI controller
3. Capture expression moves
4. Edit for precision
