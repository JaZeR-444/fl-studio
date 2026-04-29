Tags: hip-hop/rap | deep bass edm | electric

## Wasp XT Instrument Workflows

### XT Hip-Hop Supsaw Bass

**Sound Goal:** Big, wide, modern trap bass

**Settings:**
- Oscillators: 3 saws, detune spread 15
- Pre-filter gain: -4 dB each
- Filter 1: Low-pass 38%, Resonance 35%
- Filter 2: Low-pass 45%, Resonance 25%
- Routing: Serial
- Envelope 1: Filter 1 cutoff, fast attack, medium decay, high sustain
- Envelope 2: Pitch, slight modulation for movement
- Chorus: ON, depth 60%

**Creation Steps:**
1. Stack 3 oscs with wide detune
2. Serial filters create dark, rich character
3. Envelope on F1 for punchy attacks
4. Chorus for width (trap needs space)

**A/B Test:**
1. Compare serial vs parallel routing
2. Parallel should feel wider, serial darker
3. Choose based on song mood

**Quick Fix Path:**
- If muddy → Close F1 to 35%
- If thin → More detune on oscs
- If not wide enough → Increase chorus

### XT R&B Smooth Pad

**Sound Goal:** Warm, lush, soulful background

**Settings:**
- Oscillators: 2 saws, detune 5
- Pre-filter gain: -3 dB each
- Filter 1: Low-pass 52%, Resonance 20%
- Filter 2: Low-pass 60%, Resonance 15%
- Routing: Parallel
- Envelope 1: Filter 2 cutoff, slow attack, long release
- LFO: To F2 cutoff, very slow (0.05Hz), subtle depth
- Chorus: ON, depth 55%

**Why Parallel?**
- Parallel routing preserves low-end warmth
- Two filters create dimensional sound
- Perfect for R&B "wall of sound" aesthetic

### XT Deep Bass Wobble

**Sound Goal:** Rhythmic, funky bass movement

**Settings:**
- Oscillators: 2 saws, detune 8
- Pre-filter gain: -3 dB each
- Filter 1: Low-pass 32%, Resonance 50%
- Filter 2: Low-pass 40%, Resonance 40%
- Routing: Serial (for tight response)
- Envelope 1: Filter 1 cutoff with pitch bend
- LFO: To filter cutoff, synced to 1/8 notes
- Chorus: OFF (wobble doesn't need chorus)

**Synced LFO Settings:**

| Rhythm | FL Studio Setting | Result |
|--------|------------------|--------|
| Quarter notes | 1/4 note | Slow wobble |
| Eighth notes | 1/8 note | Standard wobble |
| Triplets | 1/8 triplet | Bouncy feel |
| Sixteenth | 1/16 note | Fast wobble |

### XT Electric Lead

**Sound Goal:** Cutting, memorable hook

**Settings:**
- Oscillators: 2 saws, detune 12
- Pre-filter gain: 0 dB each
- Filter 1: Low-pass 62%, Resonance 32%
- Filter 2: Band-pass, center frequency
- Routing: Serial
- Envelope 1: F1 cutoff, medium attack, fast decay
- Envelope 2: Amp, punchy attack, sustain 70%
- Chorus: ON, depth 45%

**When to Use:**
- Song hooks and melodies
- Call-and-response sections
- Emphasis on specific phrases
- Not for sustained notes (too intense)

### XT Complex Pad (Evolving)

**Sound Goal:** Otherworldly, textural

**Settings:**
- Oscillators: 2 saws + 1 square, detune spread
- Pre-filter gain: -6 dB each
- Filter 1: Low-pass 48%, Resonance 25%
- Filter 2: Low-pass 65%, Resonance 20%
- Routing: Parallel
- Envelope 1: F1 cutoff, slow attack (1s), long release
- Envelope 2: F2 cutoff, random modulation
- LFO: Stereo panning, very slow
- Chorus: ON, depth 70%

**Modulation Plan:**
1. Envelope 1: Filter opens slowly over 3 seconds
2. LFO: Filters move subtly out of sync
3. Result: Ever-evolving texture

### Quick Reference Table

| Sound | OSCs | Detune | F1 | F2 | Route | Chorus | Character |
|-------|------|--------|-----|-----|-------|--------|-----------|
| Trap bass | 3 | 15 | 38% | 45% | Serial | ON | Big, dark |
| R&B pad | 2 | 5 | 52% | 60% | Parallel | ON | Warm, lush |
| Wobble | 2 | 8 | 32% | 40% | Serial | OFF | Rhythmic |
| Lead | 2 | 12 | 62% | BP | Serial | ON | Cutting |
| Texture | 3 | 10 | 48% | 65% | Parallel | ON | Evolving |
