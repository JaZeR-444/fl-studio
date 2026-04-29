# 8-Bit Sound Creation

## Goal
Transform modern audio into authentic retro video game sounds with extreme bit reduction and digital artifacts.

## When to Use
- Chiptune and 8-bit music production
- Retro video game sound effects
- Nostalgic/vintage electronic music
- Creative lo-fi textures
- Glitch and experimental sound design

## The Setup

### Core 8-Bit Settings
```
Squarize: 85-95%
Preserve: 15-25%
Impact: 75-85%
Relation: Favor Impact (75% right)
Filter Frequency: 6-8 kHz (Post-LP)
Filter Resonance: 5-10%
Mix: 100%
Gain: +4 to +6 dB
```

## Understanding 8-Bit Sound

### What Makes It "8-Bit"?
1. **Severe bit depth reduction:** Limited resolution creates stepped waveforms
2. **Heavy aliasing:** Digital artifacts that sound "wrong" but nostalgic
3. **Loss of dynamic range:** Extreme compression of dynamics
4. **Harmonic distortion:** Non-musical harmonics from quantization
5. **Limited frequency response:** Missing high and low frequencies

### Fruity Squeeze's Role
- **Squarize:** Reduces bit depth (mimics old ADCs)
- **Puncher:** Adds sample-based distortion (mimics cheap DACs)
- **Filter:** Removes frequencies beyond vintage system capabilities

## Step-by-Step Process

### Step 1: Extreme Bit Reduction
1. Set Squarize to 85%
2. Play your audio
3. **Listen for:** Severe "stepping" and digital artifacts
4. **Adjust:** 80% (less extreme) to 95% (most extreme)

**What you're hearing:** The bit depth is so low that the waveform is "quantized" into discrete steps, like early video game hardware.

### Step 2: Aggressive Puncher Settings
1. Set Preserve to 20%
2. Set Impact to 80%
3. Set Relation to favor Impact
4. **Result:** Most samples are replaced with heavily distorted versions

**Why this works:** Mimics the aggressive sample replacement of old sound chips.

### Step 3: Frequency Limitation
1. Enable Post-LP filtering
2. Set Frequency to 6-8 kHz
3. Keep Resonance low (5-10%)
4. **Purpose:** Old systems couldn't reproduce high frequencies

**Historical accuracy:** NES/Game Boy maxed out around 5-8 kHz

### Step 4: Full Wet Mix
- Set Mix to 100%
- This is a destructive effect—we want full replacement
- No parallel processing for authentic 8-bit

### Step 5: Gain Compensation
- Increase Gain by +4 to +6 dB
- Extreme bit reduction severely reduces perceived loudness
- Match to original level for fair comparison

## Source Material Considerations

### Best Sources for 8-Bit Conversion

#### Synth Leads/Arps
- **Settings:** Squarize 90%, Impact 80%
- Simple waveforms (square/saw) convert best
- Complex wavetables create interesting artifacts

#### Drum Loops
- **Settings:** Squarize 85%, Preserve 25% (keep some transients)
- Kicks become punchy, lo-fi thumps
- Snares get crunchy, distorted snap

#### Chord Stabs
- **Settings:** Squarize 88%, Filter @ 7 kHz
- Rich chords create complex aliasing (cool textures)

#### Bass Lines
- **Settings:** Squarize 80%, Post-HP @ 100 Hz (protect lows)
- Less extreme to maintain low-end presence

