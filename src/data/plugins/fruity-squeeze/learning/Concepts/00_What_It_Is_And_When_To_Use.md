# Fruity Squeeze - What It Is And When To Use

## 60-Second Mental Model

Fruity Squeeze is FL Studio's **lo-fi bit-crusher and transient puncher**. Think of it as a "sample reducer" that intentionally degrades audio for creative effect. It combines two distinct distortion engines: **Squarize** (reduces bit depth → 8-bit/retro digital crunch) and **Puncher** (replaces samples with distorted versions → controlled transient destruction). Use it to add lo-fi character, create glitchy textures, or punch drums harder without traditional compression. [SRC: IL-MAN]

**Core Identity:**
- **Lo-fi degradation tool** (intentional quality reduction)
- **Dual-mode distortion** (bit reduction + sample replacement)
- **Creative FX**, not mastering processor

## Purpose & FL Studio Role

### What It Does
1. **Squarize (Bit Reduction)**: Reduces bit depth from 24-bit → 8-bit/4-bit/1-bit (stepped "quantization" artifacts)
2. **Puncher Section**: Replaces audio samples with distorted nominal-level versions (transient enhancement/destruction)
3. **Preserve/Impact/Relation**: Controls ratio of clean vs. crushed samples
4. **Built-in Filter**: Pre or Post distortion filtering (LP/HP with resonance)
5. **Mix/Gain Controls**: Dry/wet blend + output level compensation

### What It Is NOT
- **Not a clean compressor** (use Fruity Compressor for transparent dynamics)
- **Not a mastering limiter** (use Fruity Limiter for transparent loudness)
- **Not subtle** (Squeeze is intentionally aggressive/lo-fi)
- **Not a clipper** (use Fruity Soft Clipper for waveform clipping)

## When To Use Fruity Squeeze

### Primary Use Cases (High Confidence)
✅ **Lo-Fi 8-Bit Textures**
- Drum loops → crunchy, retro video game sound
- Vocals → phone/radio/broken speaker effect
- Synths → chip-tune/Game Boy aesthetic

✅ **Transient Punching (Puncher Mode)**
- Kick drums → harder attack without compression
- Snares → sharper crack
- Hi-hats → more bite

✅ **Glitch/Psychedelic FX**
- Extreme Squarize → stepped, robotic artifacts
- Automate Squarize → "bit-depth dive" effect (like tape stop but digital)
- Randomize Preserve/Impact → glitchy stutters

✅ **Parallel Lo-Fi Layer**
- Send drums to Squeeze on parallel bus
- Blend crushed layer (30-40%) with clean (70-60%)
- Result: Punch + character without full degradation

✅ **Industrial/Harsh Sound Design**
- Combine Squarize + Puncher + Pre-Filter
- Max settings → destroyed, distorted textures
- Use on pads, bass, vocals for experimental genres

### When NOT To Use
❌ **Transparent Dynamics Control**: Use Fruity Compressor (Squeeze adds obvious artifacts)
❌ **Mastering Chain**: Use Fruity Limiter or Maximus (Squeeze is too colored)
❌ **Subtle Warmth**: Use Fruity Fast Dist or saturation (Squeeze is aggressive)
❌ **Bass Preservation**: Squeeze can destroy sub-bass punch (use with caution <100Hz)

## Hip-Hop/R&B/Pop-Hip-Hop Context

### Where It Fits in the Modern Workflow
**Lo-Fi Hip-Hop (Boom-Bap Revival):**
- Drum breaks → Squarize 30-50% (8-bit crunch, vintage sampler vibe)
- Vocal samples → Squarize 20-30% + LP filter (phone call effect)
- Bass → AVOID (destroys low-end punch)

**Trap/Drill:**
- Hi-hats → Puncher mode (sharper transients, cut through mix)
- 808s → AVOID (Squeeze destroys sub-bass weight)
- Snares → Puncher mode 20-40% parallel (add crack)

**R&B/Pop-Hip-Hop:**
- Vocal FX layer → Squarize 40-60% (robotic doubled vocal)
- Texture pads → Squarize 10-20% (subtle digital character)
- Drum bus (parallel) → Puncher 30% blend (add grit)

**Experimental/Psychedelic:**
- Everything → Extreme Squarize + automation (intentional destruction)
- Glitch drums → Randomized Preserve/Impact (stutter effect)
- Bass → Low-pass + moderate Squarize (controlled distortion)

