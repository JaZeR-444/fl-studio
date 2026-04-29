# MiniSynth Safety Rules

## Volume & Clipping

### Master Output
- ALWAYS keep master output below -3 dB
- Use limiter on master if approaching 0 dB
- Check true peak on export

### Oscillator Levels
- Sum of all oscillators should not exceed 0 dB
- Typical setting: Osc 1 at 75%, Osc 2 at 50%
- Reduce when both playing same pitch

### Envelope Amounts
- Amp envelope at 100% for normal playing
- Reduce to 80% if using multiple oscillators
- Use velocity to control max volume

## CPU & Performance

### Voice Stealing
- Maximum 8-12 voices for CPU safety
- Enable voice stealing for poly patches
- Set release time under 2 seconds for CPU

### Unison Mode
- Unison uses 2-3x CPU per note
- Disable for live performance
- Use sparingly in arrangements

### Effects Usage
- Chorus and reverb use significant CPU
- Bypass during sound design
- Use send/return for shared effects

## Sound Design Safety

### Filter Resonance
- Resonance above 80% can cause feedback
- Resonance at 100% may clip output
- Use high-pass filter when resonance is high

### Modulation Depth
- Oscillator mod depth over 50% creates harsh sounds
- LFO to filter: start at 25%
- Aftertouch: use sparingly

### Pitch Safety
- Portamento time over 500ms creates noticeable lag
- Unison pitch spread: max 1 semitone per voice
- Detune more than 50 cents creates beating

## Workflow Safety

### Saving
- Save presets before major changes
- Use unique names for custom patches
- Backup presets folder regularly

### Automation
- Limit automation parameter changes to every 4+ bars
- Smooth automation curves for filter cutoff
- Avoid rapid LFO rate automation

### Exporting
- Always export at 24-bit or 32-bit float
- Check true peak before final export
- Leave 6 dB headroom on master bus

## Common Mistakes to Avoid

| Mistake | Consequence | Prevention |
|---------|-------------|------------|
| All oscillators at 100% | Immediate clipping | Use 50-75% per osc |
| High resonance + high cutoff | Harsh, harsh sound | Use 50-70% resonance |
| Long release times | CPU buildup | Keep under 2 seconds |
| Fast LFO sync to audio rate | Unpleasant modulation | Keep LFO below 20 Hz |

## Quick Reference Limits

| Parameter | Maximum Safe | Warning Zone |
|-----------|--------------|--------------|
| Master Volume | -6 dB | -3 to 0 dB |
| Oscillator Level | 75% each | 75-100% |
| Filter Resonance | 70% | 70-100% |
| Voices | 8-12 | 12+ |
| Release Time | 2 seconds | 2-5 seconds |
| Portamento | 250 ms | 250-500 ms |
| Detune | 25 cents | 25-50 cents |
| Unison Voices | 3 | 4+ |

## Troubleshooting

### Sound Clipping
1. Check master output level
2. Reduce all oscillator levels
3. Enable master limiter
4. Lower filter resonance

### CPU Spikes
1. Reduce voice count
2. Shorten release times
3. Disable chorus/reverb
4. Freeze unused tracks

### Unpleasant Sounds
1. Reduce modulation depth
2. Lower filter resonance
3. Increase filter cutoff
4. Use high-pass filter

## FL Studio Integration

### Latency
- Instrument uses ~10-15 ms latency
- Increase buffer size for recording
- Use direct monitoring when possible

### Automation
- Right-click parameters for automation
- Use last 8 bars for parameter locks
- Smooth recorded automation

### Recording
- Arm track before playing
- Use 24-bit recording
- Check input levels before recording
