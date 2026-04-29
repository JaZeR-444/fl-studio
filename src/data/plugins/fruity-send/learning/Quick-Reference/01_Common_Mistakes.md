# Fruity Send - Common Mistakes

## Top 10 Mistakes (And How to Fix Them)

### 1. Forgetting to Sidechain the Destination Track
**Mistake:** Loading Fruity Send → "Send To" dropdown is empty.

**Why it happens:** FL Studio requires explicit sidechain connection for routing validation (prevents feedback loops).

**Fix:**
1. Right-click the destination track's send icon on the source track
2. Select "Sidechain to this track"
3. Now Fruity Send's dropdown will show the destination track

**Pro tip:** Sidechain *first*, then load Fruity Send.

[SRC: IL-MAN]

---

### 2. Using Fruity Send When Standard Sends Would Work
**Mistake:** Using Fruity Send for basic reverb/delay sends that don't need pre-fader behavior.

**Why it happens:** Misunderstanding when pre-fader sends are necessary.

**When to use standard sends:**
- Basic reverb/delay routing
- Post-fader effects (level follows track fader)
- Simple bus routing

**When to use Fruity Send:**
- Pre-fader effects (level independent of track fader)
- Mid-chain signal extraction (before specific FX in the chain)
- Parallel processing with complex routing

**Fix:** Use standard mixer sends (bottom of mixer) unless you specifically need insert-position routing.

[SRC: IL-MAN + REPUTABLE mixing practices]

---

### 3. Setting Dry to 0% Unintentionally
**Mistake:** Original track goes silent after adding Fruity Send.

**Why it happens:** Dry defaults to 100%, but accidental knob adjustment sets it to 0% (signal extraction mode).

**What happens:**
- Dry 0%: Signal is *extracted* from the chain (original track goes silent)
- Dry 100%: Signal continues normally (parallel routing)

**Fix:** Check Dry knob. For parallel processing, set Dry to 100%. For signal extraction (e.g., clean DI), set Dry to 0%.

[SRC: IL-MAN]

---

### 4. Creating Feedback Loops
**Mistake:** Trying to send Track 1 → Track 2 → Track 1 (circular routing).

**Why it happens:** Misunderstanding FL Studio's feedback prevention system.

