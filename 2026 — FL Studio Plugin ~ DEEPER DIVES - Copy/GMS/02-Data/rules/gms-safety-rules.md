Tags: moody | hip-hop/rap | electric

## GMS Safety Rules

### Gain Staging

| Sound Type | Osc Level | Filter Out | Master | Notes |
|------------|-----------|------------|--------|-------|
| Bass | 70% | -6 dB | -12 dB | Clean low-end |
| Lead | 80% | 0 dB | -3 dB | Needs to cut |
| Pad | 60% | -3 dB | -6 dB | Headroom for reverb |
| FX | 50% | -6 dB | -6 dB | Not foreground |

### Low-End Safety

1. **Filter below 40% for pure bass** - Higher cuts fundamental
2. **Resonance under 40% on bass** - Prevents muddy low-end
3. **Test in mono constantly** - Phase issues with detuned oscs
4. **Sidechain to kick** - GMS responds well to sidechain

### Avoid List

| ❌ Don't Do This | ❌ Result | ✅ Instead |
|-----------------|-----------|------------|
| High resonance on bass | Muddy, undefined | Keep under 35% |
| Too much width on bass | Lost mono presence | Reduce stereo width |
| Skip mono test | Poor translation | Test every patch |
| Over-modulate | Chaotic sound | Limit to 2-3 modulations |
