# Fruity Send - Goal: Creative Effect (Experimental Routing)

## Advanced Creative Routing Techniques

**Purpose:** Push Fruity Send beyond standard mixing into creative sound design.

[SRC: REPUTABLE - experimental production]

---

## Technique 1: Stereo Separation via Dual Sends

**Goal:** Split stereo signal into separate L/R processing chains.

**Routing:**
- Track 1: Stereo Source
- Track 2: Left Channel FX
- Track 3: Right Channel FX

**Track 1 Setup:**
- Slot 1: **Fruity Send** → Track 2, Volume 100%, **Pan Hard Left (-100%)**, Dry 50%
- Slot 2: **Fruity Send** → Track 3, Volume 100%, **Pan Hard Right (+100%)**, Dry 50%

**Track 2 (Left FX):**
- Fruity Delay 3: 1/16, Feedback 30%
- Fruity Parametric EQ 2: Cut 2-4 kHz (different from right)

**Track 3 (Right FX):**
- Fruity Flanger: Depth 40%, Rate 0.5 Hz
- Fruity Parametric EQ 2: Boost 2-4 kHz (complementary to left)

**Result:** Extreme stereo separation with different FX on L/R channels.

**Psychedelic use:** Perfect for disorienting, wide soundscapes.

[SRC: REPUTABLE - stereo manipulation]

---

## Technique 2: Feedback Loop (Controlled Chaos)

**Goal:** Create evolving feedback texture (use cautiously).

**⚠️ WARNING:** Can create runaway feedback. Use limiters and low send levels.

**Routing:**
- Track 1: Source
- Track 2: FX Bus A
- Track 3: FX Bus B

**Track 1 Setup:**
- Slot 1: **Fruity Send** → Track 2, Volume 40%, Dry 100%

**Track 2 (FX Bus A) Setup:**
- Fruity Delay 3: 1/16, Feedback 0% (delay provides rhythm, not feedback)
- Fruity WaveShaper: Subtle saturation
- **Fruity Send** → Track 3, Volume 30%, Dry 0%
- **Fruity Limiter:** CEIL -6 dB (critical: prevents clipping)

**Track 3 (FX Bus B) Setup:**
- Fruity Parametric EQ 2: Cut 100-200 Hz, Cut 8+ kHz (prevent mud/harshness)
- **Fruity Send** → Track 2, Volume 15-20% (LOW for controlled feedback), Dry 0%
- **Fruity Limiter:** CEIL -6 dB

**Result:** Controlled feedback creates glitchy, evolving texture.

**What to listen for:**
- Feedback "grows" but doesn't explode (limiters control it)
- Glitchy, stuttering character
- Experimental, "broken" vibe

**Pitfall:** Send Volume above 25% = runaway feedback. Keep low and monitor closely.

[UNVERIFIED - Test carefully in FL Studio; may require version-specific tweaking]

[SRC: REPUTABLE - feedback-based sound design]

---

## Technique 3: Multi-Stage Serial FX Chain via Routing

**Goal:** Create FX chain across multiple tracks for visual/organizational clarity.

**Routing:**
- Track 1: Vocal
- Track 2: Stage 1 (Reverb)
- Track 3: Stage 2 (Delay on reverb tail)
- Track 4: Stage 3 (Saturation on delay)

**Track 1 Setup:**
- Slot 1: **Fruity Send** → Track 2, Volume 70%, Dry 100%

**Track 2 Setup:**
- Fruity Reeverb 2: Hall, Size 80%, Wet 100%
- **Fruity Send** → Track 3, Volume 80%, Dry 0% (extract reverb, don't continue)

**Track 3 Setup:**
- Fruity Delay 3: 1/4, Feedback 50%, Mix 100%
- **Fruity Send** → Track 4, Volume 70%, Dry 0%

**Track 4 Setup:**
- Fruity Fast Dist: Tape, Pre 25%
- Fader: -10 dB (final blend)

**Result:** Vocal → Reverb → Delay → Saturation (serial chain via routing).

**Advantage:** Each stage is on its own track for visual clarity and independent control.

[SRC: IL-MAN]

---

## Technique 4: Dynamic Send Automation (Evolving Routing)

**Goal:** Automate send intensity for evolving FX throughout song.

**Routing:**
- Track 1: Synth Pad
- Track 2: Reverb Bus

**Track 1 Setup:**
- Slot 1: **Fruity Send** → Track 2, Volume 20% (start), Dry 100%

**Track 2:**
- Fruity Reeverb 2: Large Hall, Size 90%, Wet 100%
- Fader: -8 dB

**Automation:**
1. Create automation clip for Send Volume (Slot 1)
2. Verse: 20% (subtle reverb)
3. Pre-Chorus: Ramp 20% → 60% over 4 bars (build)
4. Chorus: 80% (huge reverb)
5. Post-Chorus: Drop back to 40%

**Result:** Reverb intensity evolves with song structure = dynamic, evolving production.

[SRC: REPUTABLE - dynamic automation]

---

## Technique 5: Parallel Stereo Width (Dual Sends)

**Goal:** Create stereo width without affecting original mono signal.

**Routing:**
- Track 1: Mono Source (vocal, lead)
- Track 2: Stereo Width Bus

**Track 1 Setup:**
- Keep original signal mono (Stereo Separation 0%)
- Slot 1: **Fruity Send** → Track 2, Volume 80%, Dry 100%

**Track 2:**
- Fruity Stereo Enhancer: Stereo Separation 180% (extreme width)
- Fruity Delay 3: Stereo delay (different L/R times: L=10ms, R=15ms)
- Fruity Parametric EQ 2: Cut 100-300 Hz (don't widen low-mids)
- Fader: -14 to -18 dB

**Result:** Mono vocal in center + wide stereo layer = perceived width without losing mono clarity.

**Mix tip:** Check mono compatibility; width may collapse in mono playback.

[SRC: REPUTABLE - stereo widening techniques]

---

## Creative Routing Decision Matrix

| Goal | Routing Technique | Complexity | Risk Level |
|------|-------------------|------------|------------|
| **Stereo separation (L/R different FX)** | Dual sends with pan | Medium | Low |
| **Feedback texture** | Multi-bus feedback loop | High | HIGH (runaway risk) |
| **Serial FX chain (visual)** | Track 1 → 2 → 3 → 4 | Medium | Low |
| **Evolving FX intensity** | Send automation | Low | Low |
| **Parallel stereo width** | Mono source + wide send | Medium | Medium (mono compatibility) |

---

## Common Creative Mistakes

**Mistake 1:** Feedback loop without limiters → ear damage, clipping.  
**Fix:** Always use Fruity Limiter on feedback buses (CEIL -6 dB).

**Mistake 2:** Extreme stereo width on low frequencies → phase issues.  
**Fix:** High-pass stereo width buses at 300-500 Hz.

**Mistake 3:** Too many sends = CPU overload, mix confusion.  
**Fix:** Use Patcher for complex internal routing instead of 10+ Fruity Send instances.

[SRC: IL-KB troubleshooting + REPUTABLE best practices]

---

**Next:** Try vibe workflows `11_Vibe_Upbeat.md` through `14_Vibe_Vibey.md` for genre-specific creative routing.
