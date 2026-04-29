# Vintage Radio Effect

## Goal
Create authentic AM/FM radio, walkie-talkie, or telephone transmission effects using bit reduction and aggressive filtering.

## When to Use
- Lo-fi hip-hop production (radio interludes)
- Cinematic sound design (communication scenes)
- Transition effects between sections
- Vintage aesthetic in modern music
- Vocal processing for character
- Sound effects for games/film

## The Setup

### Core Radio Settings
```
Squarize: 40-50%
Preserve: 25-35%
Impact: 65-75%
Relation: Favor Impact (65% right)
Filter Frequency: 2-3 kHz (Band-Pass)
Filter Resonance: 30-45%
Mix: 70-100%
Gain: +3 to +5 dB
```

## Understanding Radio Sound

### What Makes Radio Sound Like Radio?

1. **Limited bandwidth:** AM/FM transmissions cut lows and highs
2. **Compression:** Heavy broadcast compression flattens dynamics
3. **Distortion:** Transmission artifacts and interference
4. **Noise:** Static, hiss, electromagnetic interference
5. **Resonance:** Speaker/receiver coloration

### Fruity Squeeze's Role
- **Squarize:** Transmission degradation and artifacts
- **Filter:** Bandwidth limitation (most important!)
- **Puncher:** Sample distortion mimicking poor receivers
- **Resonance:** Speaker coloration

## Radio Types & Settings

### AM Radio (1930s-1950s)
```
Squarize: 55%
Preserve: 20%
Impact: 80%
Relation: Favor Impact
Filter: Band-Pass @ 1.5-3 kHz, Res 40%
Mix: 100%
```
**Character:** Tinny, narrow, heavy distortion
**Use for:** Vintage broadcasts, old recordings

### FM Radio (1960s-1980s)
```
Squarize: 35%
Preserve: 40%
Impact: 60%
Relation: Balanced
Filter: Band-Pass @ 2-5 kHz, Res 25%
Mix: 90%
```
**Character:** Clearer than AM, still limited bandwidth
**Use for:** Retro radio references, less extreme

### Walkie-Talkie / CB Radio
```
Squarize: 50%
Preserve: 25%
Impact: 75%
Relation: Favor Impact
Filter: Band-Pass @ 1-2.5 kHz, Res 45%
Mix: 100%
```
**Character:** Harsh, compressed, "over" sound
**Use for:** Military/police comms, two-way radio

### Telephone (Landline)
```
Squarize: 40%
Preserve: 30%
Impact: 70%
Relation: Slight favor to Impact
Filter: Band-Pass @ 300 Hz-3.4 kHz, Res 20%
Mix: 95%
```
**Character:** Narrow bandwidth, recognizable voice
**Use for:** Phone conversation effects

### Transistor Radio (Portable)
```
Squarize: 45%
Preserve: 30%
Impact: 70%
Relation: Favor Impact
Filter: Band-Pass @ 2-4 kHz, Res 35%
Mix: 100%
```
**Character:** Tinny, distorted, low-fi speaker coloration
**Use for:** Beach radio, vintage portable sound

### Intercom / PA System
```
Squarize: 38%
Preserve: 35%
Impact: 65%
Relation: Balanced
Filter: Band-Pass @ 500 Hz-4 kHz, Res 30%
Mix: 90%
```
**Character:** Slightly muffled, public address sound
**Use for:** Announcement effects, store intercom

## Step-by-Step Process

### Step 1: Set Up Band-Pass Filtering
**This is the most important step for radio sound!**

1. Enable the internal filter
2. Set to Band-Pass mode (or use Pre/Post creatively)
3. Set Frequency to 2-3 kHz (center of speech intelligibility)
4. **Result:** Removes lows and highs, leaving narrow midrange

**Why it works:** Real radios have limited speaker/transmission range—this mimics that physical limitation.

### Step 2: Add Bit Reduction
1. Set Squarize to 40-50%
2. **Listen for:** Digital artifacts and transmission "crunch"
3. **Adjust:** Lower for cleaner radio, higher for degraded

**What it mimics:** Transmission degradation, poor signal quality, interference.

