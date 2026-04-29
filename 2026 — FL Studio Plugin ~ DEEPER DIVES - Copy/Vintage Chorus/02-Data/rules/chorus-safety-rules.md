Tags: hip-hop/rap | R&B | deep bass edm

## Vintage Chorus Safety Rules

### Gain Staging

| Situation | Input Gain | Output Level | Why |
|-----------|-----------|--------------|-----|
| Vocals | -6 to -3 dB | Match input | Prevents over-modulation artifacts |
| Synths/Keys | -3 to 0 dB | Match input | Maintains transients |
| Bass | -12 to -6 dB | -3 dB | Prevents low-end mud |
| Guitar | -6 dB | Match input | Clean modulation |

### Low-End/808 Safety Rules

**ALWAYS follow these when applying chorus to bass-heavy content:**

1. **Never apply chorus to pure sub-bass (20-60Hz)** - The modulation creates phase issues that kill mono compatibility
2. **Apply chorus ABOVE 80Hz on bass** - Use high-pass filter on Wet signal if available
3. **Check mono frequently** - If it sounds thin in mono, reduce Depth or increase Dry signal
4. **Limit stereo width on bass to 40-50%** - Too wide = lost low-end translation

### The "Chorus on 808" Test

```
1. Apply chorus with default settings to 808
2. Sum to mono (both channels)
3. Listen: Should still punch, not sound hollow
4. If hollow: Reduce Dry/Wet to 15-20%
5. If still hollow: Increase Dry signal or disable chorus
```

### Avoid List

| ❌ Don't Do This | ❌ What It Causes | ✅ Do This Instead |
|-----------------|-------------------|-------------------|
| Rate > 0.8Hz on vocals | Vibrato effect, pitch issues | Keep Rate 0.1-0.4Hz |
| Depth > 50% on melodic content | Detuned, phasey sound | Keep Depth 20-40% |
| 100% Wet on any track | No reference point, hard panning | Keep Dry at 25-50% |
| Sync to tempo on slow songs | Phasing with tempo changes | Use free rate (Hz) |
| Apply to mastering bus | Global phase issues | Use on individual tracks only |

### Translation Checklist

Before committing a track with Vintage Chorus:

- [ ] Check in mono—does it hold together?
- [ ] Solo the bass—does it still hit?
- [ ] A/B with Dry version—did you actually need it?
- [ ] Listen on phone/earbuds—is the effect still appropriate?
- [ ] Check mix balance—is chorus adding unwanted volume changes?

### Headroom Guidelines

- Keep peaks at -6dB before chorus (modulation can increase apparent loudness)
- After chorus, watch for peaks that are 3-6dB higher than input
- Use output trim to match levels for accurate A/B testing
