# EQ Problem Solver - Quick Diagnostic Guide

Fast reference for identifying and fixing common EQ issues.

## How to Use This Guide

1. **Identify your symptom** from the list below
2. **Follow the diagnostic** to confirm the issue
3. **Apply the solution** with exact settings
4. **Verify** the result

## Common Problems & Solutions

### 🔴 LOW-END ISSUES

#### Problem: Mix Feels Heavy, Undefined, "Cloudy"
**Symptom:** Overall muddiness, lack of clarity, instruments blur together
**Diagnosis:** Solo kick and bass - do they sound clear? Bypass all other tracks - does clarity improve?
**Root Cause:** Sub rumble accumulation across tracks

**Solution:**
- **Band:** 1 (Sub)
- **Action:** HP filter on ALL non-bass tracks
- **Settings:** HP @ 80 Hz, BW 25%
- **Result:** Immediate clarity, kick/bass separation

---

#### Problem: Mix is Muddy/Cloudy/Thick
**Symptom:** Sounds like listening through a blanket, undefined low-mids
**Diagnosis:** Listen at 200-300 Hz - too much energy there?
**Root Cause:** Low-mid frequency buildup

**Solution:**
- **Band:** 2 (Warmth)
- **Action:** Cut on most tracks
- **Settings:** Bell, 220-250 Hz, -1.5 to -2 dB, BW 35%
- **Which tracks:** Vocals, guitars, synths, most instruments EXCEPT bass/kick
- **Result:** Clearer mix, maintained warmth

---

#### Problem: Mix Feels Boomy or Bloated
**Symptom:** Too much low energy, but not quite mud - more like boom
**Diagnosis:** Check 180-220 Hz specifically - excessive energy?
**Root Cause:** Lower warmth zone overload

**Solution:**
- **Band:** 2 (Warmth)
- **Action:** Cut lower in Band 2 range
- **Settings:** Bell, 200 Hz, -2 to -3 dB, BW 30%
- **Which tracks:** Same as mud - all but bass/kick
- **Result:** Controlled warmth without boom

---

### 🟠 MIDRANGE ISSUES

#### Problem: "Recorded in a Room" Sound / Boxy
**Symptom:** Sounds enclosed, cardboard-like, cheap mic quality
**Diagnosis:** Sweep 300-550 Hz with boost - does it sound worse in a specific spot?
**Root Cause:** Room resonances and midrange box tone

**Solution:**
- **Band:** 3 (Boxiness)
- **Action:** Cut at worst frequency
- **Settings:** Bell, 350-450 Hz (sweep to find), -2 to -3 dB, BW 50%
- **Which tracks:** Vocals, acoustic guitars, drums, anything recorded
- **Result:** More "expensive" professional sound

---

#### Problem: Vocal Sounds Nasal / Instruments Sound Honky
**Symptom:** "Pinched nose" vocal, megaphone character, annoying midrange
**Diagnosis:** Boost and sweep 600-1200 Hz - where does it sound worst?
**Root Cause:** Nasal resonance frequency

**Solution:**
- **Band:** 4 (Nasal/Honk)
- **Action:** Small cut at nasal frequency
- **Settings:** Bell, 700-1000 Hz (sweep to find), -1 to -2 dB, BW 60%
- **Which tracks:** Vocals primarily, sometimes guitars/brass
- **Result:** Natural, less nasal tone
- **Warning:** Small moves only - very sensitive range

---

#### Problem: Midrange Feels Congested
**Symptom:** Many instruments fighting in the mids, unclear separation
**Diagnosis:** Mute half the tracks - does it clear up significantly?
**Root Cause:** Frequency masking across multiple tracks

**Solution:** **Multi-band approach**
- **Band 2:** Cut -1 dB @ 240 Hz (mud)
- **Band 3:** Cut -1.5 dB @ 400 Hz (box)
- **Band 4:** Cut -0.5 dB @ 850 Hz (honk)
- **Apply to:** Supporting tracks (NOT lead vocal/instrument)
- **Result:** Open midrange with space for leads

---

### 🟢 PRESENCE & CLARITY ISSUES

