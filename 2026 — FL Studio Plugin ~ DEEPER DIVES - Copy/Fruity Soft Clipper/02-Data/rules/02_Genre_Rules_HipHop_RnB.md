# Fruity Soft Clipper: Genre Rules - Hip-Hop & R&B

## Trap / Modern Hip-Hop Rules

### Rule 1: Aggressive Master Threshold is Expected
**Guideline:** -2 to -3 dB on master bus  
**Why:** Modern Trap demands competitive streaming loudness  
**Verification:** Compare RMS to Pop Smoke, Lil Baby (-8 to -6 dBFS RMS)  
**Exception:** Lo-fi Trap variants (use -1 to -2 dB)

[SRC: REPUTABLE - Trap production standard]

---

### Rule 2: 808 Distortion is a Feature, Not a Bug
**Guideline:** -6 to -10 dB on 808+Kick bus  
**Why:** "Broken speaker" bass is the signature Trap sound  
**Verification:** Should hear harmonic "buzz" and aggression  
**Exception:** Melodic Trap (use -3 to -4 dB for cleaner bass)

**Setup:**
1. Bus 808 and kick together
2. Boost input gain +6 dB before Soft Clipper
3. Set Threshold to -8 dB
4. Mono check is MANDATORY

[SRC: REPUTABLE]

---

### Rule 3: Mono Compatibility is Critical
**Guideline:** Always check bass in mono  
**Why:** Clubs, phones, and cars often sum to mono  
**Verification:** Bass should remain present in mono (not vanish)  
**Fix if Broken:** Raise Threshold or use multiband (clip mids, not bass)

**How to Check:**
- Ctrl+M (FL Studio mono toggle)
- OR add Stereo Shaper → 100% mono on master
- Listen specifically to 808/kick

[SRC: REPUTABLE]

---

### Rule 4: Drum Bus Needs Heavy Glue
**Guideline:** -4 to -6 dB on drum bus  
**Why:** Trap drums must sound like "one instrument"  
**Verification:** Kick/snare/hats blend cohesively  
**Exception:** Drill (use -6 to -8 dB for extra aggression)

[SRC: REPUTABLE]

---

### Rule 5: Hi-Hats Can Be Clipped for Brightness
**Guideline:** -3 to -4 dB on hi-hat track  
**Why:** Soft clipping adds high harmonics = sparkle  
**Verification:** Hi-hats feel more present and bright  
**Exception:** Dark/moody Trap (skip clipping hi-hats)

[SRC: REPUTABLE]

---

## R&B / Pop-Hip-Hop Rules

### Rule 1: Vocals MUST Stay Smooth
**Guideline:** -0.5 to -1 dB maximum on vocals  
**Why:** R&B vocals need clarity and intimacy  
**Verification:** No obvious distortion on consonants  
**Exception:** Creative FX (intentional distortion for ad-libs)

[SRC: REPUTABLE]

---

### Rule 2: Master Should Be More Conservative
**Guideline:** -1 to -1.5 dB on master bus  
**Why:** R&B prioritizes smoothness over loudness  
**Verification:** Mix feels "polished," not "aggressive"  
**Exception:** Pop-leaning R&B (use -2 dB for radio loudness)

[SRC: REPUTABLE]

---

### Rule 3: Bass Should Be Clean (Not Distorted)
**Guideline:** -2 to -3 dB maximum on bass  
**Why:** R&B bass needs smoothness and sub weight  
**Verification:** Bass feels warm, not aggressive  
**Exception:** Trap-influenced R&B (use -4 dB)

[SRC: REPUTABLE]

---

### Rule 4: Check for Harshness on Smooth Sections
**Guideline:** A/B test ballad sections vs upbeat sections  
**Why:** Smooth R&B exposes harshness more than Trap  
**Verification:** Ballad sections don't sound brittle  
**Fix if Harsh:** Raise Threshold by +0.5 dB globally

[SRC: REPUTABLE]

---

### Rule 5: Reverb Needs Pre-Clipping
**Guideline:** Soft Clipper BEFORE reverb send  
**Why:** R&B uses heavy reverb; needs smooth input  
**Verification:** Reverb tail sounds natural, not metallic  
**Exception:** None (always clip before reverb)