**What happens:** FL Studio blocks the routing (destination track won't appear in Send To dropdown).

**Fix:** FL Studio prevents this automatically, but if you need feedback-style processing:
- Use Patcher for controlled internal feedback loops
- Use external hardware routing
- Design your signal flow to avoid circles

[SRC: IL-MAN]

---

### 5. Forgetting to Set Destination Track to 100% Wet
**Mistake:** Reverb/delay bus has Dry signal, creating phase issues or double-tracking.

**Why it happens:** Destination track's FX plugin defaults to 50% Dry/Wet.

**What happens:**
- Dry signal on reverb bus = phase cancellation when combined with original
- "Swimmy" or "hollow" sound due to comb filtering

**Fix:** On the destination track's FX (e.g., Fruity Reeverb 2), set:
- **Dry:** 0%
- **Wet:** 100%

**Result:** Destination track outputs pure effect (no dry signal).

[SRC: REPUTABLE - mixing best practices]

---

### 6. Confusing Pre-Fader with Pre-FX
**Mistake:** "Pre-fader means before all effects, right?"

**Why it happens:** Terminology confusion between "pre-fader" and "pre-FX."

**Clarification:**
- **Pre-fader:** Signal is sent *before* the track's volume fader (not affected by fader automation)
- **Pre-FX:** Signal is sent *before* effects (depends on Fruity Send's position in the chain)

**Example:**
- Fruity Send in Slot 1 → sends *before* Slot 2's FX (pre-FX)
- Fruity Send in Slot 10 → sends *after* Slots 1-9's FX (post-FX, but still pre-fader)

**Fix:** Think of Fruity Send as "insert-position routing" — it extracts signal from its current position in the chain.

[SRC: IL-MAN]

---

### 7. Ignoring Gain Staging on Send Volume
**Mistake:** Leaving Send Volume at 100% for all scenarios.

**Why it happens:** Assuming "100% = default" without considering destination track's gain structure.

**Problem:** If source is hot (e.g., -6 dBFS) and you send at 100% to a compressor expecting -18 dBFS input, you'll overload the compressor.

**Fix:**
- **Check destination track's input level:** Use Fruity dB Meter on the destination track
- **Adjust Send Volume:** Lower to 30-50% if destination is clipping
- **Or adjust destination track's gain:** Use Fruity Balance to attenuate input

**Pro tip:** Send Volume above 100% is possible (gain boost), but use cautiously to avoid clipping.

[SRC: REPUTABLE - gain staging best practices]

---

### 8. Not Labeling Send Tracks
**Mistake:** Track 2, Track 3, Track 4 with no names → "Where is the reverb bus again?"

**Why it happens:** Skipping mixer track naming in rush to route.

**Problem:** In a 50-track session, unlabeled buses are a nightmare to navigate.

**Fix:**
1. Right-click mixer track → Rename
2. Use clear names: "Reverb Bus," "Parallel Comp," "Delay Throw," "Clean DI," etc.
3. Color-code sends (e.g., all FX buses = blue)

**Pro tip:** Prefix FX buses with "FX -" (e.g., "FX - Reverb") to group them in the mixer.

[SRC: REPUTABLE - mixing workflow best practices]

---

### 9. Overusing Fruity Send for Simple Tasks
**Mistake:** Using 10 instances of Fruity Send for basic bus routing.

**Why it happens:** Not understanding standard mixer sends can handle most routing.

**Problem:** Clutters the FX chain, harder to visualize signal flow.

**When standard sends are better:**
- Basic reverb/delay routing (post-fader is fine)
- Subgroup buses (drums → drum bus)
- Simple parallel compression (post-fader blend is fine)

**When Fruity Send is necessary:**
- Mid-chain extraction (e.g., send *before* distortion)
- Pre-fader independence (e.g., vocal fades out, reverb stays loud)
- Multiple simultaneous extractions from different chain positions

**Fix:** Use standard sends (bottom of mixer) as your default. Use Fruity Send only when insert-position routing is required.

[SRC: IL-MAN + REPUTABLE mixing practices]

---

### 10. Forgetting About Latency Compensation
**Mistake:** "My parallel compression sounds phasey!"

**Why it happens:** Destination track's FX introduces latency → phase misalignment with original track.

**Problem:** FL Studio auto-compensates for plugin latency, but if routing is complex, you may hear phase issues.

**Fix:**
- **Check latency:** Use Fruity dB Meter on both tracks → verify latency values are compensated
- **Manual compensation:** If needed, use Fruity Delay Bank to delay the original track (rare)
- **Simplify routing:** If phase issues persist, check for circular routing or excessive plugin latency

**Pro tip:** FL Studio's PDC (Plugin Delay Compensation) handles this automatically in most cases. If you hear phasing, the issue is usually elsewhere (e.g., duplicate dry signals).

[SRC: IL-MAN - PDC documentation]

---

## Quick Reference: "Am I Making This Mistake?"

| Symptom | Likely Mistake | Fix |
|---------|---------------|-----|
| "Send To" dropdown is empty | Forgot to sidechain | Sidechain destination track first |
| Original track is silent | Dry set to 0% | Set Dry to 100% for parallel routing |
| Phasey/hollow sound | Destination has Dry signal | Set destination FX to 100% Wet |
| Can't route Track A → B → A | Feedback loop | FL Studio blocks this; redesign routing |
| Clipping on destination track | Send Volume too high | Lower Send Volume or destination input gain |
| Can't find my reverb bus | Unlabeled tracks | Rename and color-code mixer tracks |
| Using Fruity Send everywhere | Overuse for simple tasks | Use standard mixer sends as default |

[SRC: IL-MAN + IL-KB troubleshooting]

---

## Advanced Mistake: Parallel Processing Phase Issues

**Mistake:** Parallel compression sounds weak or phasey instead of punchy.

**Diagnosis:**
1. **Check:** Is destination FX set to 100% Wet? (Should be)
2. **Check:** Is original track continuing with Dry 100%? (Should be)
3. **Check:** Are both tracks in phase? (Use phase correlation meter)

**Common causes:**
- Destination FX has Dry signal → phase cancellation
- Original track is being processed *after* the send → timing mismatch
- Compressor has "lookahead" enabled → introduces latency

**Fix:**
- Destination FX: Dry 0%, Wet 100%
- Original track: Dry 100% (continues normally)
- Disable lookahead on compressor, or let FL Studio's PDC handle it

[SRC: REPUTABLE - parallel processing troubleshooting]

---

## Beginner Mindset Shifts

### Old thinking: "Sends happen at the end of the track (post-everything)"
**New thinking:** "Fruity Send happens at its *insert position* in the FX chain"

### Old thinking: "I need Patcher for complex routing"
**New thinking:** "Fruity Send can handle most insert-position routing without Patcher"

### Old thinking: "Pre-fader and pre-FX are the same"
**New thinking:** "Pre-fader = before volume fader. Pre-FX = before FX (depends on Send position)"

[SRC: REPUTABLE - mixing education resources]

---

**Next steps:**
- Read `02_Best_Settings_Starting_Points.md` for recommended configurations
- Read `01-Learning/Concepts/02_Core_Techniques_And_Best_Practices.md` for advanced routing strategies
- Try workflows in `03-Workflows/by-goal/` to practice mistake-free setups
