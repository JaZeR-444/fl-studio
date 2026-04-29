# Fruity Stereo Enhancer - Parameter Cheat Sheet

## Core Controls

### Stereo Separation
**Function:** Adjusts Mid/Side balance for width control
- **Left (Wide):** Increases Side signal, widens stereo field
- **Center:** Original stereo width maintained
- **Right (Mono):** Reduces Side signal, collapses to mono
- **Range:** Wide ↔ Mono
- **Use:** Control stereo width of existing stereo signals
- **Note:** Does NOT affect pure mono signals

### Phase Offset
**Function:** Delays one channel to create psychoacoustic width
- **0ms:** No delay, original timing
- **1-20ms:** Subtle width, natural sound
- **20-40ms:** Haas effect, "double tracking" feel
- **40-100ms:** Noticeable delay, possible comb filtering
- **100ms+:** Echo-like effects
- **Use:** Create stereo from mono sources
- **Warning:** Always check mono compatibility

### Invert Phase
**Function:** Flips polarity of one channel
- **Off:** Normal operation
- **On:** Creates phase cancellation effects
- **Result:** Hollow, thin sound in stereo
- **Warning:** Will cause severe cancellation in mono
- **Use:** Creative effects only

### Pan
**Function:** Positions the final output in stereo field
- **Use:** Compensate for pan shift from Phase Offset
- **Tip:** After using Phase Offset, use Pan to re-center

### Volume
**Function:** Adjusts output level
- **Use:** Compensate for perceived loudness changes
- **Tip:** Match processed/unprocessed levels for A/B comparison

## Quick Reference Table

| Parameter | Function | Range | Mono Affects? | Common Use |
|-----------|----------|-------|---------------|------------|
| Stereo Separation | Width control | Wide ↔ Mono | No | Widening pads/hats |
| Phase Offset | Timing delay | 0-500ms | Yes | Haas effect |
| Invert | Polarity flip | On/Off | Creates issues | Creative FX |
| Pan | Position | L ↔ R | Yes | Re-centering |
| Volume | Level | -∞ to +∞ | Yes | Matching levels |

## Common Workflows

### Widen Stereo Pads
1. Set Stereo Separation: 20-40% left
2. Check mono compatibility
3. Adjust volume to match

### Create Pseudo-Stereo Vocal
1. Set Phase Offset: 20-30ms
2. Use Pan to re-center (usually slight right)
3. Check mono compatibility
4. Reduce offset if comb filtering occurs

### Instant Mono Utility
1. Set Stereo Separation: Fully right
2. Use on elements that need mono checking
3. Automate on/off for quick A/B testing

### Haas Effect Width
1. Phase Offset: 25-35ms
2. Pan to center (compensate for shift)
3. Check mono (expect some cancellation)
4. Use only on non-critical elements

## Hip-Hop Specific Quick Settings

### Moody Hip-Hop
- **Dark Pads:** Sep 30% left, no offset
- **Atmospheric Synths:** Sep 40% left, offset 15ms
- **Background Vocals:** Offset 25ms, pan to center

### Upbeat Hip-Hop
- **Hi-Hats:** Sep 50% left for width
- **Claps:** Sep 20% left, minimal offset
- **Vocal Doubles:** Offset 30ms, pan compensate

### Melodic Hip-Hop
- **Keys/Piano:** Sep 25% left, clean width
- **Strings:** Sep 35% left, offset 10ms for depth
- **Vocal Harmonies:** Offset 20-40ms per layer

### Electronic Hip-Hop
- **Synth Leads:** Sep 15% left (keep focused)
- **Pads:** Sep 45% left for space
- **Vocal Chops:** Offset 15-25ms for movement

### Trap
- **Hi-Hat Rolls:** Sep 60% left for width
- **Snare Layers:** Sep 20% left
- **Vocal Ad-libs:** Offset 20ms, pan left/right

## Warning Signs

### Too Much Width
- Sound feels "thin" or "hollow"
- Loses punch in mono
- Phase cancellation audible
- Elements sound distant

### Phase Issues
- Sound disappears in mono
- Comb filtering (flanging sound)
- Frequency notches appear
- Lacks low-end punch

### Incorrect Application
- Mono kick/bass widened (bad)
- Critical vocal too wide (bad)
- Stereo separation on mono source (no effect)
- Phase offset too high (sounds like delay)

## Pro Tips

1. **Always check mono** - Hit the mono button frequently
2. **Haas sweet spot** - 20-40ms is most natural
3. **Separation for stereo** - Use on existing stereo sources
4. **Offset for mono** - Use on mono sources to create width
5. **Pan compensation** - Phase offset shifts pan, compensate with Pan knob
6. **Less is more** - Subtle settings sound more natural
7. **Genre matters** - Trap = wide hats, Boom-bap = tighter stereo field
8. **Stack carefully** - Multiple widening effects compound quickly
9. **Save presets** - Create go-to settings for common scenarios
10. **Automation** - Automate width for dynamic arrangements

## Common Mistakes to Avoid

1. ❌ Widening kick drums or bass
2. ❌ Using Phase Offset without checking mono
3. ❌ Inverting phase without understanding consequences
4. ❌ Extreme separation settings on all tracks
5. ❌ Forgetting to compensate pan after phase offset
6. ❌ Using stereo separation on mono sources
7. ❌ Ignoring mono compatibility for streaming platforms
8. ❌ Over-widening lead vocals
9. ❌ Not matching levels after processing
10. ❌ Using multiple widening plugins without purpose

## Frequency-Specific Considerations

### Low Frequencies (20-200Hz)
- **Keep narrow** - Mono or minimal width
- **Reason:** Maintains punch and power
- **Exception:** Creative bass width in electronic genres

### Mid Frequencies (200Hz-5kHz)
- **Moderate width** - 20-40% separation
- **Reason:** Balances clarity and focus
- **Application:** Vocals, keys, guitars

### High Frequencies (5kHz+)
- **Can be wider** - 40-60% separation
- **Reason:** Creates air and space
- **Application:** Hi-hats, cymbals, atmospheric elements

## Integration with Other Plugins

### Before Stereo Enhancer
- **EQ:** Shape tone first
- **Compression:** Control dynamics
- **Saturation:** Add harmonics

### After Stereo Enhancer
- **Reverb:** Space and depth
- **Delay:** Rhythmic elements
- **Limiter:** Final level control

### Parallel Processing
- **Blend wet/dry:** Use mixer send for subtle enhancement
- **Frequency-specific:** Process only highs/mids in parallel

---

**Quick Start:** Load on a synth pad → Move Stereo Separation 30% left → Check mono → Adjust to taste
