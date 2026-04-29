Tags: hip-hop/rap | R&B | deep bass edm

## Wasp XT Safety Rules

### Gain Staging with Dual Filters

| Sound Type | Pre-Filter | Post-Filter 1 | Post-Filter 2 | Final |
|------------|------------|---------------|----------------|-------|
| Sub bass | -6 dB | -6 dB | N/A | -12 dB | Two filters compound gain |
| Mid bass | -3 dB | -3 dB | -3 dB | -6 dB | Serial filters need headroom |
| Lead | 0 dB | 0 dB | N/A | -3 dB | Single filter sufficient |
| Pad | -3 dB | -3 dB | -3 dB | -6 dB | Parallel needs blending |

### Low-End Safety Rules (Critical)

**Dual filters amplify low-end issues:**

1. **Serial routing on bass = danger** - Two filters can compound the cut
2. **Parallel routing preserves low-end** - Better for bass-heavy genres
3. **Test each filter stage solo'd** - Check what EACH filter is doing
4. **Resonance stacks in serial** - Can create massive boosts at cutoff
5. **Never trust visual meters** - Listen more than you watch

### Mono Translation

**With dual filters, phase issues multiply:**

1. Solo the Wasp instance
2. Sum to mono
3. Listen for: "Does it still hit?"
4. If thin: Check if filters are removing fundamentals
5. If muddy: One filter might be too open

### The "XT Bass Test"

```
1. Set filters to: F1=35%, F2=40%, serial routing
2. Play sustained root note
3. Check mono: Should be focused and punchy
4. If thin: Bypass F2, test F1 alone
5. If muddy: Increase F1 cutoff slightly
6. If weak: Boost pre-filter gain
7. Document which filter configuration works best
```

### Avoid List

| ❌ Don't Do This | ❌ Result | ✅ Do This Instead |
|-----------------|-----------|-------------------|
| Serial filters at max resonance | Extreme boost, distortion | Keep serial resonance under 40% |
| Both filters wide open | Harsh, no definition | Close at least one filter |
| Complex routing without plan | Unfocused sound | Draw signal flow first |
| Too many mod destinations | Chaotic sound | Limit to 2-3 per envelope |
| Skip mono testing | Poor translation | Test EVERY patch in mono |
| High-pass filter on sub bass | Lost foundation | Use low-pass only |

### Headroom Guidelines

**With dual filters, gain staging is critical:**

- Start with pre-filter levels 6dB lower than single-filter sounds
- Each filter stage can add or remove up to 6dB at resonance
- Parallel routing requires careful level matching
- Use output limiter/soft clip for safety

### Filter Routing Comparison

| Routing | Character | Bass-Safe? | Best For |
|---------|-----------|-------------|----------|
| Serial | Darker, more cut | ❌ Use with caution | Leads, pads |
| Parallel | Preserves lows | ✅ Yes | Bass, texture |
| Single | Cleanest | ✅ Yes | Simple sounds |
