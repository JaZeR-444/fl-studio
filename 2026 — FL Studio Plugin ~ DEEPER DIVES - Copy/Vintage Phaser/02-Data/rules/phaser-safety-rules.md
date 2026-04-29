Tags: hip-hop/rap | R&B | moody

## Vintage Phaser Safety Rules

### Gain Staging

| Track Type | Input Level | Output Target | Notes |
|------------|-------------|---------------|-------|
| Vocals | -6 dB | Match input | Watch for sibilance buildup |
| Guitars | -6 dB | -3 dB | Classic rock warmth |
| Synths | -3 dB | Match input | Depends on harmonic content |
| Bass | -12 dB | -6 dB | Avoid on fundamental frequencies |
| Keys/Piano | -3 dB | Match input | Usually safe, watch peaks |

### Low-End Safety Rules

**Critical for bass-heavy genres:**

1. **High-pass filter the Wet signal** - Never let phaser process sub-bass (20-80Hz)
2. **Test in mono first** - Phasers can create phase cancellations in low frequencies
3. **Keep Feedback moderate on bass** - High resonance + bass = muddy, indistinct low-end
4. **Check stereo bass translation** - If it disappears in mono, reduce Wet signal

### When NOT to Use Phaser

| Situation | Problem | Alternative |
|-----------|---------|-------------|
| Pure sub-bass/808 | Phase cancellations, lost punch | Use chorus instead |
| Lead vocal that needs clarity | Sweeping masks definition | Use subtle chorus or delay |
| Mastering bus | Global phase issues | Use on individual elements only |
| Drum bus | Can blur transients | Use on individual drums only |

### The "Bass Phaser Test"

```
1. Apply phaser with: Rate 0.1Hz, Depth 50%, Feedback 40%, Wet 35%
2. Solo the bass channel
3. Sum to mono
4. Listen: Does the fundamental still hit hard?
5. If no: High-pass Wet signal at 100Hz, re-test
6. If still no: Reduce Wet to 20% or disable
```

### Avoid List

| ❌ Avoid | ❌ Result | ✅ Instead |
|---------|----------|-----------|
| Feedback > 70% | Harsh, metallic, unpleasant | Keep 30-55% for warmth |
| Rate > 0.5Hz on vocals | Distracting, pitch-like | Slow to 0.1-0.3Hz |
| 100% Wet | No reference, disorienting | Keep 25-40% Dry |
| High Feedback + high Rate | Nausea-inducing, unusable | Moderate one or both |
| Phaser on snare attack | Blurred transients | Sidechain or parallel |

### Translation Checklist

- [ ] Mono check: Does bass still hit?
- [ ] Phone test: Is the sweeping still musical at low volume?
- [ ] A/B comparison: Did it actually improve the mix?
- [ ] Solo test: Is the effect appropriate for the instrument?
- [ ] Mix context: Does it create space or just add processing?
