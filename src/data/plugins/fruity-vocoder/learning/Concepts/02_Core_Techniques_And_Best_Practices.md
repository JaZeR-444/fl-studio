# Fruity Vocoder: Core Techniques and Best Practices

## Essential Techniques

### 1. Carrier Selection Strategy

The carrier determines the **timbre** and **harmonic content** of the vocoded output. [SRC: IL-MAN]

**Ideal Carriers:**

| Carrier Type | Best For | Why It Works | Hip-Hop Application |
|--------------|----------|--------------|---------------------|
| **Sawtooth wave** | Clear speech | Full harmonic series | Talking synth hooks |
| **Square wave** | Punchy robot | Strong odd harmonics | Trap ad-libs |
| **White noise** | Sibilance clarity | Full spectrum | "S" and "T" recovery |
| **Rich pad** | Musical vocoding | Complex harmonics | Ambient textures |
| **Vocal harmony** | Vocal transformation | Same source type | Background doubles |

**Pro Tip:** Mix 10-20% white noise with your carrier for clearer consonants. [SRC: IL-MAN]

### 2. Modulator Optimization

The modulator provides the **spectral shape**. Garbage in = garbage out.

**Pre-Processing Checklist:**

- [ ] **Compression:** Even out dynamics for consistent vocoding [SRC: IL-MAN]
- [ ] **EQ:** Remove sub-bass rumble below 80Hz (not vocoded well anyway)
- [ ] **De-essing:** Control sibilance before vocoder (prevents harsh artifacts)
- [ ] **Gate:** Remove room tone/breath noise
- [ ] **Level:** Aim for -12dB to -6dB on vocoder's L channel

### 3. Band Count Selection

| Band Count | CPU Load | Intelligibility | Best For |
|------------|----------|-----------------|----------|
| 4-8 | Low | Poor | Special effects, drums |
| 16 | Medium | Good | General purpose, hip-hop hooks |
| 32-64 | High | Excellent | Clear speech, R&B vocals |
| 128 | Very High | Maximum | Critical speech, experimental |

**Hip-Hop Sweet Spot:** 16-32 bands for balance of quality and CPU efficiency. [UNVERIFIED: Test 16 vs 32 bands on your system]

### 4. Attack/Release Sculpting

These control how quickly the vocoder responds to modulator changes.

| Attack | Decay | Character | Application |
|--------|-------|-----------|-------------|
| Fast | Fast | Tight, gated | Staccato rap, rhythmic |
| Fast | Slow | Punchy, sustained | Trap, modern hip-hop |
| Slow | Fast | Smooth, percussive | Lo-fi, jazzy |
| Slow | Slow | Lush, ambient | R&B, psychedelic |

**Rap Vocals:** Fast attack (catches transients), medium decay (maintains rhythm)
**R&B Ballads:** Slow attack (softens edges), slow decay (sustained notes)

### 5. Formant Shifting for Character

The FORM slider changes vocal "personality" without affecting pitch. [SRC: IL-MAN]

**Settings by Effect:**

| FORM Value | Perception | Use Case |
|------------|------------|----------|
| +0.3 to +0.5 | Feminine, brighter | Female vocal enhancement |
| 0.0 | Neutral | Transparent processing |
| -0.3 to -0.5 | Masculine, darker | Demonic, "villain" character |
| +0.8 | Chipmunk, cartoon | Effect, comedy |
| -0.8 | Monster, alien | Sci-fi, horror |

**Hip-Hop Tip:** Small shifts (±0.2) add subtle character without sounding "effected."

### 6. Invert Mode Applications

Invert swaps the frequency mapping—high modulator controls low carrier and vice versa. [SRC: IL-MAN]

**Effects Achieved:**
- **"Demon" Voice:** Deep, unnatural bass response
- **"Alien" Texture:** Unpredictable spectral balance
- **Glitch Character:** Metallic, broken-robot quality
- **Sci-Fi Drone:** Inverted speech becomes ambient texture

### 7. HOLD Button Techniques

Freezes the current spectral state. [SRC: IL-MAN]

**Creative Uses:**

1. **Sustained Chords:** Hold during a vocal note → pad continues after vocal stops
2. **Rhythmic Stutters:** Automate HOLD on/off to create stutter effects
3. **Ambient Pads:** Capture a rich spectrum, hold indefinitely for drone
4. **Transition Effects:** Hold at the end of a phrase for sustained tail

**Automation Pattern Example (Stutter):**
```
HOLD: ▁▁▁█▁▁▁█▁▁▁█▁▁▁ (On for 1/16th notes, off between)
Result: Vocoded sound "freezes" on each beat, creating rhythmic gating
```

### 8. Min/Max Frequency Optimization

Limiting the frequency range focuses CPU and improves quality where it matters.

| Content Type | Min Hz | Max Hz | Reason |
|--------------|--------|--------|--------|
| Male Voice | 80 | 8000 | Fundamental + overtones |
| Female Voice | 150 | 10000 | Higher fundamental |
| Full Mix | 40 | 16000 | Preserve all content |
| Drums Only | 60 | 12000 | Kick to cymbals |

**Pro Tip:** Cutting unused extremes improves quality in the remaining bands. [SRC: IL-MAN]

### 9. Scale Setting: Linear vs Logarithmic

| Setting | Band Spacing | Best For |
|---------|--------------|----------|
| **Linear** | Equal Hz spacing | Drums, noise, non-musical |
| **Logarithmic** | Equal perceptual spacing | Speech, vocals, music |

**Rule of Thumb:** Use Logarithmic for vocoding vocals/speech. [SRC: IL-MAN]

### 10. Band-by-Band EQ

The band display functions as a graphic EQ for the vocoded output.

**Common Corrections:**