### Problematic Sources
- **Complex vocals:** Usually sound unintelligible (can be a feature!)
- **Acoustic instruments:** Lose too much character (unless that's the goal)
- **Wide stereo content:** Collapse to mono for authenticity

## System-Specific Emulations

### NES (Nintendo Entertainment System)
```
Squarize: 85%
Preserve: 20%
Impact: 80%
Filter: Post-LP @ 8 kHz, Res 8%
Character: Crunchy, bright, limited range
```
**Pro Tip:** Add subtle PWM modulation to synths before Squeeze

### Game Boy (Original)
```
Squarize: 90%
Preserve: 15%
Impact: 85%
Filter: Post-LP @ 6 kHz, Res 5%
Character: Dark, crunchy, severe limitations
```
**Pro Tip:** Lower filter cutoff for authentic muddiness

### Sega Genesis/Mega Drive
```
Squarize: 70%
Preserve: 30%
Impact: 70%
Filter: Post-LP @ 10 kHz, Res 10%
Character: Less crunchy, more hi-fi than NES/GB
```
**Pro Tip:** Less extreme settings for "16-bit" sound

### Commodore 64 (SID Chip)
```
Squarize: 75%
Preserve: 25%
Impact: 75%
Filter: Post-LP @ 9 kHz, Res 25%
Character: Distinctive resonant filtering
```
**Pro Tip:** Higher resonance for classic SID character

### Atari 2600
```
Squarize: 95%
Preserve: 10%
Impact: 90%
Filter: Post-LP @ 5 kHz, Res 5%
Character: Most extreme, very lo-fi
```
**Pro Tip:** Push Squarize to maximum for authentic Atari harshness

## Genre-Specific 8-Bit Styles

### Chiptune/8-Bit Music
- Full destruction (Squarize 90%+)
- Monophonic melodies for authenticity
- Simple, punchy drums
- Arpeggiated chords (like hardware limitations)

### Lo-Fi Hip-Hop (8-Bit Influenced)
- Moderate destruction (Squarize 60-75%)
- Higher Preserve (35-45%) to keep some fidelity
- Apply to samples, not full mix
- Blend with clean elements

### Glitch/Experimental
- Maximum destruction (Squarize 95%)
- Automate Preserve/Impact for evolving textures
- Use on unexpected sources (vocals, acoustics)
- Layer with clean signals for contrast

### Vaporwave/Future Funk
- Medium destruction (Squarize 50-70%)
- Apply to specific elements (not full mix)
- Blend with reverb/delay for dreamlike quality
- Use for nostalgic callbacks

## Advanced 8-Bit Techniques

### Dynamic 8-Bit Conversion
Automate Squarize for evolving degradation:
- **Intro:** Squarize 0% (clean)
- **Build:** Squarize 20% → 80% (progressive crush)
- **Drop:** Squarize 90% (full 8-bit)
- **Outro:** Squarize 90% → 0% (return to clarity)

### Frequency-Specific 8-Bit
Use Patcher to split frequency bands:
- **Lows (< 200 Hz):** Squarize 50% (protect bass)
- **Mids (200 Hz - 2 kHz):** Squarize 90% (full crush)
- **Highs (> 2 kHz):** Filtered out completely
**Result:** Punchy lows, crunchy mids, no highs (like real hardware)

### Layered 8-Bit Processing
Layer multiple instances with different extremes:
- **Layer 1:** Squarize 95%, Mix 60%
- **Layer 2:** Squarize 70%, Mix 40%
**Result:** Complex, stratified digital artifacts

### Rhythmic 8-Bit Glitching
Use LFO to modulate Squarize rhythmically:
- Assign LFO to Squarize (0% to 90%)
- Set LFO to 1/16 note rhythm
- Creates rhythmic digital glitching
**Perfect for:** Breakdowns and build-ups

## Enhancing 8-Bit Sounds

### Pre-Processing (Before Squeeze)
- **Simplify waveform:** Use simple synth shapes (square, saw)
- **Monophonic melodies:** More authentic to old hardware
- **Transient shaping:** Enhance attack for punchier 8-bit

### Post-Processing (After Squeeze)
- **Additional filtering:** Use Parametric EQ 2 to shape
- **Stereo widening:** Subtle widening (old systems were mono)
- **Reverb:** Short, lo-fi reverb for space
- **Bit depth reduction:** Additional bit crusher in series for more extreme effect

### Parallel Blending (Optional)
For "modern 8-bit" hybrid sounds:
- Main chain: Full 8-bit settings (Mix 100%)
- Parallel chain: Clean signal
- Blend: 80% 8-bit / 20% clean
**Result:** Maintains some fidelity while preserving character

## Common Issues & Fixes

### Problem: Sound is too harsh/painful
**Fix:**
- Lower Filter cutoff to 6 kHz or below
- Reduce Filter Resonance to 0-5%
- Lower Squarize slightly (85% instead of 95%)

### Problem: Losing all low-end punch
**Fix:**
- Use Post-HP filtering to protect subs
- Lower Squarize on bass elements (70-80%)
- Consider multiband approach (protect lows)

### Problem: Too much aliasing noise
**Fix:**
- Lower Filter cutoff (5-7 kHz)
- Reduce Impact slightly (75% instead of 85%)
- Use Parametric EQ after to notch out harsh frequencies

### Problem: Effect sounds too modern/clean
**Fix:**
- Increase Squarize to 90-95%
- Lower Preserve to 10-15%
- Favor Impact more aggressively in Relation
- Lower Filter cutoff to 6 kHz or below

### Problem: Unintelligible audio
**Fix:**
- This is often desired for 8-bit! But if not:
- Increase Preserve to 30-40%
- Lower Squarize to 75-85%
- Increase Filter cutoff to 8-10 kHz

## Integration with Other Plugins

### Fruity Chorus (Before Squeeze)
- Adds analog-style modulation
- Thickens sound before crushing
- Use subtle settings

### Fruity WaveShaper (After Squeeze)
- Additional harmonic distortion
- Use for even more aggressive crushing
- Stack effects for extreme results

### Parametric EQ 2 (After Squeeze)
- Notch out harsh aliasing frequencies
- Boost/cut for character
- Shape final tone

### Gross Beat (After Squeeze)
- Time manipulation of 8-bit sounds
- Glitch effects on crushed audio
- Perfect for experimental production

## Export Considerations

### For Chiptune Production
- Export at 44.1 kHz (standard for most DAWs)
- Consider downsampling to 22.05 kHz for more authentic aliasing
- Add subtle dithering if exporting at 16-bit

### For Modern Production
- Keep at project sample rate (48 kHz typical)
- Export with headroom (-3 dB to -6 dB peak)
- Maintain 24-bit or 32-bit float for further processing

## Authenticity vs. Musicality

### Historically Accurate 8-Bit
- Extreme settings (Squarize 90%+)
- Low filter cutoff (5-7 kHz)
- Mono output
- No reverb/delay (or very short)
- Limited dynamic range

### Modern "8-Bit Inspired"
- Moderate settings (Squarize 60-80%)
- Higher filter cutoff (8-12 kHz)
- Stereo width (subtle)
- Modern effects (reverb, delay)
- More dynamic range

**Choose based on your goal:** Authentic chiptune or modern lo-fi aesthetic?

## Final Pro Tips

1. **Reference real hardware:** Listen to actual NES/Game Boy music for accuracy
2. **Less is more (sometimes):** Squarize at 80% can sound better than 95%
3. **Layer with clean:** Blend 8-bit with clean elements for hybrid sounds
4. **Automate for movement:** Static 8-bit can get boring—automate parameters
5. **Embrace artifacts:** Aliasing and distortion are features, not bugs
6. **Save presets:** Create system-specific presets for quick recall
7. **Experiment with sources:** Try unexpected inputs for unique textures

---

**Remember:** Authentic 8-bit is about limitation and character. Embrace the harshness, aliasing, and digital artifacts—that's what makes it nostalgic!