### Step 3: Aggressive Puncher Settings
1. Set Preserve to 25-35%
2. Set Impact to 65-75%
3. Favor Impact in Relation
4. **Result:** Aggressive sample replacement for distorted character

**Why it works:** Mimics poor receivers and overdriven transmitters.

### Step 4: Emphasize Resonance
1. Set Filter Resonance to 30-45%
2. **Listen for:** "Tinny" speaker coloration
3. **Adjust:** Higher for smaller speakers, lower for larger

**What it mimics:** Cheap speaker resonance, radio cabinet coloration.

### Step 5: Full or Near-Full Mix
- Set Mix to 70-100%
- This is usually a replacement effect, not parallel
- Lower Mix (70-80%) for "radio in the distance"
- Full Mix (100%) for direct transmission

### Step 6: Compensate Gain
- Increase Gain +3 to +5 dB
- Bandwidth limitation reduces perceived loudness
- Match to original for fair comparison

## Source Material Considerations

### Best Sources

#### Vocals
- **Perfect for radio effects**
- Speech intelligibility remains even with extreme processing
- Use for: Interludes, radio announcements, phone conversations

#### Speech/Dialog
- **Ideal use case**
- Narrow midrange keeps words clear
- Use for: Film/game dialog, storytelling elements

#### Music (Full Mix)
- **Works well for lo-fi aesthetic**
- Sounds like "music playing through a radio"
- Use for: Lo-fi hip-hop, transition effects

#### Individual Instruments
- **Less common but creative**
- Guitar through "radio amp" effect
- Keys/synths for vintage tone

### Problematic Sources
- **Basslines:** Bandwidth limiting removes fundamental (use sparingly)
- **Kick drums:** Lose impact without low frequencies
- **Cymbals/Hi-hats:** Filtered out entirely (can be desirable)

## Advanced Techniques

### Dynamic Radio Tuning
Automate Filter Frequency for "tuning in" effect:
```
Start: 500 Hz (off-station static)
Middle: 2.5 kHz (tuning in)
End: 2.5 kHz (locked on)
```
**Combined with:** Noise/static layer for realism

### Distance Simulation
Use Mix automation for radio "in another room":
- **Close:** Mix 100%, full effect
- **Medium:** Mix 60%, blend with reverb
- **Far:** Mix 40%, add room reverb, lower volume

### Signal Degradation
Automate Squarize for poor reception:
```
Good signal: Squarize 30%
Interference: Squarize 60%
Lost signal: Squarize 80% + automation bursts
```

### Stereo to Mono Conversion
Real radios are often mono. For authenticity:
1. Route to Fruity Stereo Shaper before Squeeze
2. Set to mono (0% width)
3. Apply Squeeze
4. **Result:** Authentic mono radio sound

### "Radio Switch-On" Effect
Automate multiple parameters:
```
0:00 - Off (Mix 0%, muted)
0:01 - Static (Squarize 80%, noise layer)
0:02 - Tuning (Filter Frequency sweep)
0:03 - Locked (Settings stabilize)
```

## Layering Additional Elements

### Static/Noise Layer
Add white/pink noise:
1. Noise generator → same radio filtering
2. Layer at -20 to -30 dB under main signal
3. **Result:** Authentic transmission noise

### Interference/Hum
Add 50/60 Hz tone:
1. Subtle sine wave at electrical frequency
2. Layer at -35 to -40 dB
3. **Result:** AC hum from old equipment

### Crackle/Vinyl Noise
For vintage broadcasts:
1. Vinyl crackle sample or generator
2. Filter to same bandwidth as main signal
3. Layer subtly for texture

## Genre-Specific Applications

### Lo-Fi Hip-Hop
```
Use for: Intro/outro, transition between sections
Settings: FM Radio preset (less extreme)
Additional: Layer with vinyl crackle
Mix: 80% (blend with clean elements)
```

### Cinematic/Film
```
Use for: Dialog scenes, period pieces, communication
Settings: Walkie-talkie or AM radio (depending on era)
Additional: Foley layers (button clicks, static bursts)
Mix: 100% (replace clean dialog)
```

