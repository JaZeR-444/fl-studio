# Fruity Send - Best Settings Starting Points

## Universal Starting Points

### Default Safe Configuration
**Use case:** General-purpose routing for any source/destination

**Settings:**
- **Send To:** [Select destination track]
- **Volume:** 100% (unity gain)
- **Dry:** 100% (parallel routing)
- **Pan:** Center (0%)

**Why these settings:**
- Volume 100% = no gain reduction or boost (safe starting point)
- Dry 100% = original signal continues (parallel processing mode)
- Pan center = maintains original stereo positioning

**When to adjust:**
- Lower Volume if destination track clips
- Set Dry to 0% for signal extraction mode
- Adjust Pan for creative stereo separation

[SRC: IL-MAN]

---

## By Goal/Routing Type

### 1. Parallel Reverb/Delay (100% Wet FX Bus)
**Goal:** Send to dedicated reverb/delay bus while maintaining dry signal

**Fruity Send settings:**
- **Send To:** Reverb Bus (or Delay Bus)
- **Volume:** 50-80% (taste-dependent)
- **Dry:** 100%
- **Pan:** Center

**Destination track settings (Reverb Bus):**
- **FX plugin (e.g., Fruity Reeverb 2):** Dry 0%, Wet 100%
- **Track fader:** -6 to -12 dB (blend to taste)

**Result:** Original track stays dry; reverb/delay blends in separately.

**Pro tip:** Automate Send Volume for "delay throws" or dynamic reverb intensity.

[SRC: REPUTABLE - mixing best practices]

---

### 2. Parallel Compression (New York Style)
**Goal:** Crush signal heavily on parallel bus, blend with clean original

**Fruity Send settings:**
- **Send To:** Parallel Comp Bus
- **Volume:** 100%
- **Dry:** 100%
- **Pan:** Center

**Destination track settings (Parallel Comp Bus):**
- **FX plugin (e.g., Fruity Limiter):**
  - COMP: 8:1 to 10:1 (heavy compression)
  - THRESH: -20 to -15 dB (catch everything)
  - GAIN: +6 to +10 dB (make up gain)
  - SAT: 10-30% (add harmonic color)
- **Track fader:** -12 to -18 dB (blend 10-30% with original)

**Result:** Original retains transients; parallel comp adds density and sustain.

**Pro tip:** Use on drums, vocals, or full mix bus for "glue."

[SRC: REPUTABLE - New York compression technique]

---

### 3. Signal Extraction (Clean DI, Pre-FX Capture)
**Goal:** Extract signal *before* specific FX in the chain

**Fruity Send settings:**
- **Send To:** Clean DI Track (or Pre-FX Bus)
- **Volume:** 100%
- **Dry:** 100% (if you want processed signal to continue)
- **Dry:** 0% (if you want *only* the extracted signal, no processed)

**Chain position:**
- **Slot 1:** Fruity Send (extracts clean signal)
- **Slot 2+:** Heavy FX (distortion, saturation, etc.)

**Destination track settings:**
- No FX (pure clean signal), or light processing only

**Result:** Destination track has signal *before* Slot 2's FX.

**Use case:** Guitar DI extraction, vocal "safety" track, re-amping source.

[SRC: IL-MAN]

---

### 4. Pre-Fader Send (Fade Out Vocal, Keep Reverb Loud)
**Goal:** Vocal fades out via fader automation, but reverb tail stays loud

**Fruity Send settings:**
- **Send To:** Reverb Bus
- **Volume:** 80-100%
- **Dry:** 100%
- **Pan:** Center

**Fruity Send position:** Any slot (doesn't matter; it's about pre-fader behavior)

**Result:** Track fader automation doesn't affect send level → reverb stays constant.

**Use case:** Vocal outro fades, dub-style delay throws, cinematic reverb tails.

**Pro tip:** Automate Send Volume instead of track fader for dynamic reverb intensity.

[SRC: REPUTABLE - dub mixing, cinematic mixing]

---

### 5. Stereo Separation (Send Left/Right to Different Buses)
**Goal:** Route left channel to one bus, right channel to another

**Setup:** Use two instances of Fruity Send

**Fruity Send 1 (Left Channel):**
- **Send To:** Left FX Bus
- **Volume:** 100%
- **Dry:** 50-100% (depends if you want original stereo or extracted mono)
- **Pan:** Hard Left (-100%)

**Fruity Send 2 (Right Channel):**
- **Send To:** Right FX Bus
- **Volume:** 100%
- **Dry:** 50-100%
- **Pan:** Hard Right (+100%)

**Result:** Left and right channels routed to separate buses for independent processing.

**Use case:** Creative stereo FX (e.g., different delays on L/R), experimental mixing.

[SRC: REPUTABLE - experimental mixing techniques]

---

## By Source Material

### Vocals
**Conservative starting point:**
- **Send To:** Vocal Reverb Bus
- **Volume:** 40-60% (vocals need subtle reverb)
- **Dry:** 100%
- **Pan:** Center

**Destination:** Fruity Reeverb 2 (Room, Size 70%, Damping 50%, Wet 100%)

**Pro tip:** Use two sends: one for short reverb (Room), one for long reverb (Hall) for depth.

---

### Drums
**Conservative starting point:**
- **Send To:** Drum Parallel Comp Bus
- **Volume:** 100%
- **Dry:** 100%
- **Pan:** Center

