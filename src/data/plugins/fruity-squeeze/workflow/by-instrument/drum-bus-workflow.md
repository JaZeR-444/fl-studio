# Drum Bus Processing

## Goal
Add cohesion, punch, and density to full drum mix using multiband compression.

---

## Step-by-Step Workflow

### 1. Route All Drums to Bus
- Create drum bus/submix channel
- Route kick, snare, hi-hats, toms, percussion to this bus
- Insert Fruity Squeeze on drum bus

### 2. Set Crossover Points

**Low/Mid Crossover: 150–250 Hz**
- **150–180 Hz**: Tighter, more controlled lows (good for heavy music)
- **200–250 Hz**: Fuller, warmer lows (good for organic drums)

**Mid/High Crossover: 3–5 kHz**
- **3–4 kHz**: More presence/attack emphasis
- **4–5 kHz**: More natural, less aggressive

**Recommended starting point:** 200 Hz / 4 kHz

### 3. Process Low Band (Kick/Low Toms)

**Settings:**
- **Threshold**: -15 to -18 dB
- **Ratio**: 4:1–6:1
- **Volume**: +1 to +2 dB

**Why:**
- Tightens kick and low toms
- Moderate compression preserves punch
- Too much = drums lose power

### 4. Process Mid Band (Snare Body/Tom Resonance)

**Settings:**
- **Threshold**: -12 to -15 dB
- **Ratio**: 5:1–7:1
- **Volume**: +2 to +3 dB

**Why:**
- Creates density and impact
- Glues drums together
- Mid-range contains most "meat" of drum sound

### 5. Process High Band (Cymbals/Hi-Hats/Snare Attack)

**Settings:**
- **Threshold**: -15 to -18 dB
- **Ratio**: 3:1–5:1
- **Volume**: 0 to +1 dB

**Why:**
- Controls cymbal peaks without dulling them
- Lighter compression preserves sparkle
- Snare crack lives here

### 6. Use Parallel Compression for Aggression

**Settings:**
- Set all ratios higher (8:1–10:1)
- Set all thresholds lower (-6 to -10 dB)
- **Dry/Wet**: 30–50%

**Why:**
- Preserves natural transients (dry signal)
- Adds density and loudness (wet signal)
- Classic "New York" drum sound

### 7. Adjust Input for Character
- **Input**: 0 to +2 dB
- Higher input adds harmonic grit
- Good for rock/metal/EDM

### 8. Set Output Level
- Match to bypass level
- Usually +1 to +3 dB louder after processing

### 9. Check Individual Elements
- Solo kick: Should be tight and punchy
- Solo snare: Should have body and crack
- Solo cymbals: Should be controlled but not dull

---

## Recommended Settings

### Natural Drum Glue

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 220 Hz |
| Mid/High Crossover | 4 kHz |
| Low Threshold | -16 dB |
| Low Ratio | 5:1 |
| Low Volume | +1 dB |
| Mid Threshold | -14 dB |
| Mid Ratio | 6:1 |
| Mid Volume | +2 dB |
| High Threshold | -16 dB |
| High Ratio | 4:1 |
| High Volume | +1 dB |
| Input Level | 0 dB |
| Output Level | +1 dB |
| Dry/Wet | 100% |

### Parallel Drum Crush

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 200 Hz |
| Mid/High Crossover | 3.5 kHz |
| Low Threshold | -8 dB |
| Low Ratio | 10:1 |
| Low Volume | +4 dB |
| Mid Threshold | -8 dB |
| Mid Ratio | 10:1 |
| Mid Volume | +4 dB |
| High Threshold | -8 dB |
| High Ratio | 8:1 |
| High Volume | +3 dB |
| Input Level | +1 dB |
| Output Level | 0 dB |
| Dry/Wet | 40% |

### Aggressive EDM/Trap Drums

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 180 Hz |
| Mid/High Crossover | 4.5 kHz |
| Low Threshold | -10 dB |
| Low Ratio | 8:1 |
| Low Volume | +3 dB |
| Mid Threshold | -10 dB |
| Mid Ratio | 10:1 |
| Mid Volume | +4 dB |
| High Threshold | -12 dB |
| High Ratio | 6:1 |
| High Volume | +2 dB |
| Input Level | +3 dB |
| Output Level | +2 dB |
| Dry/Wet | 100% |

### Vintage/Warm Drums

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 250 Hz |
| Mid/High Crossover | 3 kHz |
| Low Threshold | -18 dB |
| Low Ratio | 4:1 |
| Low Volume | +2 dB |
| Mid Threshold | -15 dB |
| Mid Ratio | 5:1 |
| Mid Volume | +2 dB |
| High Threshold | -18 dB |
| High Ratio | 3:1 |
| High Volume | 0 dB |
| Input Level | +2 dB |
| Output Level | +1 dB |
| Dry/Wet | 100% |

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Drums sound squashed | Reduce ratios; raise thresholds; use parallel (dry/wet) |
| Kick lacks punch | Lower low/mid crossover; reduce low compression |
| Snare sounds weak | Boost mid volume; increase mid ratio |
| Cymbals too harsh | Reduce high volume; raise high threshold |
| Mix sounds unnatural | Use dry/wet blend (60–80%) |
| Too much distortion | Reduce input gain; lower ratios |

---

## Genre-Specific Tips

### Rock/Pop
- Moderate compression (4:1–6:1)
- Standard crossovers (200 Hz, 4 kHz)
- Light input gain for warmth (+1 dB)

### Hip-Hop/Trap
- Heavy low compression (8:1+) for tight kicks
- Lower crossover (150–180 Hz)
- Moderate input gain (+2 dB)

### EDM/House
- Aggressive compression across all bands (8:1–10:1)
- Input gain +2 to +4 dB for character
- Often use parallel for maximum aggression

### Metal
- Heavy mid compression for density (8:1–10:1)
- Crossovers around 180 Hz / 4.5 kHz
- Input gain +1 to +2 dB for grit

### Jazz/Acoustic
- Light compression (2:1–4:1)
- Higher thresholds (-20 dB)
- Minimal input gain (0 dB)

---

## Advanced Techniques

### Serial + Parallel Combo
1. Insert Fruity Squeeze in serial mode (100% wet)
   - Light-to-moderate settings for glue
2. Send to parallel bus with second Fruity Squeeze
   - Aggressive settings, blend to taste

### Dynamic Crossover Automation
- Automate low/mid crossover during song
- Lower during heavy sections (tighter kick)
- Higher during sparse sections (fuller drums)

### Multiband Sidechain
- Use Fruity Peak Controller to sidechain mid/high bands from kick
- Creates pumping effect on snare/cymbals when kick hits
- Advanced rhythmic effect

---

## Integration with Other Processing

### Recommended Signal Chain
1. **Individual drum tracks**: EQ, compression
2. **Drum bus**: Fruity Squeeze (glue)
3. **Drum bus**: EQ (final tone shaping)
4. **Drum bus**: Saturation/exciter (optional)
5. **Drum bus**: Reverb send (room glue)

---

## Workflow Checklist

- ✅ Drums glued together cohesively
- ✅ Kick punchy and controlled
- ✅ Snare cuts through with body
- ✅ Cymbals controlled but not dull
- ✅ Transients preserved (if not using extreme settings)
- ✅ Drums sit well in full mix
- ✅ A/B compared with bypass