#### Problem: Vocal is Buried / Can't Hear Lyrics
**Symptom:** Vocal volume is fine but still hard to understand or hear clearly
**Diagnosis:** Solo vocal - sounds clear? In mix - disappears?
**Root Cause:** Lack of presence frequencies OR other tracks masking

**Solution Option 1 - Boost Lead:**
- **Band:** 5 (Presence)
- **Action:** Boost on lead vocal
- **Settings:** Bell, 2.5 kHz, +1.5 to +2 dB, BW 50%
- **Result:** Vocal cuts through

**Solution Option 2 - Cut Competitors (BETTER):**
- **Band:** 5 (Presence)
- **Action:** Cut on competing tracks
- **Settings:** Bell, 2-3 kHz, -1 to -1.5 dB on guitars/synths/pads
- **Result:** Vocal appears more present, more natural

---

#### Problem: Lead Instrument Doesn't Cut Through
**Symptom:** Lead guitar/synth is lost in the mix
**Diagnosis:** Same as vocal - solo vs in-context test
**Root Cause:** Presence masking or insufficient presence

**Solution:**
- **Band:** 5 (Presence)
- **Action:** Boost presence on lead
- **Settings:** Bell, 2.5-3 kHz, +1.5 to +2.5 dB, BW 50%
- **Which track:** Lead instrument only
- **Also:** Cut Band 5 on supporting instruments
- **Result:** Lead steps forward

---

### 🔵 HIGH-FREQUENCY ISSUES

#### Problem: Mix Sounds Harsh / Fatiguing
**Symptom:** Listener discomfort, "ice-pick" quality, painful on headphones
**Diagnosis:** Listen on headphones - does it hurt after 30 seconds?
**Root Cause:** Excessive upper-mid energy

**Solution:**
- **Band:** 6 (Detail)
- **Action:** Cut harshness
- **Settings:** Boost +6 dB and sweep 3.5-6 kHz to find worst spot, then cut -1.5 to -2 dB, BW 60-65%
- **Which tracks:** Usually vocals or bright instruments
- **Result:** Smoother, more listenable

---

#### Problem: Excessive Sibilance ("S" sounds too loud)
**Symptom:** Vocal "S," "T," "SH" sounds are piercing
**Diagnosis:** Listen to phrases with S sounds - are they way louder than the vocal?
**Root Cause:** Sibilance frequency range (6-8 kHz)

**Solution:**
- **Band:** 6 or 7 (upper Detail or lower Air)
- **Action:** Cut sibilance range
- **Settings:** Bell, 6-7 kHz (find exact spot), -1 to -2 dB, BW 65-70%
- **Alternative:** Use de-esser plugin instead
- **Result:** Controlled sibilance, clear consonants

---

#### Problem: Mix Sounds Dull / Closed / Dark
**Symptom:** Lacks excitement, sounds muffled or closed-in
**Diagnosis:** High-pass test - play only 8 kHz+, is there any energy?
**Root Cause:** Insufficient high-frequency content

**Solution:**
- **Band:** 7 (Air)
- **Action:** High shelf boost
- **Settings:** High shelf, 11-12 kHz, +2 to +3 dB, BW 20% (wide)
- **Which tracks:** Lead vocal, featured instruments
- **Also:** Smaller boost on master (+1 dB shelf @ 13 kHz)
- **Result:** Open, modern, polished sound

---

#### Problem: Mix Sounds Too Bright / Brittle
**Symptom:** Overly bright, harsh highs, brittle character
**Diagnosis:** Did you boost Band 7 on too many tracks?
**Root Cause:** Cumulative high-frequency boost

**Solution:**
- **Band:** 7 (Air)
- **Action:** Reduce or remove air boosts
- **OR:** High shelf cut
- **Settings:** High shelf, 10-12 kHz, -1 to -2 dB, BW 20-25%
- **Result:** Smoother top-end

---

#### Problem: Noisy Recordings / Tape Hiss
**Symptom:** Audible noise floor, hiss, electrical noise
**Diagnosis:** Solo track - hear constant background noise?
**Root Cause:** Noise in high frequencies

**Solution:**
- **Band:** 7 (Air)
- **Action:** High shelf cut to tame
- **Settings:** High shelf, 10-12 kHz, -1 to -2 dB, BW 25%
- **Also:** Consider noise reduction plugin first
- **Result:** Reduced hiss while preserving some highs