**Destination:** Fruity Limiter (COMP 10:1, THRESH -25 dB, Wet 100%, SAT 20%)

**Pro tip:** Blend parallel comp at -15 dB for punchier drums without squashing transients.

---

### Bass
**Conservative starting point:**
- **Send To:** Bass Saturation Bus
- **Volume:** 100%
- **Dry:** 100%
- **Pan:** Center

**Destination:** Fruity Fast Dist or Fruity WaveShaper (subtle saturation for harmonic richness)

**Pro tip:** Keep bass routing simple; excessive sends muddy low end.

---

### Pads/Synths
**Conservative starting point:**
- **Send To:** Stereo Delay Bus
- **Volume:** 30-50% (pads can be washy; use restraint)
- **Dry:** 100%
- **Pan:** Center

**Destination:** Fruity Delay 3 (Ping Pong mode, Time 1/4, Feedback 30%, Wet 100%)

**Pro tip:** Automate Send Volume for evolving pad textures.

---

### Guitars
**Conservative starting point (DI extraction):**
- **Send To:** Clean DI Track
- **Volume:** 100%
- **Dry:** 100% (processed guitar continues)
- **Pan:** Center

**Fruity Send position:** Slot 1 (before amp sim/distortion)

**Pro tip:** Record destination track to audio for later re-amping experiments.

---

## By Genre

### Hip-Hop/Rap
**Typical routing:**
- **Vocals → Vocal Reverb Bus:** Volume 30-40% (hip-hop uses less reverb than pop)
- **Vocals → Vocal Delay Bus:** Volume 20-30% (1/4 or 1/8 delay for rhythmic interest)
- **Drums → Parallel Comp Bus:** Volume 100%, blend at -12 dB (NY compression for punch)

**Pro tip:** Hip-hop relies on dry vocals; use sends sparingly to maintain clarity.

[SRC: REPUTABLE - hip-hop mixing techniques]

---

### R&B/Pop
**Typical routing:**
- **Vocals → Vocal Reverb Bus:** Volume 50-70% (R&B uses more reverb for smoothness)
- **Vocals → Vocal Delay Bus:** Volume 30-50% (1/8 or 1/16 delay for rhythmic fills)
- **Drums → Parallel Comp Bus:** Volume 100%, blend at -10 dB (moderate compression)

**Pro tip:** R&B vocals benefit from layered sends (short + long reverb, delay throw automation).

[SRC: REPUTABLE - R&B mixing techniques]

---

### EDM/Trap
**Typical routing:**
- **Leads → Reverb Bus:** Volume 60-80% (big reverb for drops)
- **Drums → Parallel Comp Bus:** Volume 100%, blend at -8 dB (heavy compression for energy)
- **FX → Creative Bus:** Dry 0% (extract FX for independent processing chains)

**Pro tip:** EDM uses extreme routing; don't be afraid to push Send Volume above 100% for creative FX.

[SRC: REPUTABLE - EDM mixing techniques]

---

## By Mix Stage

### Rough Mix (Early Stage)
**Conservative starting point:**
- **Volume:** 50% (leave headroom for adjustments)
- **Dry:** 100% (maintain original signal)
- **Pan:** Center (don't commit to stereo decisions yet)

**Why:** Early mix stage = keep options open; avoid over-processing.

---

### Final Mix (Late Stage)
**Refined starting point:**
- **Volume:** Adjusted to taste (30-100% depending on effect intensity)
- **Dry:** 100% (unless extracting signal, then 0%)
- **Pan:** Creative positioning if needed (e.g., ping-pong delay)

**Why:** Late mix stage = commit to creative decisions; dial in precise blend.

---

## Quick Reference Chart

| Use Case | Send To | Volume | Dry | Pan | Notes |
|----------|---------|--------|-----|-----|-------|
| **Parallel Reverb** | Reverb Bus | 50-80% | 100% | Center | Destination: Wet 100% |
| **Parallel Comp** | Comp Bus | 100% | 100% | Center | Blend bus at -12 dB |
| **DI Extraction** | DI Track | 100% | 0-100% | Center | Slot 1 for pre-FX |
| **Pre-Fader Reverb** | Reverb Bus | 80-100% | 100% | Center | Stays loud during fades |
| **Stereo Separation** | L/R Buses | 100% | 50-100% | Hard L/R | Two instances of Send |
| **Delay Throw** | Delay Bus | 0→100% (auto) | 100% | Center | Automate Volume |

[SRC: IL-MAN + REPUTABLE mixing practices]

---

## Advanced: Multi-Send Chains

**Scenario:** Vocal → Reverb Bus → Delay Bus (reverb *then* delay)

**Setup:**
1. **Track 1 (Vocal):** Fruity Send → Reverb Bus
2. **Track 2 (Reverb Bus):** Fruity Reeverb 2 + Fruity Send → Delay Bus
3. **Track 3 (Delay Bus):** Fruity Delay 3

**Result:** Vocal → reverb → delay (serial FX chain via routing)

**Pro tip:** This is when Fruity Send becomes a routing powerhouse (replaces complex Patcher setups).

[SRC: IL-MAN]

---

**Next steps:**
- Read `03_Vibe_Starting_Points_Moody.md` for moody/dark routing strategies
- Read `04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md` for energetic routing
- Try workflows in `03-Workflows/by-goal/` to practice these settings in context
