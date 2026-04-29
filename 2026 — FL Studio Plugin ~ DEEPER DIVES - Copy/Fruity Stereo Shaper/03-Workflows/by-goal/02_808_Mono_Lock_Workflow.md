# 808 Mono Lock Workflow - Club-Ready Bass

## Goal
Ensure 808 bass hits hard in mono (clubs, phones, radios) while maintaining stereo width for harmonics and overtones.

## The Problem

**Wide bass = weak in mono**
- Clubs play mono bass for power
- Phones sum to mono
- Car systems are often mono below 200Hz
- Phase cancellation kills bass power

**Solution:** Lock bass to mono, keep highs in stereo

## Why This Matters

### Moody/Dark Hip-Hop
808s are the foundation - must hit hard on all systems

### Upbeat/Club Hip-Hop
Dance floors use mono bass for maximum impact

### Trap/Electronic Hip-Hop
808s define the genre - mono bass is essential

### All Hip-Hop Genres
Bass management = professional vs amateur sound

## Quick Version (3 Minutes)

1. Load 808 into mixer track
2. Add Fruity Stereo Shaper
3. Use "808 Bass Mono Lock" preset
4. Matrix collapses to mono
5. Done - bass now hits in mono

**Settings:**
- L→L: 0.5, L→R: 0.5
- R→L: 0.5, R→R: 0.5
- Result: Perfect mono sum

## Advanced Version: Multiband Mono Lock

### Why Multiband?
- Lock only low frequencies to mono
- Keep high-frequency distortion/harmonics in stereo
- Best of both worlds

### Setup (Using Patcher)

```
808 INPUT
    ↓
FREQUENCY SPLITTER
    ├── LOW (<150Hz) → STEREO SHAPER (Mono Lock) ──┐
    └── HIGH (>150Hz) → Keep Stereo ───────────────┤
                                                    ↓
                                            MIXER → OUTPUT
```

### Step-by-Step

**1. Load 808 into Patcher**

**2. Add Frequency Splitter**
- Low cutoff: 150Hz
- Slope: 24dB/oct (steep)
- Route Low to Channel 1
- Route High to Channel 2

**3. Add Stereo Shaper to Low Band**
- Use "808 Bass Mono Lock" preset
- Matrix settings:
  - L→L: 0.5, L→R: 0.5
  - R→L: 0.5, R→R: 0.5

**4. Keep High Band Stereo**
- No processing needed
- Maintains stereo harmonics

**5. Sum Both Bands**
- Mix Low (mono) + High (stereo)
- Result: Mono bass, stereo highs

### Visual Routing

```
         ┌───────────────────┐
808  →   │ FREQUENCY SPLIT   │
         └─────┬────────┬────┘
               ↓        ↓
            LOW(150)  HIGH(150+)
               ↓        ↓
          STEREO     UNTOUCHED
          SHAPER     (stereo)
          (mono)        ↓
               ↓        ↓
               └────┬───┘
                    ↓
                 OUTPUT
        (mono bass + stereo highs)
```

## Genre-Specific Settings

### Moody/Dark Hip-Hop (Heavy 808)
**Low Band (Mono):**
- Cutoff: 150Hz
- Add subtle saturation after mono lock
- Keep deep sub pure

**High Band (Stereo):**
- Slight distortion for grit
- Narrow stereo (L→L=0.9, L→R=0.1)

**Character:** Dark, heavy, mono-focused

### Upbeat/Club Hip-Hop (Punchy 808)
**Low Band (Mono):**
- Cutoff: 120Hz
- Clean and powerful
- Add transient shaper for punch

**High Band (Stereo):**
- Bright EQ boost
- Medium stereo width
- Short reverb for space

**Character:** Clean, punchy, club-ready

### Trap/Electronic Hip-Hop (Distorted 808)
**Low Band (Mono):**
- Cutoff: 100Hz (lower for sub)
- Pure mono, no effects

**High Band (Stereo):**
- Heavy distortion/saturation
- Wide stereo imaging
- Stereo delay for width

**Character:** Massive sub, aggressive highs

### Lo-Fi Hip-Hop (Warm 808)
**Low Band (Mono):**
- Cutoff: 180Hz
- Tape saturation
- Gentle compression

**High Band (Stereo):**
- Filtered (low-pass at 5kHz)
- Narrow stereo
- Vintage chorus

**Character:** Warm, nostalgic, controlled

### Melodic/R&B Hip-Hop (Musical 808)
**Low Band (Mono):**
- Cutoff: 150Hz
- Clean dynamics
- Transparent processing

**High Band (Stereo):**
- Harmonic enhancement
- Moderate stereo width
- Subtle reverb

**Character:** Musical, melodic, polished

## Simple Mono Lock (No Multiband)

### When to Use
- Quick mix
- Simple 808 with no distortion
- When you want all frequencies mono

### Setup
1. Load Stereo Shaper after 808
2. Use "808 Bass Mono Lock" preset
3. Done

**Matrix:**
```
L→L: 0.5    L→R: 0.5
R→L: 0.5    R→R: 0.5
```

**Result:** Entire 808 in mono

### Pros
- Simple
- Fast
- Guaranteed mono compatibility

### Cons
- Loses stereo harmonics
- Less exciting on headphones
- Can sound flat

## Checking Your Work

### Test 1: Mono Button
- Hit mono button on mixer
- Bass should maintain full power
- No volume drop = success