---

## Multi-Problem Scenarios

### Scenario: Muddy AND Dull
**Symptoms:** Both low-mid mud AND lacks highs
**Wrong approach:** Just boost highs (doesn't fix mud)
**Right approach:**
1. **First:** Fix mud (Band 2: cut -1.5 dB @ 240 Hz)
2. **Then:** Add air (Band 7: boost +2 dB shelf @ 12 kHz)
3. **Result:** Clean and bright

### Scenario: Harsh AND Buried
**Symptoms:** Vocal is harsh but still getting lost
**Analysis:** Harsh at one frequency, buried at another
**Solution:**
1. **Fix harshness first:** Band 6: cut -1.5 dB @ 4-5 kHz
2. **Then add presence:** Band 5: boost +1.5 dB @ 2.5 kHz
3. **Result:** Present without harshness

### Scenario: Boomy, Boxy, AND Nasal
**Symptoms:** Multiple midrange problems
**Wrong approach:** Cut all three bands aggressively (creates hole)
**Right approach:**
1. **Identify worst problem** - which bothers you most?
2. **Fix that one first** with moderate cut
3. **Check if others still need fixing** - often solving one helps others
4. **If needed**, small cuts on remaining issues
5. **A/B constantly** to avoid over-EQing

---

## The Diagnostic Process

### Step 1: Identify the Problem
**Listen actively:**
- What specifically sounds wrong?
- Where in the frequency spectrum?
- One element or the whole mix?

### Step 2: Isolate the Frequency
**Use the boost & sweep technique:**
1. Create +6 dB boost (narrow BW 70%)
2. Sweep through the relevant band
3. Find where it sounds WORST
4. That's your problem frequency

### Step 3: Apply the Fix
**Cut at the problem frequency:**
1. Change boost to cut
2. Use -1 to -3 dB depending on severity
3. Widen the BW (40-60% typically)
4. Fine-tune amount by ear

### Step 4: Verify
**A/B comparison:**
1. Bypass EQ
2. Enable EQ
3. Ask: "Better or just different?"
4. If better, keep it
5. If just different, reconsider

---

## Quick Troubleshooting

### "I cut the mud but it still sounds muddy"
- **Check:** Did you cut enough? (try -2 to -3 dB)
- **Check:** Did you cut the right frequency? (sweep again)
- **Check:** Did you cut on enough tracks? (most non-bass tracks need it)
- **Check:** Is it actually low-end rumble? (try HP filtering instead)

### "I boosted presence but vocal still buried"
- **Try:** Cut presence on competing tracks instead
- **Check:** Is it actually a volume issue, not EQ?
- **Check:** Is compression squashing the vocal?
- **Check:** Is the arrangement too dense?

### "My mix sounds hollow after EQing"
- **Cause:** Too many cuts, created a frequency hole
- **Fix:** Reduce cut amounts, don't cut all midrange bands aggressively
- **Prevention:** A/B frequently, cut selectively

### "Everything sounds harsh now"
- **Cause:** Cumulative HF boosts (Bands 5 + 6 + 7)
- **Fix:** Remove boosts from supporting tracks, only boost leads
- **Check:** Master bus - are you boosting there too?

---

## Emergency Fixes (In-Session Quick Wins)

### 30-Second Vocal Clarity
1. Band 1: HP @ 90 Hz
2. Band 2: Cut -1.5 dB @ 240 Hz
3. Band 5: Boost +1.5 dB @ 2.5 kHz
Done. Move on.

### 30-Second Mix De-Mud
1. HP everything non-bass @ 80 Hz (Band 1)
2. Cut -1.5 dB @ 240 Hz on all non-bass (Band 2)
Done. Instantly clearer.

### 30-Second Modern Polish
1. Small air boost on vocal/leads: +2 dB shelf @ 12 kHz (Band 7)
2. Subtle air on master: +1 dB shelf @ 13 kHz (Band 7)
Done. Sounds more expensive.

---

**Remember:** Most problems are fixed with cuts. If you're boosting more than cutting, reconsider your approach.