[SRC: REPUTABLE]

---

## Boom-Bap / Classic Hip-Hop Rules

### Rule 1: Preserve Drum Dynamics
**Guideline:** -2 to -3 dB on drum bus (less aggressive than Trap)  
**Why:** Boom-Bap needs natural swing and punch  
**Verification:** Drums still breathe and groove  
**Exception:** Modern Boom-Bap revival (use -4 dB)

[SRC: REPUTABLE]

---

### Rule 2: Sample Loops Get Vintage Treatment
**Guideline:** -2 to -3 dB on sample bus  
**Why:** Emulates vinyl/tape saturation  
**Verification:** Sample feels "warmer" and glued  
**Exception:** Clean sample aesthetic (skip clipping)

[SRC: REPUTABLE]

---

### Rule 3: Vocals Sit In the Mix (Not On Top)
**Guideline:** -1 dB on vocal, Post Gain 0 dB  
**Why:** Boom-Bap vocals sit "inside" the beat  
**Verification:** Vocal doesn't jump out excessively  
**Exception:** Aggressive rap (use -1.5 dB for presence)

[SRC: REPUTABLE]

---

## Lo-Fi / Chill Hip-Hop Rules

### Rule 1: Embrace Artifacts
**Guideline:** -3 to -5 dB across the board  
**Why:** Lo-fi = intentional degradation  
**Verification:** Should hear obvious saturation  
**Exception:** "Clean lo-fi" (use -1 to -2 dB)

[SRC: REPUTABLE]

---

### Rule 2: Everything Gets Clipped
**Guideline:** Apply Soft Clipper to drums, bass, samples, master  
**Why:** Creates cohesive vintage character  
**Verification:** Mix feels uniformly "warm" and degraded  
**Exception:** Vocal clarity (clip less aggressively)

[SRC: REPUTABLE]

---

### Rule 3: Don't Chase Loudness
**Guideline:** Post Gain = 0 dB (no loudness boost)  
**Why:** Lo-fi should feel laid-back, not loud  
**Verification:** Mix has headroom and space  
**Exception:** "Loud lo-fi" (modern variant, use +1 dB)

[SRC: REPUTABLE]

---

## Universal Hip-Hop/R&B Mixing Rules

### Gain Staging Rules

**Rule:** Peak at -6 to 0 dBFS before Soft Clipper  
**Why:** Ensures consistent clipping behavior  
**Verification:** Input meter shows -6 to 0 dBFS peaks  
**Fix if Wrong:** Adjust track fader or add gain plugin

---

### Transient Preservation Rules

**Rule:** Never clip below -8 dB on drums (except 808 bus)  
**Why:** Destroys transient snap and punch  
**Verification:** Drums still have "crack" and attack  
**Exception:** Lo-fi (intentionally degraded transients)

---

### Low-End Rules (Critical)

**Rule 1:** Always mono-sum below 120 Hz  
**Why:** Prevents phase cancellation on bass  
**How:** Use Stereo Shaper (bass below 120 Hz = 100% mono)

**Rule 2:** Check bass in mono every single time  
**Why:** Most playback systems sum bass to mono  
**How:** Ctrl+M toggle while adjusting bass clipping

**Rule 3:** Never clip sub-bass directly  
**Why:** Creates harsh artifacts and phase issues  
**How:** Use multiband (clip mids/highs, leave sub clean)

[SRC: REPUTABLE]

---

### Vocal Rules (All Genres)

**Rule:** Clip vocals BEFORE reverb/delay  
**Why:** Prevents reverb from being triggered by peaks  
**Chain:** Vocal → Soft Clipper (-0.5 to -1 dB) → Reverb Send  
**Exception:** None (universal rule)

---

### Automation Rules

**Rule:** Limit Threshold automation to ±3 dB  
**Why:** Prevents jarring volume shifts  
**Example:** Verse -1 dB → Chorus -3 dB (smooth ramp)  
**Exception:** Psychedelic/experimental (intentional chaos)

---

## Streaming Platform Rules

