Tags: hip-hop/rap | R&B | deep bass edm

## Wasp Safety Rules

### Gain Staging

| Sound Type | Osc Level | Filter Output | Master Output | Why |
|------------|-----------|---------------|---------------|-----|
| Sub bass | 70% | -6 dB | -12 dB | Prevents clipping, maintains clean fundamental |
| Mid bass | 80% | -3 dB | -6 dB | Punchy without mud |
| Lead | 75% | 0 dB | -3 dB | Needs to cut through |
| Pad | 60% | -3 dB | -6 dB | Softer attack, needs headroom |

### Low-End Safety Rules

**Critical for bass-heavy production:**

1. **Never let raw saw waves hit the mixer at 0 dB** - They clip easily, especially with resonance
2. **Filter cutoff below 30% for sub-bass** - Opens above = lost low-end translation
3. **High resonance kills sub frequencies** - Keep resonance under 40% for pure bass
4. **Test in mono constantly** - Detuned oscs create phase issues

### Mono Translation Checklist

- [ ] Solo the bass channel
- [ ] Sum to mono
- [ ] Does the fundamental still hit?
- [ ] If thin: Reduce filter cutoff by 10%
- [ ] If muddy: Increase filter cutoff by 5%, reduce resonance
- [ ] If weak: Check oscillator levels (might need boost)

### Avoid List

| ❌ Don't Do This | ❌ Result | ✅ Do This Instead |
|-----------------|-----------|-------------------|
| High resonance on bass | Muddy, undefined low-end | Keep resonance under 40% on bass |
| Undetuned oscs | Thin, weak sound | Always detune oscs 3-10 cents |
| Filter fully open on bass | Harsh, no character | Cut back to 50-70% |
| 100% wet chorus on everything | Always sounds "80s" | Use selectively, especially on leads |
| Fast attack on pad | Lost transients | Slow attack (10-50ms) for pads |
| No filter envelope | Static, boring | Add envelope for movement |

### Headroom Guidelines

**Before processing:**
- Set oscillator levels so peaks hit -6 dB
- Apply gentle limiting or compression after Wasp
- Watch for resonance boost—can add 6+ dB at cutoff

**During mixing:**
- High-pass filter Wasp outputs if not contributing to low-end
- Sidechain bass to kick (Wasp responds well to sidechain)
- Use Fruity Limiter for soft clipping if needed

### The "Wasp Bass Test"

```
1. Create basic bass patch (detuned saws, octave down)
2. Set filter cutoff to 25%, resonance 30%
3. Play root note sustained for 2 seconds
4. Check in mono—should be thick and focused
5. Increase cutoff to 35%—should still hit hard
6. Add slight resonance—should add character, not mud
7. If any step fails, rebalance levels
```
