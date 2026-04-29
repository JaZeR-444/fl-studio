# Drum Bus Glue with Fruity Squeeze

## Objective
Make drum elements (kick, snare, hi-hats, percussion) feel cohesive and punchy while maintaining individual character.

## When to Use This Workflow
- Drums from different sources sound disconnected
- Hi-hats overpower snare or vice versa
- Need to control drum dynamics without affecting individual processing
- Creating space for vocals and melodic elements

## Step-by-Step Process

### 1. Setup Drum Bus
Route all drum elements to a dedicated drum bus. Insert Fruity Squeeze after individual drum processing but before bus effects (saturation, reverb).

### 2. Set Drum-Optimized Crossovers

**Standard Drum Split**
- **Low/Mid**: 150-200 Hz (separate kick/sub from snare body)
- **Mid/High**: 3-5 kHz (separate snare crack from hi-hats)

**Genre-Specific Crossovers**

| Genre | Low/Mid | Mid/High | Reasoning |
|-------|---------|----------|-----------|
| Moody Trap | 120 Hz | 3 kHz | Extended sub, darker overall |
| Upbeat | 180 Hz | 4.5 kHz | Balanced, energetic |
| Boom-Bap | 220 Hz | 4 kHz | Classic hip-hop split |
| Electronic | 100 Hz | 5 kHz | Deep sub, bright highs |

### 3. Configure Low Band (Kick/Sub Control)

**Purpose**: Tighten kick and control low-end punch

**Moody/Dark Trap Settings**
- **Threshold**: -15 dB
- **Ratio**: 3:1 to 4:1
- **Attack**: 5-10ms (preserve kick punch)
- **Release**: 100-120ms (follow kick decay)
- **Gain**: +1 dB

**Upbeat/Energetic Settings**
- **Threshold**: -12 dB
- **Ratio**: 2.5:1 to 3:1
- **Attack**: 10-15ms (more transient)
- **Release**: 120-140ms
- **Gain**: +1.5 dB

**Boom-Bap Settings**
- **Threshold**: -18 dB
- **Ratio**: 2:1 to 2.5:1
- **Attack**: 15-20ms (preserve vintage feel)
- **Release**: 140-160ms
- **Gain**: +0.5 dB

### 4. Configure Mid Band (Snare/Tom Control)

**Purpose**: Control snare body and overall drum presence

**Moody/Dark Trap Settings**
- **Threshold**: -10 dB
- **Ratio**: 2:1
- **Attack**: 5ms (catch snare transient)
- **Release**: 70-90ms
- **Gain**: +0.5 dB

**Upbeat/Energetic Settings**
- **Threshold**: -8 dB
- **Ratio**: 2.5:1 to 3:1
- **Attack**: 3-5ms (punchy)
- **Release**: 80-100ms
- **Gain**: +1 dB

**Boom-Bap Settings**
- **Threshold**: -12 dB
- **Ratio**: 1.5:1 to 2:1
- **Attack**: 10ms (preserve vintage snap)
- **Release**: 100-120ms
- **Gain**: +0.5 dB

### 5. Configure High Band (Hi-Hat/Cymbal Control)

**Purpose**: Control bright transients without dulling

**Moody/Dark Trap Settings**
- **Threshold**: -12 dB
- **Ratio**: 1.5:1
- **Attack**: 1-2ms (catch fast transients)
- **Release**: 50-60ms
- **Gain**: -0.5 dB (darker aesthetic)

**Upbeat/Energetic Settings**
- **Threshold**: -10 dB
- **Ratio**: 2:1
- **Attack**: 1ms
- **Release**: 60-70ms
- **Gain**: +0.5 dB (bright, present)

**Boom-Bap Settings**
- **Threshold**: -15 dB
- **Ratio**: 1.2:1 to 1.5:1
- **Attack**: 2-3ms
- **Release**: 70-80ms
- **Gain**: 0 dB (natural)

### 6. Genre-Specific Complete Settings

**Moody/Dark Trap Drums**
```
Low: -15 dB, 3.5:1, 8ms, 110ms, +1 dB
Mid: -10 dB, 2:1, 5ms, 80ms, +0.5 dB
High: -12 dB, 1.5:1, 1ms, 55ms, -0.5 dB
Crossovers: 120 Hz / 3 kHz
```
**Character**: Tight, controlled, dark