### Producer vs. Engineer Mindset
| **Producer Mindset** | **Engineer Mindset** |
|---|---|
| "Does this add vibe?" | "Is this destroying the mix?" |
| Use Squeeze creatively (FX) | Use Squeeze cautiously (can ruin dynamics) |
| Automate for movement | Static settings for consistency |
| Parallel processing (blend) | Insert processing (all or nothing) |

**Key Insight**: Squeeze is a **character tool**, not a mixing tool. Add it for vibe, not to "fix" something. If your drums lack punch, use compression first, Squeeze second (for color).  
[SRC: HIPHOP, Mixing Best Practices]

## Typical Roles in a Session

### 1. Insert FX (Lo-Fi Character)
- **Insert on drum loop channel** (after EQ, before reverb)
- **Squarize 20-40%** (8-bit crunch)
- **Filter Post, LP 3-5kHz** (remove harsh digital artifacts)
- **Mix 60-80%** (blend with clean signal)

### 2. Parallel Bus (Drum Punch)
- **Send drums to separate mixer track** (via Fruity Send or mixer routing)
- **Fruity Squeeze on parallel track** (Puncher mode)
- **Impact 50-70%** (transient enhancement)
- **Blend parallel track at -12 dB** (subtle punch layer)

### 3. FX Send (Glitch Automation)
- **Create FX return track** with Squeeze
- **Send vocal/drum hits** to FX track (via send knob)
- **Automate Squarize 0% → 100%** (bit-depth dive effect)
- **Use sparingly** (transitions, fills, drops)

### 4. Sound Design Layer
- **Load on synth pad/texture** (insert)
- **Squarize 40-60%** (intentional degradation)
- **Pre-Filter HP 200Hz** (preserve low-end weight)
- **Result**: Broken radio/cassette tape aesthetic

## Common Misconceptions

### "Squeeze Makes Things Louder"
**PARTIALLY TRUE**. The **Puncher** section can increase perceived loudness by enhancing transients, but this often comes with distortion. True loudness increase requires limiting (Fruity Limiter). Squeeze adds *punch*, not clean *volume*.  
[SRC: IL-MAN]

### "Squarize and Puncher Are the Same Thing"
**FALSE**.  
- **Squarize**: Reduces bit depth (digital quantization artifacts, 8-bit crunch)
- **Puncher**: Replaces samples with distorted versions (transient enhancement/destruction)

They can be used together or separately. Many users never touch Puncher and only use Squarize for lo-fi vibes.  
[SRC: IL-MAN]

