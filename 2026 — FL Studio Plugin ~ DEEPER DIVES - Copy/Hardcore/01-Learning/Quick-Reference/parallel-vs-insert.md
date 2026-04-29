# Parallel vs Insert Processing Guide

Understanding when to use Hardcore as an insert effect vs. parallel send for hip-hop production. [SRC: IL-MAN]

## Insert Processing

**What it is:** Hardcore placed directly on the instrument/track channel, processing the entire signal (100% wet by default).

### When to Use Insert

✅ **Total transformation desired**
- Completely changing the character of the source
- Print-and-commit processing
- Extreme effects where dry signal doesn't fit

✅ **Single sound sources**
- Individual drum samples
- Bass guitar recordings
- Lead vocal takes
- Synth patches

✅ **Simpler chains**
- When you don't need complex blending
- Quick processing decisions
- Demo/idea recording

✅ **CPU conservation on single tracks**
- One instance per sound
- No additional mixer routing needed

### Insert Examples

**Example 1: Bass Guitar**
```
Track: Bass Guitar
Hardcore (Insert): Distortion + Compression + Cabinet 3
Result: Complete bass tone, fully committed
```

**Example 2: Vocal Effect**
```
Track: Lead Vocal
Hardcore (Insert): Radio effect chain (EQ + Distortion + Cabinet 5)
Result: 100% wet, no dry vocal mixed in
```

**Example 3: Drum Sample**
```
Track: Snare Sample
Hardcore (Insert): Distortion + Compression + Gate
Result: Completely transformed snare character
```

## Parallel Processing (Send/Return)

**What it is:** Hardcore placed on a send/return track, blended with the dry signal via mixer faders.

### When to Use Parallel

✅ **Blend control needed**
- Want to control how much effect vs. dry signal
- Subtle to extreme processing in one plugin
- Easy A/B comparison

✅ **Multiple tracks sharing processing**
- Drum group (kick, snare, hats) sharing saturation
- Multiple vocals sharing reverb/delay
- Bus processing with individual track control

✅ **Preserving transients**
- Heavy distortion blended with clean signal
- Parallel compression (New York style)
- Maintaining punch while adding character

✅ **Complex layering**
- Multiple Hardcore instances on different sends
- Frequency-split processing
- Mid/side style effects

### Parallel Examples

**Example 1: Drum Bus Saturation**
```
Track 1: Kick (Dry)
Track 2: Snare (Dry)
Track 3: Hats (Dry)
Send Track: Hardcore (Distortion + Compression + Cabinet 1)

Routing: All drum tracks → Send track
Mixing: Blend dry drums (80%) with processed send (20%)
Result: Tight drums with controlled aggression added
```

**Example 2: Vocal Parallel Reverb**
```
Track: Lead Vocal (Dry)
Send Track: Hardcore (Short Reverb + Cabinet 2)

Routing: Vocal → Send
Mixing: Dry vocal (100%) + Reverb send (30%)
Result: Vocal with vintage room character
```

**Example 3: Parallel Bass Processing**
```
Track 1: Bass - Low frequencies (High-pass removed)
Track 2: Bass - High frequencies (Low-pass removed)
Send Track 1: Clean cabinet (Cabinet 2) for lows
Send Track 2: Distorted (Cabinet 3) for highs

Mixing: Blend both sends with dry bass
Result: Full bass with controlled saturation on top end
```

## Decision Matrix

| Situation | Insert | Parallel | Reasoning |
|-----------|--------|----------|-----------|
| Extreme distortion | ✓ | ✓ | Use parallel if transients matter |
| Subtle saturation | ✓ | ✓ | Either works, parallel gives more control |
| Reverb/Delay | ✗ | ✓ | Always parallel for time-based effects |
| Noise gate | ✓ | ✗ | Must be on signal itself |
| EQ shaping | ✓ | ✗ | Insert for source tone |
| Drum bus processing | ✗ | ✓ | Blend control for group |
| Vocal special FX | ✓ | ✓ | Depends on effect intensity |
| Multiple tracks | ✗ | ✓ | Efficiency via sends |

## Setting Up Parallel Processing in FL Studio

### Method 1: Standard Send/Return
```
Step 1: Create Send Track
- In mixer, right-click on empty track
- Select "Create send track" or press Ctrl + L

Step 2: Load Hardcore
- Open Hardcore on the send track
- Set all mix controls to 100% wet
- Set Cabinet as desired

Step 3: Route Source Track
- On source track, right-click the send knob
- Select the send track (or drag to route)
- Adjust send level to taste

Step 4: Blend
- Keep dry track at normal level
- Adjust send track fader for blend amount
- Tip: Solo both to hear combined effect
```

### Method 2: Multiple Sends
```
Step 1: Create multiple send tracks
- Send A: Light processing (Cabinet + subtle saturation)
- Send B: Heavy processing (Distortion + Cabinet 5)
- Send C: Time effects (Reverb + Delay)

Step 2: Route selectively
- Send source to all three sends
- Adjust each send level independently

Step 3: Complex blending
- Dry: 70%
- Send A: 20%
- Send B: 10%
- Send C: 25%
```

### Method 3: Patcher (Advanced)
```
Step 1: Replace Hardcore with Patcher
- Right-click plugin slot
- Select Patcher

Step 2: Create parallel paths
- Add Hardcore to one module
- Create dry signal path
- Use surface controls to blend

Step 3: Save as preset
- Complex parallel chains can be saved
- Reusable across projects
```

## Hip-Hop Specific Strategies

### Parallel Distortion for Drums
**Why:** Heavy distortion adds harmonics but loses punch. Parallel processing preserves transients.
```
Dry Drums: 80% level
Distortion Send: 20% level
Hardcore: Heavy distortion + Noise gate + Cabinet 1
Result: Punchy drums with grit and edge
```

### Parallel Cabinet for Character
**Why:** Cabinet changes tone without heavy processing.
```
Dry Signal: 70% level
Cabinet Send: 30% level
Hardcore: Only cabinet simulation (no stompboxes)
Result: Subtle speaker character
```

### Parallel Compression (NY Style)
**Why:** Heavy compression for density, blended with uncompressed punch.
```
Dry Drums: 60% level
Compressed Send: 40% level
Hardcore: Compressor (Ratio 10:1, Fast attack/release)
Result: Dense, punchy drums
```

## Common Mistakes

❌ **Using time effects as insert**
- Reverb/Delay as insert washes out the source
- Always use parallel for time-based effects

❌ **100% wet parallel sends**
- Defeats the purpose of parallel processing
- Keep some dry signal or adjust blend

❌ **Gain staging issues**
- Parallel paths can cause phase issues if not level-matched
- Use meters to ensure consistent loudness

❌ **Over-complicating simple sources**
- Single synth note doesn't need parallel processing
- Reserve for complex sources or buses

## CPU Considerations

**Insert Method:** One instance per track = Higher CPU with many tracks
**Parallel Method:** One instance shared across multiple tracks = Lower CPU overall

**For large projects:** Use parallel sends for shared processing (drums, vocals, etc.)

---

*Source: Image-Line FL Studio Hardcore Manual [SRC: IL-MAN]*