**Upbeat/Energetic Drums**
```
Low: -12 dB, 3:1, 12ms, 130ms, +1.5 dB
Mid: -8 dB, 2.5:1, 4ms, 90ms, +1 dB
High: -10 dB, 2:1, 1ms, 65ms, +0.5 dB
Crossovers: 180 Hz / 4.5 kHz
```
**Character**: Punchy, forward, bright

**Melodic/R&B Drums**
```
Low: -18 dB, 2:1, 15ms, 140ms, +0.5 dB
Mid: -12 dB, 1.5:1, 8ms, 100ms, 0 dB
High: -15 dB, 1.5:1, 2ms, 70ms, 0 dB
Crossovers: 200 Hz / 5 kHz
```
**Character**: Smooth, natural, polished

**Boom-Bap Drums**
```
Low: -18 dB, 2.5:1, 18ms, 150ms, +0.5 dB
Mid: -12 dB, 2:1, 10ms, 110ms, +0.5 dB
High: -15 dB, 1.3:1, 3ms, 75ms, 0 dB
Crossovers: 220 Hz / 4 kHz
```
**Character**: Vintage, warm, punchy

**Electronic/Experimental Drums**
```
Low: -10 dB, 5:1, 3ms, 90ms, +2 dB
Mid: -6 dB, 4:1, 2ms, 70ms, +1.5 dB
High: -8 dB, 3:1, 0.5ms, 50ms, +1 dB
Crossovers: 100 Hz / 5 kHz
```
**Character**: Aggressive, pumping, energetic

### 7. Critical Listening Checklist

- **Kick Punch**: Should hit hard without overwhelming
- **Snare Snap**: Clear and present, not buried or harsh
- **Hi-Hat Control**: Consistent level, not splashy or dull
- **Overall Cohesion**: Drums feel like one unit
- **Dynamics**: Still breathes, not brick-walled
- **Separation**: Individual elements still identifiable

### 8. Common Issues & Solutions

**Kick Sounds Weak**
- Lower low-band threshold to -18 dB
- Increase low-band gain to +2 dB
- Faster attack (5ms) for more punch

**Snare Gets Lost**
- Increase mid-band gain (+1 to +2 dB)
- Lower mid-band threshold
- Adjust crossovers to isolate snare fundamental (200-300 Hz)

**Hi-Hats Too Loud/Harsh**
- Lower high-band gain (-1 dB)
- Increase high-band ratio to 2.5:1
- Lower high-band threshold for more control

**Drums Sound Squashed**
- Increase attack times across all bands
- Reduce ratios by 0.5
- Raise thresholds to compress less

**Muddy Low-End**
- Lower low/mid crossover to 120-150 Hz
- Increase low-band ratio to 4:1+
- Reduce low-band gain

### 9. Advanced Techniques

**Parallel Drum Compression**
Duplicate drum bus, compress heavily with Fruity Squeeze, blend at 30-50%.

**Sidechain to Kick**
Sidechain low and mid bands to kick for rhythmic pumping.

**Dynamic Processing Per Section**
Automate threshold/ratio for different song sections (verse light, chorus heavy).

**Frequency-Specific Saturation**
Add saturation before Fruity Squeeze, use compression to control harmonics.

## Integration with Drum Chain

**Typical Drum Bus Chain**
1. EQ (subtractive)
2. **Fruity Squeeze** ← You are here
3. Saturation/distortion
4. Transient shaper
5. Reverb/room ambience

## Quick Start by Genre

Pick your genre, apply these settings, then adjust to taste:

**Trap**: Tight low-end, controlled highs, forward mids
**Boom-Bap**: Natural dynamics, warm tone, vintage feel
**Electronic**: Heavy compression, aggressive, pumping
**R&B**: Smooth, polished, transparent
**Upbeat**: Energetic, punchy, bright

## Pro Tips for Hip-Hop Drums

1. **Leave Headroom**: Aim for 3-5 dB gain reduction max on any band
2. **Solo Bands**: Understand what each frequency range contributes
3. **A/B Constantly**: Compare bypassed vs. processed frequently
4. **Check with Vocals**: Ensure drums don't overpower or get buried
5. **Reference Tracks**: Compare your drum balance to pro mixes
6. **Mono Check**: Verify low-end control translates in mono
7. **Save Presets**: Build library of go-to settings per genre
8. **Automate Mix**: Reduce compression intensity during quiet sections