| Issue | Solution | Which Bands |
|-------|----------|-------------|
| Muddy bass | Lower left 2-3 bars | 20-100Hz |
| Nasal quality | Lower 800Hz-1.2kHz | Center-left |
| Harshness | Lower 2-4kHz | Center |
| Sibilant artifacts | Lower 6kHz+ | Right side |
| Thin sound | Raise 200-400Hz | Left of center |

## What to Listen For

### During Setup

| Check | Listen For | Fix If Missing |
|-------|------------|----------------|
| Carrier present | Synth/pad audible when bypassed | Check R channel routing |
| Modulator present | Vocal affects output | Check L channel level |
| Vocoded output | "Talking" quality | Increase BW, add bands |
| Clear consonants | "S", "T", "K" sounds | Add white noise to carrier |

### During Processing

| Artifact | Sounds Like | Solution |
|----------|-------------|----------|
| **Watery/phasey** | Chorus-like swirl | Increase BW or band count |
| **Gated/choppy** | Sound cuts in/out | Slow attack, increase carrier level |
| **Harsh sibilance** | Sharp "S" sounds | Lower high bands or de-ess modulator |
| **Muddy** | Unclear, thick | Raise MIN frequency, lower low bands |
| **Thin** | Weak, lacking body | Lower MIN frequency, raise 200-400Hz bands |
| **Metallic** | Ringing quality | Check for invert mode, reduce BW |

### Mix Context Checks

- [ ] **Solo:** Vocoded sound clear and intelligible?
- [ ] **In Mix:** Blends appropriately? (May need to be louder than expected)
- [ ] **Low-End:** Not competing with kick/bass?
- [ ] **Stereo:** Centered appropriately? (Vocoder output is naturally centered)

## Common Pitfalls and Fixes

### Pitfall 1: Silent Output

**Symptom:** No sound at all.

**Diagnostic Flow:**
```
1. Bypass vocoder ──► Is carrier audible?
   └─ No → Check carrier routing (R channel)
   
2. Enable vocoder ──► Is modulator audible on L?
   └─ No → Check modulator routing and panning
   
3. Check L/R assignment ──► Are labels correct?
   └─ Click L/R labels to swap if needed
   
4. Check Mix sliders ──► Is R slider up?
   └─ Raise R slider (carrier level)
```

### Pitfall 2: Unintelligible Speech

**Causes and Solutions:**

| Cause | Solution |
|-------|----------|
| Band count too low | Increase to 32-64 bands |
| Bandwidth too narrow | Raise BW to 50-70% |
| Carrier lacks harmonics | Use sawtooth or add white noise |
| Min/Max range too wide | Narrow to speech range (300Hz-8kHz) |
| Attack too slow | Reduce attack time |
| Modulator too compressed | Use gentler compression |

### Pitfall 3: Harsh, Fatiguing Sound

**Immediate Fixes:**
1. Lower BW to 30-40% (softer bands)
2. Lower 4kHz+ band sliders (reduce harshness)
3. De-ess the modulator before vocoder
4. Try parallel processing (blend vocoded with dry)

### Pitfall 4: CPU Overload

**Optimization Steps:**
1. Reduce band count (16 instead of 64)
2. Widen Min/Max range (less band overlap)
3. Use single vocoder instance with automation instead of multiple instances
4. Freeze/render vocoded tracks when done editing

### Pitfall 5: Phase Issues in Mix

**When It Happens:** Layering vocoded signal with dry vocal.

**Fix:** 
- Use vocoder as parallel send (100% wet, blend to taste)
- Or: Time-align vocoded track with dry (vocoder has zero latency, but check other plugins)

## Genre-Specific Best Practices

### Trap/Hip-Hop

- **Stutter Effects:** Automate HOLD for rhythmic chops
- **Ad-libs:** 16 bands, medium BW, subtle formant shift (±0.1)
- **Mix Position:** Parallel send, 20-30% wet under lead vocal

### R&B/Soul

- **Background Harmonies:** 32-64 bands, wider BW for smoothness
- **Formant:** Slight positive shift for air/brightness
- **Mix Position:** Lower in mix, ambient bed behind lead

### Experimental/Alternative

- **Texture Creation:** Use invert mode, unusual carriers (FM, noise)
- **Rhythmic Vocoding:** Drums modulating pads
- **Mix Position:** Full wet as transitional/special effect

## Safety Rules for Sibilance and Harshness

### Pre-Vocoder Rules

1. **De-ess first:** Apply de-esser to modulator before vocoder
2. **Smooth modulator:** Use gentle compression (not limiting)
3. **High-cut modulator:** 10kHz low-pass if excessive sibilance

### In-Vocoder Rules

1. **Reduce high bands:** Lower right 25% of band display
2. **Moderate BW:** 40-60% for balance of clarity and smoothness
3. **Watch the mix:** Vocoded sibilance is harsher than natural

### Post-Vocoder Rules

1. **De-ess again if needed:** Light de-essing on output
2. **EQ sweetening:** 2-4kHz gentle cut if harsh
3. **Saturation:** Light tape/console saturation smooths harsh edges

## Parallel Processing Workflow

**Recommended as default for vocal processing:**

```
Vocal Track ──┬──► Dry (70-80%) ──────────────┐
              │                               ├──► Sum to Output
              └──► Vocoder (100% wet) ────────┘
                     Send/Return track
                     20-30% return level
```

**Benefits:**
- Preserves original vocal clarity
- Allows independent EQ of vocoded layer
- Safer gain staging (vocoded signal can be harsh)
- Easy to automate return level for sections

---

**Source IDs:** IL-MAN (Image-Line Manual)
**Verification Status:** Best practices based on manual and common vocoding principles
**Last Updated:** 2026-02-03