### Electronic/Experimental
```
Use for: Creative vocal processing, textural elements
Settings: Extreme settings, automate for movement
Additional: Granular synthesis, reverb
Mix: Variable automation
```

### Vaporwave/Future Funk
```
Use for: Nostalgic callbacks, sample processing
Settings: FM Radio preset (1980s aesthetic)
Additional: Reverb, chorus for dreamlike quality
Mix: 70-90% (blend with other processing)
```

## Integration with Other Plugins

### Before Squeeze

**Compression:**
- Heavy compression (4:1 to 10:1 ratio)
- Mimics broadcast compression
- Flattens dynamics like real radio

**EQ (Pre-shaping):**
- Boost 1-3 kHz (speech intelligibility)
- Cut below 100 Hz and above 8 kHz
- Prepares signal for radio processing

**De-esser (for vocals):**
- Tame harsh sibilants before distortion
- Prevents excessive harshness

### After Squeeze

**Parametric EQ 2:**
- Notch out harsh resonances
- Further shape bandwidth
- Clean up artifacts

**Reverb (optional):**
- Short room reverb for "radio in a space"
- Subtle settings (decay 0.3-0.8s)
- Creates distance

**Noise/Static Layer:**
- Add realism with subtle noise
- Filter noise to same bandwidth
- Adjust level to taste

**Fruity Limiter:**
- Catch any peaks
- Further compress dynamics
- Mimics broadcast limiting

## Troubleshooting

### Problem: Vocals are unintelligible
**Fix:**
- Widen filter bandwidth (1-4 kHz range)
- Lower Squarize (30-40%)
- Increase Preserve (35-45%)

### Problem: Not enough "radio" character
**Fix:**
- Increase Filter Resonance (35-50%)
- Narrow filter bandwidth (2-3 kHz peak)
- Increase Impact (75-80%)

### Problem: Too harsh/painful
**Fix:**
- Lower Filter Resonance (20-30%)
- Reduce Squarize (30-40%)
- Use Parametric EQ after to notch harsh frequencies

### Problem: Sounds too modern/clean
**Fix:**
- Increase Squarize (50-60%)
- Favor Impact more in Relation
- Add noise/static layers
- Convert to mono

### Problem: Losing too much low-end
**Fix:**
- This is often desired for radio! But if not:
- Widen filter bandwidth (include 200-500 Hz)
- Use less extreme filtering
- Blend with clean signal (Mix 70-80%)

## Preset Variations

### "Radio Station Broadcast"
```
Squarize: 35%
Preserve: 40%
Impact: 60%
Filter: BP @ 2-5 kHz, Res 25%
Mix: 90%
Additional: Compression before Squeeze
```

### "Distressed Walkie-Talkie"
```
Squarize: 60%
Preserve: 20%
Impact: 80%
Filter: BP @ 1-2 kHz, Res 50%
Mix: 100%
Additional: Static noise layer, automation bursts
```

### "Old Telephone Call"
```
Squarize: 45%
Preserve: 30%
Impact: 70%
Filter: BP @ 300 Hz-3 kHz, Res 20%
Mix: 95%
Additional: Subtle 50/60 Hz hum
```

### "Portable Transistor Radio"
```
Squarize: 48%
Preserve: 28%
Impact: 72%
Filter: BP @ 2-4 kHz, Res 40%
Mix: 100%
Additional: Mono conversion, room reverb
```

## Final Pro Tips

1. **Bandwidth is key:** Filtering is more important than bit reduction for radio sound
2. **Add realism:** Layer noise, static, and hum for authenticity
3. **Automate for movement:** Static radio sounds are boring—add tuning/interference
4. **Convert to mono:** Most radios are mono—this adds authenticity
5. **Compress first:** Heavy compression before Squeeze mimics broadcast chain
6. **Reference real radios:** Listen to actual AM/FM broadcasts for accuracy
7. **Less resonance for clarity:** High resonance is cool but can hurt intelligibility
8. **Blend when appropriate:** Not all radio effects need 100% Mix

---

**Remember:** The goal is recognizable, characterful radio sound—not total destruction. Keep speech/music intelligible unless going for extreme degradation!