### "Squeeze Is Safe on Bass/Kicks"
**FALSE**. Squeeze can destroy low-end punch by adding phase distortion and reducing dynamic range. Use **very cautiously** on bass/kicks. If used, apply:
- Low Squarize (10-20% max)
- Pre-Filter HP to protect sub-bass
- Parallel processing (blend, don't replace)

[SRC: Mixing Best Practices]

### "More Squarize = Better Lo-Fi"
**FALSE**. Extreme Squarize (>70%) creates **unusable artifacts** (aliasing, stepping). Sweet spot for musical lo-fi: **30-50% Squarize**. Higher values = experimental/glitch only.  
[SRC: HIPHOP, Lo-Fi Production]

## Quick Decision Matrix

**Load Fruity Squeeze when:**
- [ ] You want intentional lo-fi/8-bit character
- [ ] Drums need aggressive punch (parallel Puncher mode)
- [ ] Creating glitchy/psychedelic FX
- [ ] Layering crushed texture with clean sound (parallel)
- [ ] Sound design requires broken/distorted aesthetic

**Skip Fruity Squeeze when:**
- [ ] You need transparent dynamics control (→ Fruity Compressor)
- [ ] Mastering or final bus processing (→ Fruity Limiter)
- [ ] Subtle warmth or analog saturation (→ Fruity Fast Dist)
- [ ] Processing bass/kicks without degradation (→ use cautiously or skip)

---

## Vibe-Specific Use Cases

### MOODY
**Application**: Dark, degraded textures  
**Settings**:
- Squarize 30-40% (subtle lo-fi character)
- Filter Post, LP 1-2kHz (dark, muffled)
- Preserve HIGH, Impact LOW (keep some clean signal)
- Mix 50-60% (blend, don't replace)

**What To Listen For**: Muffled, distant quality (not harsh/bright)  
**Avoid**: High Squarize (too digital/glitchy for moody vibe)  
[SRC: HIPHOP]

---

### UPBEAT
**Application**: Punchy drum transients  
**Settings**:
- **Puncher mode** (Preserve LOW, Impact HIGH)
- Squarize 10-20% (subtle digital edge)
- Filter Pre, HP 100Hz (protect bass punch)
- Parallel blend 30-40% (add punch without crushing)

**What To Listen For**: Sharper transients, more attack (not distorted mess)  
**Avoid**: Over-squarizing (dulls transients instead of enhancing)  
[SRC: Mixing Best Practices]

---

### PSYCHEDELIC
**Application**: Extreme bit-depth manipulation  
**Settings**:
- Squarize 70-90% (extreme degradation)
- Automate Squarize (0% → 100% dive effects)
- Puncher randomized (Preserve/Impact automation)
- Filter sweeps (automate cutoff)

**What To Listen For**: Intentional digital artifacts, glitchy chaos  
**Avoid**: Static settings (psychedelic needs movement/automation)  
[SRC: Sound Design]

---

### JAZZY
**Application**: Lo-fi vinyl/cassette warmth  
**Settings**:
- Squarize 20-30% (subtle tape degradation)
- Filter Post, LP 2.5-3kHz (warm, not harsh)
- Preserve 60-70% (keep musical integrity)
- Mix 40-50% (blend with clean)

**Post-FX**: Add Effector → Vinyl preset (layer crackle)

**What To Listen For**: Warm degradation (not digital/harsh)  
**Avoid**: Puncher mode (too aggressive for jazzy vibe)  
[SRC: Lo-Fi Production]

---

### VIBEY
**Application**: Textured background layer  
**Settings**:
- Squarize 10-20% (subtle character)
- Filter Pre, LP 1.5kHz (subdued presence)
- Mix 30-40% (background texture, not focal)
- Parallel processing (blend under main sound)

**What To Listen For**: Subtle degradation (adds texture without dominating)  
**Avoid**: High Squarize (too aggressive for background role)  
[SRC: Mixing]

---

## Critical Mixing Rules (Hip-Hop/R&B)

### Rule 1: Protect Low-End (<150Hz)
**Problem**: Squeeze destroys bass punch via phase distortion.

**Solution**:
- **Pre-Filter HP 100-150Hz** (protect sub-bass)
- **OR**: Use only on mid/high content (hats, snares, vocals)
- **OR**: Parallel processing (blend crushed layer, keep clean bass)

**Red Flag**: If bass/kicks thin out after Squeeze → REMOVE or re-route.  
[SRC: Mixing Best Practices]

---

### Rule 2: Mono Check for Stereo Crushing
**Problem**: Squarize can create phase issues in stereo.

**Workflow**:
1. Apply Squeeze on stereo track
2. Check in mono (Fruity Stereo Shaper → Separation 0%)
3. If sound thins/disappears → reduce Squarize or sum to mono before Squeeze

**Safe Approach**: Use Squeeze on mono sources (kick, snare, lead vocal).  
[SRC: Mixing Best Practices]

---

### Rule 3: Gain Stage After Squeeze
**Problem**: Squeeze changes output level unpredictably (can clip).

**Workflow**:
1. Apply Squeeze
2. Adjust **Gain** knob to match output to input level
3. Check mixer meters (peak should not exceed -6 dB)

**Tool**: Fruity Limiter after Squeeze (CEIL -0.3 dB, safety catch).  
[SRC: Mixing Best Practices]

---

### Rule 4: Parallel > Insert for Drums
**Best Practice**: Use Squeeze on **parallel bus** (blend), not **insert** (replace).

**Why**: Preserves transient punch of clean signal while adding crushed character.

**Workflow**:
1. Send drums to parallel track (Fruity Send or mixer routing)
2. Fruity Squeeze on parallel track (Puncher or Squarize)
3. Blend parallel at -10 to -15 dB

**Result**: Punch + character without full degradation.  
[SRC: HIPHOP, NY Compression Techniques]

---

## 60-Second Quick Workflow

**Add Lo-Fi Character to Drum Loop:**
1. **Insert Fruity Squeeze** on drum loop channel
2. **Squarize 30-40%** (8-bit crunch)
3. **Filter Post, LP 3kHz** (remove harsh highs)
4. **Mix 60-70%** (blend with clean)
5. **A/B check**: Bypass → should add character without destroying punch
6. **If bass/kicks thinned**: Reduce Squarize or use Pre-Filter HP 100Hz

---

**Source Tags:**
- [SRC: IL-MAN] = Image-Line Official Manual
- [SRC: HIPHOP] = Hip-Hop Production Best Practices
- [SRC: Mixing Best Practices] = Industry Mixing Standards
- [SRC: Lo-Fi Production] = Lo-Fi Aesthetic Techniques
- [SRC: Sound Design] = Experimental Sound Design Approaches
- [SRC: NY Compression] = Parallel Processing Techniques
