# Core Techniques And Best Practices

## 1. The JUNO Pad Formula

**What:** Create lush, atmospheric pads instantly

**Technique:**
1. Select **Sawtooth** waveform
2. Enable **Sub-Oscillator** at 30-50%
3. Set **Filter Cutoff** to 50% (half open)
4. Enable **Chorus I+II** (both buttons)
5. Set envelope: **Attack** 30%, **Release** 40%
6. Add subtle **LFO** to pitch (vibrato)

**What to Listen For:**
- Rich, swirling texture
- Stereo width from chorus
- Smooth attack and release
- Not muddy—filter keeps it defined

**Common Pitfall:** Filter too open = harsh; too closed = muddy
**Fix:** Sweep cutoff while holding chord to find sweet spot

---

## 2. The 80s Bass Punch

**What:** Snappy, punchy bass that defined 80s pop

**Technique:**
1. Select **Pulse** waveform
2. Set **PWM** narrow (20-30%)
3. Enable **Sub-Oscillator** at 100%
4. Set **Filter Cutoff** low (20-30%)
5. Set **Filter Env** to positive (opens filter)
6. Fast envelope: **Attack** 0%, **Decay** 20%, **Sustain** 0%

**What to Listen For:**
- Immediate attack
- Defined pitch (not just "thump")
- Sits well in mix without masking

**Pro Tip:** Enable Chorus I for subtle width on bass

---

## 3. PWM Animation

**What:** Add organic movement to static sounds

**Technique:**
1. Select **Pulse** waveform
2. Set **PWM Source** to **LFO**
3. Set **LFO Rate** slow (1-3 Hz estimated)
4. Adjust **PWM Amount** to taste (20-40%)

**What to Listen For:**
- Evolving timbre (not pitch)
- Breathing quality
- Interest without distraction

**Applications:**
- Pads: Slow, subtle animation
- Bass: Medium speed for "squirm"
- Leads: Fast for vibrato-like effect

---

## 4. Filter Self-Oscillation

**What:** Create pure sine waves from filter resonance

**Technique:**
1. Set **Resonance** to maximum
2. Set **Filter Cutoff** to desired pitch
3. Play notes (filter tracks keyboard)
4. Use **Keyboard Tracking** to tune across range

**What to Listen For:**
- Pure sine-like tone
- Pitched resonance follows keys
- Classic "acid" squeal at high notes

**Warning:** Can be loud—turn down volume

---

## 5. The Arpeggiator Foundation

**What:** Create rhythmic sequences instantly

**Technique:**
1. Enable **Arpeggiator**
2. Set **Mode** to Up/Down
3. Set **Range** to 2-3 octaves
4. Hold multiple notes (chord)
5. Adjust **Rate** to sync with tempo [UNVERIFIED]

**What to Listen For:**
- Automatic pattern generation
- Synced to project tempo
- Variation from held notes

**Variations:**
- Up mode: Ascending patterns
- Down mode: Descending patterns
- Range affects pattern length

---

## 6. Chorus Stacking

**What:** Understand and use the three chorus modes

**Technique:**
| Mode | Sound | Best For |
|------|-------|----------|
| **Off** | Mono, thinner | Bass, when space is limited |
| **I** | Subtle width | Subtle enhancement, bass |
| **II** | Pronounced | Standard 80s sound |
| **I+II** | Maximum | Lush pads, maximum width |

**What to Listen For:**
- I: Gentle stereo spread
- II: Classic JUNO movement
- I+II: Thick, almost reverb-like

**Pro Tip:** I+II uses more CPU—use strategically

---

## 7. Envelope Shaping

**What:** Control sound dynamics with ADSR

**ADSR Guidelines:**