### Test 2: Phase Correlation
- Load Fruity Limiter on master
- Enable correlation meter
- Should show tight phase (close to +1.0)

### Test 3: Frequency Analyzer
- Load Wave Candy
- Check low frequencies (<150Hz)
- Should be mono (no stereo separation)

### Test 4: Multiple Systems
- Check on headphones
- Check on phone speaker
- Check on car system (if possible)
- Bass should hit hard everywhere

## Common Mistakes

### Mistake 1: Forgetting to Mono Lock
**Problem:** Bass disappears in clubs
**Fix:** Always mono lock below 150Hz

### Mistake 2: Mono Locking Too High
**Problem:** Sounds dull and lifeless
**Fix:** Only mono lock below 150-200Hz

### Mistake 3: Adding Stereo Effects to Bass
**Problem:** Reverb/delay makes bass weak
**Fix:** Only add effects above 150Hz

### Mistake 4: Not Checking Mono
**Problem:** Sounds great at home, weak on systems
**Fix:** Always test with mono button

### Mistake 5: Distortion Before Mono Lock
**Problem:** Distortion creates stereo content that gets collapsed
**Fix:** Mono lock first, then add distortion to high band

## Pro Tips

1. **150Hz rule:** Everything below = mono, always
2. **Multiband is king:** Best bass management technique
3. **Check clubs:** Most clubs play mono bass
4. **Distortion placement:** After mono lock for maximum impact
5. **Phase meter:** Use correlation meter religiously
6. **Sub frequencies:** Below 60Hz should be pure mono
7. **Kick + 808:** Both should be mono for punch
8. **Sidechain:** Works better with mono bass
9. **Compression:** Compress after mono lock
10. **Trust the meter:** Phase correlation doesn't lie

## Quick Reference

### Mono Lock Only
```
PRESET: "808 Bass Mono Lock"
CUTOFF: N/A (full spectrum)
USE FOR: Quick mixes, simple 808s
PROS: Fast, guaranteed mono
CONS: Loses stereo highs
```

### Multiband Mono Lock
```
CUTOFF: 150Hz
LOW: Mono lock
HIGH: Keep stereo
USE FOR: Professional mixes, distorted 808s
PROS: Best of both worlds
CONS: Requires Patcher setup
```

## Workflow Comparison

### Basic Workflow
```
808 → STEREO SHAPER (Mono Lock) → OUTPUT
Time: 30 seconds
Quality: Good for mono, flat for stereo
```

### Advanced Workflow
```
808 → PATCHER → FREQ SPLIT (150Hz)
              ├── LOW → STEREO SHAPER (Mono) → MIX
              └── HIGH → STEREO → MIX
Time: 3 minutes
Quality: Professional, best results
```

## Signal Flow Examples

### Trap 808 (Distorted)
```
808 INPUT
    ↓
PATCHER
    ↓
FREQ SPLIT (100Hz)
├── LOW → MONO LOCK → CLEAN
└── HIGH → DISTORTION → STEREO DELAY → WIDE
    ↓
SUM → POWERFUL MONO SUB + AGGRESSIVE STEREO HIGHS
```

### Clean 808 (Simple)
```
808 INPUT
    ↓
STEREO SHAPER
    ↓
MONO LOCK (Full Spectrum)
    ↓
MONO 808 OUTPUT
```

### R&B 808 (Musical)
```
808 INPUT
    ↓
FREQ SPLIT (150Hz)
├── LOW → MONO LOCK → SUBTLE SATURATION
└── HIGH → HARMONIC EXCITER → MEDIUM WIDTH
    ↓
MUSICAL MONO BASS + POLISHED HARMONICS
```

## Automation Ideas

### Dynamic Mono Lock
**Verse:** Full mono lock (tight bass)
**Chorus:** Multiband (wider harmonics)

### Build-Up
**Start:** Mono + filtered highs
**Drop:** Mono bass + wide distorted highs

**Automate:** Frequency split crossover point

## Integration with Other Plugins

**Works Great With:**
- **Patcher:** Essential for multiband routing
- **Fruity Parametric EQ 2:** Shape bass before mono lock
- **Fruity Limiter:** Check phase correlation
- **Effector:** Distortion on high band
- **Fruity Compressor:** Dynamics control after mono lock
- **Wave Candy:** Visual confirmation of mono bass

**Avoid:**
- Stereo reverb on full 808
- Stereo delay on bass frequencies
- Stereo chorus below 150Hz
- Haas effect on bass

## Before/After

**BEFORE (Stereo 808):**
- Sounds wide in headphones
- Disappears in mono
- Phase issues
- Weak on club systems

**AFTER (Mono Lock):**
- Hits hard everywhere
- Mono compatible
- Clean phase
- Club-ready power

## Success Metrics

✅ Bass maintains power in mono
✅ No phase cancellation
✅ Correlation meter shows tight phase
✅ Sounds good on phones
✅ Hits hard on all systems
✅ Professional mixing standard

## Final Checklist

- [ ] 808 below 150Hz is mono
- [ ] Checked with mono button
- [ ] Phase correlation is good
- [ ] Tested on multiple systems
- [ ] No stereo effects on bass
- [ ] Kick drum also mono
- [ ] Ready for clubs/radio

## Remember

**Mono bass = professional mixes**
**Wide bass = amateur hour**
**Always check mono compatibility**
**Trust the phase meter**