### Spotify / Apple Music
**Target Loudness:** -14 LUFS integrated  
**Soft Clipper Role:** 2-3 dB loudness gain before limiter  
**Verification:** Use Youlean Loudness Meter  
**Warning:** Exceeding -10 LUFS triggers normalization (lossy)

### SoundCloud
**Target Loudness:** -8 to -10 LUFS integrated  
**Soft Clipper Role:** More aggressive (streaming war mentality)  
**Verification:** Compare to top SoundCloud tracks  
**Warning:** Very competitive platform (loudness matters)

### YouTube
**Target Loudness:** -13 to -14 LUFS integrated  
**Soft Clipper Role:** Conservative (YouTube normalizes heavily)  
**Verification:** Test with actual YouTube upload  
**Warning:** Over-limiting gets penalized

[SRC: REPUTABLE - streaming platform standards]

---

## Mix Hygiene Rules

### Rule 1: Reference Every 30 Minutes
**Why:** Prevents ear fatigue leading to over-clipping  
**How:** Load commercial track, A/B against your mix  
**Verification:** Your mix within ±2 dB RMS of reference

### Rule 2: Take Breaks
**Why:** Ear fatigue makes you push Threshold too low  
**How:** 10-minute break every 90 minutes  
**Verification:** Fresh ears = better decisions

### Rule 3: Test on Multiple Systems
**Why:** Soft Clipper sounds different on different speakers  
**How:** Test on monitors, headphones, phone, car  
**Verification:** Mix sounds good on ALL systems (not just one)

[SRC: REPUTABLE]

---

## Genre Decision Matrix

| Genre | Master Threshold | Drum Bus | 808 Treatment | Vocal Treatment |
|-------|------------------|----------|---------------|-----------------|
| **Trap** | -2 to -3 dB | -4 to -6 dB | -8 dB (distorted) | -1 dB |
| **R&B** | -1 to -1.5 dB | -2 to -3 dB | -2 to -3 dB (clean) | -0.5 dB |
| **Boom-Bap** | -1.5 dB | -2 to -3 dB | Skip (use bass instead) | -1 dB |
| **Lo-Fi** | -3 to -5 dB | -4 to -5 dB | -3 to -4 dB | -2 dB |
| **Pop-Hip-Hop** | -2 dB | -3 to -4 dB | -3 to -4 dB | -0.5 to -1 dB |

---

## Collaboration Rules

### Rule 1: Clarify Genre/Vibe Before Mixing
**Why:** Prevents expectation mismatch (artist wants clean, you deliver distorted)  
**How:** Ask for 3 reference tracks  
**Verification:** Match reference loudness and tone

### Rule 2: Send Stems Without Soft Clipper
**Why:** Mixing/mastering engineer may want to apply their own  
**How:** Export stems with Soft Clipper bypassed  
**Exception:** If Soft Clipper is creative (808 distortion), keep it

### Rule 3: Document Your Settings
**Why:** Allows recall if client requests changes  
**How:** Save project with "Soft Clipper Settings" notes  
**Verification:** Can recreate mix 6 months later

[SRC: REPUTABLE]

---

## Summary: The 10 Commandments

1. **Trap:** Aggressive clipping is expected (-2 to -3 dB master, -8 dB 808)
2. **R&B:** Conservative clipping for smoothness (-1 dB master, -0.5 dB vocal)
3. **Mono Check:** Always verify bass in mono (no exceptions)
4. **Clip Before Reverb:** Universal rule (prevents harsh reverb)
5. **Gain Stage:** Input should peak -6 to 0 dBFS
6. **Reference Often:** Every 30 minutes against commercial tracks
7. **Genre Matters:** Trap ≠ R&B ≠ Lo-Fi (adjust accordingly)
8. **Streaming Targets:** -14 LUFS (Spotify), -10 LUFS (SoundCloud)
9. **Vocals Stay Smooth:** Never clip below -1 dB on vocals
10. **Trust Your Ears:** Meters guide, ears decide

[SRC: REPUTABLE]

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Coverage:** Complete  
**Genres Covered:** Trap, R&B, Boom-Bap, Lo-Fi, Pop-Hip-Hop