| Sound Type | Attack | Decay | Sustain | Release |
|-----------|--------|-------|---------|---------|
| **Pad** | 20-40% | 30% | 70% | 40-60% |
| **Bass** | 0-5% | 15-25% | 40-60% | 10-20% |
| **Lead** | 0-10% | 20% | 80% | 15-30% |
| **Pluck** | 0% | 10-20% | 0% | 10-20% |
| **Organ** | 0% | N/A | 100% | 0% (Gate mode) |

**What to Listen For:**
- Attack: How quickly sound starts
- Sustain: Level while holding note
- Release: How quickly sound fades

---

## 8. Keyboard Tracking

**What:** Maintain consistent tone across keyboard range

**Technique:**
1. Enable **Keyboard Tracking** (Kybd)
2. Filter cutoff follows note pitch
3. Higher notes = higher cutoff

**What to Listen For:**
- Consistent brightness across range
- No "dead" notes at top or bottom
- Natural filter response

**When to Disable:**
- Creating "one-note" bass sounds
- When you want darker high notes
- Special effects

---

## 9. Noise Percussion

**What:** Create drums and percussion with noise

**Technique:**
1. Select **Noise** waveform (if available) [UNVERIFIED]
2. Or use filtered noise from oscillator
3. Set **Filter Cutoff** high
4. Use **Gate** mode for instant on/off
5. Short **Decay** for percussive sounds

**What to Listen For:**
- Snare-like snap
- Hi-hat sizzle
- Percussive attack

---

## 10. Sub-Oscillator Bass Boost

**What:** Add fundamental low-end to any sound

**Technique:**
1. Enable **Sub-Oscillator**
2. Set level based on need:
   - 20-30%: Subtle warmth
   - 50-70%: Noticeable bass boost
   - 100%: Maximum low-end

**What to Listen For:**
- Weight in low frequencies
- Not overwhelming the main oscillator
- Tight, focused bass

**Applications:**
- Bass sounds: Always 100%
- Leads: 30-50% for body
- Pads: 20-40% for thickness

---

## 11. Velocity Dynamics

**What:** Add expression with velocity sensitivity

**Technique:**
1. Kepler responds to MIDI velocity
2. Harder playing = louder, brighter
3. Softer playing = quieter, darker

**What to Listen For:**
- Dynamic response to playing
- Expressive performance
- Natural variation

**Enhancement:**
- Add velocity to filter cutoff for brightness control
- Use aftertouch if available [UNVERIFIED]

---

## 12. The Initialize Workflow

**What:** Start fresh for custom patch creation

**Technique:**
1. Initialize patch (return all to defaults)
2. Start with **Sawtooth** or **Pulse**
3. Set **Filter Cutoff** to middle
4. Build sound step by step:
   - Oscillator first
   - Filter second
   - Envelope third
   - Chorus last

**What to Listen For:**
- Each element contributing clearly
- No accidental settings
- Controlled, intentional sound

---

## Common Pitfalls & Fixes

| Pitfall | Symptom | Fix |
|---------|---------|-----|
| **Filter too open** | Harsh, digital sound | Lower cutoff, add resonance |
| **No sub-osc on bass** | Thin bass | Enable sub-osc at 100% |
| **Forgot chorus** | Thin, lifeless sound | Enable Chorus I or II |
| **Attack too slow** | Late, lagging notes | Reduce attack to 0-10% |
| **Release too short** | Choppy sound | Increase release |
| **Too much resonance** | Squealing, harsh | Reduce resonance |
| **Wrong octave range** | Too high/low | Adjust Range selector |

## Automation Ideas

1. **Filter Sweeps**
   - Automate cutoff for build-ups
   - Classic synth effect

2. **PWM Movement**
   - Automate PWM amount
   - Creates evolving pads

3. **Chorus Toggle**
   - Switch chorus on/off for sections
   - Instant arrangement change

4. **LFO Rate**
   - Speed up LFO for intensity
   - Slow down for relaxation

---

**Version:** 1.0
**Sources:** [IL-MAN], [SRC: REPUTABLE]
**Last Updated:** 2026-02-03
