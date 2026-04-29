Tags: hip-hop/rap | R&B | melodic

## Vocodex Instrument Workflows

### Lead Vocal Vocoding

**Starting Chain:**
1. **Input:** Clean lead vocal (no heavy processing before vocoder)
2. **Sidechain:** Synth carrier (usually saw or square wave)
3. **Bands:** 16-24 bands for clear articulation
4. **Attack:** 10ms (preserves transients)
5. **Release:** 100ms (smooth decay)

**A/B Test Method:**
1. Set bands to maximum, carrier at moderate level
2. Speak/sing a phrase
3. Reduce bands to 8, then back to max
4. Listen: "Can you still understand every word at minimum bands?"

**Quick Fix Path:**
- If vocals unintelligible → Increase bands (up to 24)
- If too robotic → Lower attack time (5-8ms)
- If pumping → Adjust release time (shorter for punchy, longer for smooth)
- If harsh → High-pass carrier at 200Hz

### Background Vocal Stacking

**Settings:**
- Bands: 16
- Attack: 15ms
- Release: 150ms
- Shift: +2 semitones (adds brightness)
- Wet/Dry: 40/60 (more vocal, less robot)

**When to Use:**
- Intro vocals ("oohs" and "aahs")
- Background "vocals" created from spoken word
- Creating "chorus" effect from single vocal take
- Hypnotic/atmospheric vocal textures

**Troubleshooting:**
- If too synthesized → Increase Dry, reduce Shift
- If too muddy → High-pass carrier above 150Hz
- If words unclear → Reduce band count slightly (12 bands may help)

### 808 Talkbox Effect

**Settings:**
- Carrier: Sine wave (cleanest)
- Bands: 8-12 (more bands = more intelligible)
- Attack: 5ms (fast attack for "talk")
- Release: 50ms (short for punch)
- Wet/Dry: 70/30 (strong effect)

**Why This Works:**
- Sine carrier sounds most like human mouth cavity
- Fewer bands create "mumbled" talkbox quality
- Fast attack catches the "T" and "K" sounds
- Short release doesn't muddy between words

**Best For:**
- 808 ad-libs ("yeah!", "uh!")
- Traded vocals
- Hypnotic hook phrases
- Creative vocal effects

### Synth-Vocal Hybrid

**Settings:**
- Carrier: Saw wave + low-pass filter
- Bands: 16
- Attack: 8ms
- Release: 80ms
- Mix: 50/50

**Creation Steps:**
1. Create synth pad with saw wave
2. Low-pass filter at 800Hz
3. Route through Vocodex with vocal input
4. Blend to taste

**Exit Criteria:**
- Should sound neither fully synth nor fully vocal
- Creates a new timbre entirely
- Works best as a textural element, not primary melody

### Quick Reference Table

| Goal | Bands | Carrier | Attack | Release | Wet | Use Case |
|------|-------|---------|--------|---------|-----|----------|
| Clear vocal | 24 | Saw | 10ms | 100ms | 50% | Main effect |
| Talkbox 808 | 10 | Sine | 5ms | 50ms | 70% | Ad-libs |
| Background texture | 16 | Saw+LP | 15ms | 150ms | 40% | Atmosphere |
| Robot voice | 32 | Square | 2ms | 200ms | 60% | Effect |
| Whisper effect | 8 | Noise | 20ms | 300ms | 35% | Creepy/vintage |
| Hybrid synth | 16 | Saw+LP | 8ms | 80ms | 50% | New timbre |
