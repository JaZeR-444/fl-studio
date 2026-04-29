# Do and Don't Rules

## Critical Rules (Breaking These Causes Problems)

### DO: Always Use HP Filter on Bass-Containing Sources
**Rule:** Set HP filter to minimum 100Hz, preferably 150-300Hz depending on source.

**Why:** Prevents phase cancellation in low frequencies when summed to mono.

**Applies to:** Vocals, synths, full mixes, anything with content below 200Hz.

**Exception:** Only if you specifically want phase artifacts (experimental).

---

### DON'T: Apply to 808s, Kicks, or Sub Bass
**Rule:** Never put Hyper Chorus on low-frequency elements.

**Why:** Creates phase issues, weakens bass, causes mono collapse problems.

**Better approach:** Keep bass mono and centered. Use stereo effects on mid-high elements only.

---

### DO: Check Mono Compatibility
**Rule:** Regularly toggle mono using Fruity Stereo Enhancer to check for phase issues.

**Why:** Many playback systems (clubs, phones, Bluetooth) collapse to mono.

**Action:** If sound disappears or becomes hollow in mono, reduce modulation or increase dry signal.

---

### DON'T: Use High Feedback Without Limiting
**Rule:** When experimenting with Pad 1 Y above 60%, place a limiter after Hyper Chorus.

**Why:** High feedback can cause runaway resonance and clipping.

**Safety:** Fruity Limiter set to default settings provides protection.

---

### DO: Use Sends for Multiple Sources
**Rule:** When chorusing multiple elements, use a shared send/return instead of multiple instances.

**Why:** Consistent character, lower CPU usage, unified spatial field.

**Best practice:** Set Hyper Chorus to 100% wet on send, control blend with send levels.

---

### DON'T: Use 8 Voices on Everything
**Rule:** Start with 4 voices, increase to 8 only when needed.

**Why:** 8 voices is overkill for subtle applications; increases CPU usage unnecessarily.

**Guideline:**
- 4 voices: Subtle enhancement, acoustic sources, CPU conservation
- 8 voices: Maximum thickness, supersaw effects, dense textures

---

### DO: Keep Modulation Subtle on Lead Elements
**Rule:** Lead vocals and melodies should use Pad 2 X (modulation amount) below 40%.

**Why:** High modulation creates pitch wobble that undermines melodic accuracy.

**Exceptions:** Background vocals, FX, experimental sections.

---

### DON'T: Forget Plugin Order
**Rule:** Place Hyper Chorus BEFORE reverb and heavy compression.

**Why:** 
- Chorus after reverb = chorusing the reverb (muddy)
- Chorus after heavy compression = pumping artifacts

**Standard chain:** EQ → Hyper Chorus → Compression → Reverb

---

### DO: Match Wet/Dry to Context
**Rule:**
- Inserts: 15-35% wet for subtle enhancement
- Sends: 100% wet, control blend externally
- FX/Creative: 50-100% wet when effect is the point

**Why:** Wrong wet/dry balance makes effect too obvious or too subtle.

---

### DON'T: Ignore CPU Usage
**Rule:** Monitor CPU meter when using multiple 8-voice instances.

**Why:** Hyper Chorus with 8 voices is CPU-intensive. Too many instances = dropouts.

**Solutions:**
- Freeze tracks with heavy chorus
- Use 4 voices where possible
- Share via sends instead of inserts

---

## Important Guidelines (Strong Recommendations)

### DO: Use Noise Knob for Character
**Guideline:** Try 5-15% noise on digital sources for analog warmth.

**Best for:** Vibey, moody, lo-fi applications.

---

### DON'T: Use Fast Auto-Pan on Everything
**Guideline:** Fast Pad 3 speeds (top 40%) should be reserved for FX and special sections.

**Why:** Constant fast movement becomes distracting in a full mix.

---

### DO: Automate for Evolution
**Guideline:** Use automation on Pad 2 and Pad 3 for evolving textures.

**Best for:** Pads, transitions, build-ups, psychedelic sections.

---

### DON'T: Use Identical Settings on Different Sources
**Guideline:** Customize HP filter and modulation for each source type.

**Example:**
- Vocals: HP 250-300Hz, subtle modulation
- Drums: HP 300Hz+, 4 voices
- Synths: HP 100Hz, can be more aggressive

---

### DO: Roll Off Highs When Needed
**Guideline:** Use LP filter (8-12kHz) when chorus creates harsh artifacts.

**Common with:** High feedback settings, bright sources, aggressive modulation.

---

### DON'T: Solo Hyper Chorus for Too Long
**Guideline:** Make decisions in context with other mix elements.

**Why:** Settings that sound great solo can be too much in a mix.

---

### DO: Document Your Settings
**Guideline:** Save wrapper presets with descriptive names.

**Naming:** `[Source]_[Purpose]_[Characteristic]`
- Example: `Vocal_Lead_Subtle`
- Example: `Synth_Supersaw_Aggressive`

---

## Context-Specific Rules

### For Hip-Hop/R&B
- DO use on vocal sends for thickening
- DO use on synth leads for width
- DON'T use on 808s or kick drums
- DO use HP filter aggressively (200Hz+)

### For EDM/Electronic
- DO use 8 voices for supersaw effects
- DO automate parameters for movement
- DON'T overdo it on every element
- DO check mono compatibility for club playback

### For Pop
- DO keep it subtle (15-25% wet on inserts)
- DO use 4 voices for cleaner sound
- DON'T let it sound like an "effect"
- DO prioritize clarity over width

### For Lo-Fi
- DO use noise knob (10-15%)
- DO experiment with LP filter
- DO use 8 voices for texture
- DON'T clean it up too much

---

## Rule Summary Checklist

Before using Hyper Chorus on a source:

- [ ] HP filter set appropriately for source
- [ ] Voice count (4 vs 8) chosen intentionally
- [ ] Feedback under 50% (unless intentional effect)
- [ ] Modulation appropriate for source role (lead vs background)
- [ ] Wet/Dry balanced for context
- [ ] Mono compatibility checked
- [ ] Plugin order correct in chain
- [ ] CPU usage acceptable
- [ ] Limiter in place if using high feedback

---

**Version:** 1.0
**Last Updated:** 2026-02-03
