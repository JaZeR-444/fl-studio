# Bass Guitar/Synth Bass Processing

## Goal
Achieve thick, sustained bass with harmonic richness and consistent low-end.

---

## Step-by-Step Workflow

### 1. Insert Fruity Squeeze on Bass Track
- Works for bass guitar, synth bass, 808s
- Place after distortion/saturation but before spatial effects

### 2. Set Crossover Points

**Low/Mid Crossover: 100–150 Hz**
- **100–120 Hz**: Tighter, more isolated sub-bass
- **130–150 Hz**: Fuller, warmer bass with harmonics included

**Mid/High Crossover: 1.5–2.5 kHz**
- **1.5–2 kHz**: Brighter, more presence
- **2–2.5 kHz**: Warmer, less aggressive

### 3. Process Low Band (Fundamental/Sub)

**Settings:**
- **Threshold**: -10 to -12 dB
- **Ratio**: 6:1–10:1
- **Volume**: +2 to +4 dB

**Why:**
- Creates tight, consistent low-end foundation
- Prevents bass from overpowering mix
- Sustains notes evenly

### 4. Process Mid Band (Harmonics/Presence)

**Settings:**
- **Threshold**: -10 to -12 dB
- **Ratio**: 6:1–10:1
- **Volume**: +2 to +3 dB

**Why:**
- Most audible "bass tone" lives here
- Heavy compression adds harmonic richness
- Waveshaping creates grit and definition

### 5. Process High Band (Brightness/Attack)

**Settings:**
- **Threshold**: -∞ (bypass) or -18 dB
- **Ratio**: 2:1–4:1 (if not bypassed)
- **Volume**: 0 dB or -1 dB

**Why:**
- Bass typically doesn't need high compression
- Bypass preserves natural pick/finger attack
- Light compression if bass is very bright

### 6. Drive Input for Grit

**Settings:**
- **Input Level**: +1 to +3 dB

**Why:**
- Adds harmonic distortion for "modern" bass tone
- Creates warmth and saturation
- +2 dB is sweet spot for most basses

### 7. Adjust Output
- Match to input level
- Usually +1 to +2 dB after processing

### 8. Check in Mix Context
- Solo bass with kick drum
- Ensure bass doesn't mask kick or vice versa
- Adjust crossovers if needed

---

## Recommended Settings

### Standard Bass Guitar

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 130 Hz |
| Mid/High Crossover | 2 kHz |
| Low Threshold | -11 dB |
| Low Ratio | 7:1 |
| Low Volume | +3 dB |
| Mid Threshold | -11 dB |
| Mid Ratio | 8:1 |
| Mid Volume | +2 dB |
| High Threshold | -∞ (bypass) |
| High Ratio | 1:1 |
| High Volume | 0 dB |
| Input Level | +2 dB |
| Output Level | +1 dB |

### Synth Bass (Modern/EDM)

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 120 Hz |
| Mid/High Crossover | 2.5 kHz |
| Low Threshold | -10 dB |
| Low Ratio | 8:1 |
| Low Volume | +4 dB |
| Mid Threshold | -10 dB |
| Mid Ratio | 10:1 |
| Mid Volume | +3 dB |
| High Threshold | -18 dB |
| High Ratio | 3:1 |
| High Volume | +1 dB |
| Input Level | +3 dB |
| Output Level | +1 dB |

### 808/Sub-Bass

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 80 Hz |
| Mid/High Crossover | 150 Hz |
| Low Threshold | -8 dB |
| Low Ratio | ∞:1 (limiter) |
| Low Volume | +4 dB |
| Mid Threshold | -12 dB |
| Mid Ratio | 6:1 |
| Mid Volume | +2 dB |
| High Threshold | -∞ (bypass) |
| High Ratio | 1:1 |
| High Volume | 0 dB |
| Input Level | +1 dB |
| Output Level | +1 dB |

### Warm/Vintage Bass

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 150 Hz |
| Mid/High Crossover | 2 kHz |
| Low Threshold | -12 dB |
| Low Ratio | 5:1 |
| Low Volume | +2 dB |
| Mid Threshold | -12 dB |
| Mid Ratio | 6:1 |
| Mid Volume | +2 dB |
| High Threshold | -∞ (bypass) |
| High Ratio | 1:1 |
| High Volume | 0 dB |
| Input Level | +2 dB |
| Output Level | +1 dB |

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Bass too boomy | Lower low/mid crossover to 100–120 Hz; increase low ratio |
| Lacks definition | Boost mid volume; increase mid ratio |
| Too bright/harsh | Lower high volume or bypass high band |
| Sounds thin | Raise low/mid crossover to 150 Hz; boost low volume |
| Inconsistent notes | Lower thresholds; increase ratios |
| Too distorted | Reduce input gain; lower ratios |

---

## Integration with Kick Drum

### Kick/Bass Frequency Management

**Option 1: Separate Ranges**
- **Kick**: Focus 60–80 Hz (sub-thump)
- **Bass**: Focus 100–200 Hz (body/warmth)
- Set bass low/mid crossover at 100–120 Hz
- Minimal low-end overlap

**Option 2: Shared Low-End**
- **Kick + Bass**: Both occupy 60–100 Hz
- Use sidechain compression (separate plugin) to duck bass when kick hits
- Fruity Squeeze controls bass consistency between kicks

---

## Genre-Specific Tips

### Hip-Hop/Trap
- Heavy low limiting (∞:1) for 808s
- Lower crossover (80 Hz) for sub isolation
- Moderate input gain (+2 dB)

### Rock/Metal
- Balanced low/mid compression (6:1–8:1)
- Crossover around 130–150 Hz
- Input gain +1 to +2 dB for warmth

### EDM/House
- Aggressive compression (8:1–10:1)
- Lower crossover (100–120 Hz) for punch
- Higher input gain (+3 dB) for grit

### Funk/R&B
- Moderate compression (5:1–7:1)
- Higher crossover (140–160 Hz) for fullness
- Light input gain (+1 dB) for cleaner tone

### Jazz/Acoustic
- Light compression (4:1–6:1)
- Higher crossover (150 Hz+) for natural warmth
- Minimal input gain (0 to +1 dB)

---

## Advanced Techniques

### Parallel Bass Processing
1. Duplicate bass track
2. Process one with aggressive Fruity Squeeze (10:1 ratios, +4 dB input)
3. Leave other clean or lightly compressed
4. Blend for controlled aggression

### Multiband Saturation
- Use input gain to drive harmonic distortion
- Mid band creates most audible harmonics
- Experiment with +2 to +5 dB input for character

### Dynamic Crossover Automation
- Automate low/mid crossover for different sections
- Lower during verses (tighter bass)
- Higher during chorus (fuller bass)

---

## Workflow Checklist

- ✅ Low-end tight and controlled
- ✅ Note sustain even across range
- ✅ Harmonics audible on small speakers
- ✅ Doesn't mask kick drum
- ✅ Sits well in mix (not overpowering)
- ✅ Minimal distortion (unless intentional)
