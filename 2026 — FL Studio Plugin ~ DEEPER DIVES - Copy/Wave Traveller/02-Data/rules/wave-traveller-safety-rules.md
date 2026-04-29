Tags: hip-hop/rap | lofi | deep bass edm

## Wave Traveller Safety Rules

### Gain Staging

| Sound Type | Master Volume | Resample Impact | Watch For |
|------------|---------------|-----------------|-----------|
| Pads | -6 dB | Adds ~3dB over time | Creeping levels |
| Bass | -3 dB | Minimal effect | Filter resonance |
| Keys | 0 dB | Moderate evolution | Transients |
| Textures | -6 dB | Heavy evolution | Uncontrolled changes |

### Low-End Rules

**Critical for bass-heavy genres:**

1. **High-pass input filter removes rumble** - Use if wavetable has excessive low content
2. **Resample affects low frequencies most** - Test bass patches at high resample values
3. **Filter cutoff = low-end presence** - Lower cutoff = more bass
4. **Mutate can add low-end harmonics** - Use sparingly on bass

### Resample Safety

**What resample does:**
- Feeds output back into input
- Creates evolving, degrading sound
- Can add harmonics or remove them
- Over time, sound changes unpredictably

**Safe resample levels:**

| Level | Effect | Safe For |
|-------|--------|----------|
| 0-20% | Subtle evolution | Keys, pads |
| 20-40% | Noticeable change | Textures, atmosphere |
| 40-60% | Heavy evolution | Intros, breakdowns |
| 60%+ | Radical change | Sound design only |

### Avoid List

| ❌ Don't Do This | ❌ Result | ✅ Instead |
|-----------------|-----------|------------|
| High resample on lead | Unpredictable pitch/tonal shifts | Keep under 30% |
| Skip mono test | Phase issues with complex wavetables | Test EVERY patch |
| Ignore position control | Static, boring sound | Modulate position |
| High resonance on bass | Boomy, muddy low-end | Keep under 40% |
| No filter on raw wavetable | Harsh, fatiguing | Always filter |

### The "Bass Patch Test"

```
1. Create bass patch with 50% resample
2. Play sustained root note for 10 seconds
3. Listen: Does it stay controlled?
4. Check mono: Still punchy?
5. If evolving too much: Reduce resample
6. If too static: Increase position LFO depth
```

### Wavetable Categories by Use

| Category | Best For | Avoid |
|----------|----------|-------|
| Piano/Keys | Hip-hop melodies, lofi | Aggressive music |
| Bass | Drops, energy | Subtle backgrounds |
| Texture | Atmosphere, mood | Clear melodies |
| Aggressive | Intensity, impact | Relaxed sections |
| Pad | Emotional moments | Fast, busy mixes |
| Glitch | Rhythmic texture | Sustained notes |
