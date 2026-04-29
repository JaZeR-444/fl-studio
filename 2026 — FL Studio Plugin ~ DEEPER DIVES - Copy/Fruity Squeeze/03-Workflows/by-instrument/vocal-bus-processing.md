# Vocal Bus Processing with Fruity Squeeze

## Objective
Control vocal dynamics across different frequency ranges for clarity, presence, and professional polish.

## When to Use This Workflow
- Inconsistent vocal dynamics across register
- Harsh sibilance or plosives
- Vocals getting lost in busy hip-hop mixes
- Need to control multiple vocal layers together

## Step-by-Step Process

### 1. Setup Vocal Bus
Route all lead vocals (main, doubles, ad-libs) to a dedicated vocal bus. Insert Fruity Squeeze after basic EQ and before reverb/delay sends.

### 2. Set Vocal-Optimized Crossovers

**Standard Vocal Split**
- **Low/Mid**: 200-250 Hz (separate body from warmth)
- **Mid/High**: 4-6 kHz (separate presence from air/sibilance)

**Genre-Specific Adjustments**
- **Moody/Dark**: 180 Hz / 4 kHz (warmer, less bright)
- **Upbeat**: 220 Hz / 5.5 kHz (balanced, energetic)
- **Melodic/R&B**: 200 Hz / 6 kHz (smooth, silky)
- **Aggressive Rap**: 250 Hz / 4.5 kHz (forward, punchy)

### 3. Configure Low Band (Body Control)

**Purpose**: Control low-end muddiness and proximity effect

**Settings**
- **Threshold**: -20 to -24 dB
- **Ratio**: 1.5:1 to 2:1 (gentle)
- **Attack**: 20-30ms (preserve natural warmth)
- **Release**: 120-150ms (smooth, natural)
- **Gain**: -0.5 to 0 dB

**Why These Settings**
- Gentle ratio preserves natural body
- Slower attack maintains warmth
- Higher threshold compresses only excessive low-end

### 4. Configure Mid Band (Presence Control)

**Purpose**: Main vocal presence and consistency

**Settings**
- **Threshold**: -12 to -18 dB
- **Ratio**: 2:1 to 3:1 (moderate)
- **Attack**: 10-15ms (quick enough for control)
- **Release**: 80-100ms (follows vocal phrases)
- **Gain**: +0.5 to +1.5 dB (bring forward in mix)

**Why These Settings**
- Moderate ratio for consistent presence
- Medium attack preserves consonant clarity
- Medium release follows natural vocal dynamics

### 5. Configure High Band (De-Essing/Air Control)

**Purpose**: Control sibilance and harshness

**Settings**
- **Threshold**: -15 to -20 dB
- **Ratio**: 2:1 to 3:1 (moderate to aggressive)
- **Attack**: 1-3ms (catch sibilant transients)
- **Release**: 50-70ms (quick recovery)
- **Gain**: -0.5 to -1 dB (tame brightness)

**Why These Settings**
- Fast attack catches sibilance
- Quick release avoids dulling voice
- Lower gain reduces harshness

### 6. Genre-Specific Vocal Settings

**Moody/Dark Trap Vocals**
- **Low**: Ratio 2:1, Threshold -22 dB, Gain 0 dB
- **Mid**: Ratio 2.5:1, Threshold -15 dB, Gain +1 dB
- **High**: Ratio 2.5:1, Threshold -18 dB, Gain -1 dB
- **Goal**: Warm, intimate, controlled

**Upbeat/Energetic Rap**
- **Low**: Ratio 1.5:1, Threshold -24 dB, Gain -0.5 dB
- **Mid**: Ratio 3:1, Threshold -12 dB, Gain +1.5 dB
- **High**: Ratio 2:1, Threshold -15 dB, Gain 0 dB
- **Goal**: Forward, punchy, clear

**Melodic/Sung Vocals (R&B)**
- **Low**: Ratio 1.5:1, Threshold -24 dB, Gain 0 dB
- **Mid**: Ratio 2:1, Threshold -18 dB, Gain +0.5 dB
- **High**: Ratio 3:1, Threshold -16 dB, Gain -0.5 dB
- **Goal**: Smooth, polished, silky

**Aggressive/Shouted Vocals**
- **Low**: Ratio 2.5:1, Threshold -20 dB, Gain -1 dB
- **Mid**: Ratio 3.5:1, Threshold -10 dB, Gain +2 dB
- **High**: Ratio 3:1, Threshold -12 dB, Gain -1 dB
- **Goal**: Controlled aggression, clarity

### 7. Critical Listening Checks

- **Sibilance**: "S" and "T" sounds should be controlled but not lispy
- **Body**: Low-end should feel warm, not boomy or thin
- **Presence**: Vocals should sit on top of beat consistently
- **Intelligibility**: Every word should be clear
- **Naturalness**: Shouldn't sound obviously compressed

### 8. Common Adjustments

**Vocals Sound Thin**
- Increase low-band gain (+1 to +2 dB)
- Raise low/mid crossover to 250-300 Hz
- Reduce low-band ratio to 1.2:1

**Vocals Sound Muddy**
- Reduce low-band gain (-1 dB)
- Lower low/mid crossover to 180 Hz
- Increase low-band ratio to 2.5:1

**Harsh Sibilance**
- Lower high-band threshold to -18 dB
- Increase high-band ratio to 4:1
- Reduce high-band gain to -1.5 dB

**Vocals Getting Lost**
- Increase mid-band gain (+2 dB)
- Lower mid-band threshold to -15 dB
- Adjust mid/high crossover to isolate vocal sweet spot

**Over-Compressed Sound**
- Increase all attack times
- Reduce ratios across all bands
- Raise thresholds to compress less

## Advanced Techniques

### Multiband Sidechain De-Essing
Route high band sidechain to instrumental, ducking sibilance when beat is busy.

### Dynamic Crossover Automation
Automate crossover points for different vocal sections (verse vs. hook).

### Parallel Multiband Processing
Set mix to 60-80% and blend with dry vocal for transparent control.

### Genre-Switching Presets
Save presets for different vocal styles and switch between takes.

## Integration with Vocal Chain

**Typical Vocal Chain Order**
1. Subtractive EQ (remove mud)
2. Standard compressor (overall dynamics)
3. **Fruity Squeeze** ← You are here (frequency-specific control)
4. De-esser (if more sibilance control needed)
5. Additive EQ (presence boost)
6. Saturation/exciter
7. Reverb/delay sends

## Quick Reference by Vocal Type

| Vocal Type | Low Ratio | Mid Ratio | High Ratio | Mid Gain |
|------------|-----------|-----------|------------|----------|
| Moody/Intimate | 2:1 | 2.5:1 | 2.5:1 | +1 dB |
| Energetic Rap | 1.5:1 | 3:1 | 2:1 | +1.5 dB |
| Melodic/Sung | 1.5:1 | 2:1 | 3:1 | +0.5 dB |
| Aggressive | 2.5:1 | 3.5:1 | 3:1 | +2 dB |

## Pro Tips

1. **Solo Each Band**: Understand what frequencies you're affecting
2. **A/B Frequently**: Compare against bypassed signal often
3. **Check Against Beat**: Always listen in context with instrumental
4. **Automate for Sections**: Different settings for verse vs. chorus
5. **Monitor Gain Reduction**: Aim for 3-6 dB reduction on mid band max
