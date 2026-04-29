# Workflow: Low-End Smear Warning

## ⚠️ CRITICAL WARNING

**Applying Gross Beat's time manipulation (half-time, stutter) directly to sub-bass, 808s, or kick drums will DESTROY your low-end.**

This is the **#1 mistake** producers make with Gross Beat. Read this entire workflow before applying any time effects to low-frequency content.

[SRC: IL-MAN] + Professional mixing practices

---

## What is Low-End Smear?

### The Problem

Time manipulation works by changing playback speed from the buffer:
- **Pitch drops** as speed decreases (automatic)
- **Phase relationships** shift unpredictably
- **Transient definition** blurs and smears
- **Low frequencies** (20-100 Hz) are especially vulnerable

### What You'll Hear

**Before Gross Beat:**
- Tight, punchy kick
- Defined 808 attack
- Clear bass transients
- Solid low-end foundation

**After Gross Beat (WRONG way):**
- "Flabby" or "wobbly" kick
- 808 loses all punch
- Bass sounds "washed out"
- Phase cancellation in mono
- Muddy, undefined low-end

---

## The Science

### Why Low-End Suffers Most

1. **Longer wavelengths** = more time to complete a cycle
2. **Speed reduction** stretches these wavelengths further
3. **Phase coherence** breaks down between cycles
4. **Transient information** (the "punch") gets blurred

### Technical Explanation

```
Original 808 (60 Hz):
Cycle duration: ~16.7ms

Half-speed (30 Hz):
Cycle duration: ~33.3ms

Result: 
- Attack transient stretched from 5ms to 10ms
- "Punch" is gone
- Sounds "smeared"
```

---

## Safe Methods for Low-End

### Method 1: Bus Processing (RECOMMENDED)

**Apply Gross Beat to the full mix bus, NOT individual bass tracks.**

**Why this works:**
- Full mix context maintains phase relationships
- Low-end is supported by other frequency content
- Effect blends naturally
- Industry standard approach

**Setup:**
```
1. Route all drums to Drum Bus
2. Route all melodic elements to Music Bus  
3. Route both buses + bass to Mix Bus
4. Apply Gross Beat to Mix Bus ONLY
5. Bass remains unprocessed

Result: Effect applies to overall groove, bass stays solid
```

### Method 2: Parallel Processing

**Process a COPY of the bass, blend carefully with dry signal.**

**Setup:**
```
1. Duplicate bass/808 track
2. High-pass duplicate at 100-150 Hz
3. Apply Gross Beat to duplicate only
4. Mix: 30-50% to preserve dry low-end
5. Blend processed mid/high with dry low-end

Chain:
Bass ─┬─[Dry]─────────────┐
      │                   ├──► Mix ─► Output
      └─[HP 100Hz]→[GB]───┘
           (30-50% Mix)
```

**Why this works:**
- Dry low-end (0-100 Hz) maintains punch
- Processed mid/high adds effect character
- Best of both worlds

### Method 3: Frequency Splitting (Advanced)

**Use Patcher or multiband setup to apply Gross Beat selectively.**

**Setup in Patcher:**
```
[Input]
   │
   ├───[Low Pass 100Hz]───┬─[Dry Low]───┐
   │                      │             │
   └───[High Pass 100Hz]──┴─[Gross Beat]┴──► [Mix] ─► Output
                              (effect on mids/highs only)
```

**Benefits:**
- Ultimate control
- No low-end compromise
- Can process different bands differently

**Complexity:** High - requires Patcher knowledge

### Method 4: Volume Effects Only (Safe Alternative)

**Use Volume slots (gates, sidechain) instead of Time slots.**

**Safe for low-end:**
- Sidechain ducking (Slot 18 - F5)
- Rhythmic gates (Slot 4 - D#4)
- Volume fades

**Why this works:**
- Only affects amplitude, not playback position
- No pitch change
- No phase smearing
- Maintains transient integrity

---

## What NOT to Do

### ❌ NEVER Do This:

1. **Apply half-time directly to solo 808 track**
   - Destroys punch completely
   - Makes 808 sound like "jello"

2. **Stutter effects on kick drums**
   - Creates phase chaos
   - Removes all impact

3. **Tape-stop on sub-bass**
   - Unpredictable phase behavior
   - May cause speaker damage at extreme pitches

4. **Extreme time manipulation on bass**
   - Even "subtle" half-time causes damage
   - Not fixable with EQ

---

## Detection: Do I Have Low-End Smear?

### Listen For:

**Mono Check:**
1. Solo your bass/808
2. Switch to mono (use Mono switch or plugin)
3. If bass disappears or changes dramatically = phase issues

**Specific Symptoms:**
- Kick sounds "squishy" instead of "thump"
- 808 attack is soft, not punchy
- Low-end feels "wobbly" or unstable
- Bass sounds different in mono vs stereo
- Mix sounds muddy in low-end

**Visual Check (Fruity Spectroman):**
- Low-end frequencies should be tight, focused
- Smear shows as scattered, unfocused energy below 100 Hz

---

## Fixing Smear (If It Happened)

### Step 1: Identify the Problem
- Bypass Gross Beat on bass track
- Listen for improvement
- Confirm smear is the issue

### Step 2: Choose Solution Method

**Option A: Move to Bus (if arrangement allows)**
- Remove Gross Beat from bass track
- Apply to mix bus instead
- Rebalance mix

**Option B: Parallel Process**
- Keep some Gross Beat effect
- Add parallel dry low-end
- Blend carefully

**Option C: Remove Effect**
- Sometimes best to remove entirely
- Try Volume effects instead
- Or use on other elements

### Step 3: Verify Fix
- Check in mono
- A/B with/without effect
- Verify punch is back

---

## Best Practices Summary

### The Golden Rules

1. **Never time-manipulate solo bass/808s**
   - Use bus processing instead

2. **If you must process bass, use parallel**
   - High-pass the processed signal
   - Blend with dry low-end
   - Keep Mix under 50%

3. **Use Volume effects freely**
   - Gates, sidechain, fades are safe
   - No phase/pitch issues

4. **Always check in mono**
   - Phase issues show up immediately
   - Fix before finalizing

5. **When in doubt, commit to audio and A/B**
   - Render with/without effect
   - Trust your ears

---

## Quick Decision Tree

```
Do you want to apply time manipulation (half-time, stutter)?
│
├─ Is it a bass/808/kick?
│  ├─ YES → Use bus processing OR parallel method
│  └─ NO  → Apply directly, but watch for phase
│
├─ Is it a full mix/beat?
│  └─ YES → Safe to apply directly
│
└─ Is it a melodic element?
   └─ YES → Apply directly, usually safe

Want to use Gross Beat on bass safely?
├─ Use Volume slots (gates, sidechain) ✓
└─ Use Time slots on bus or parallel only ✓
```

---

## Pro Tips

### 1. The "Mix Bus" Approach
This is how professionals do it:
- Gross Beat lives on mix/master bus
- Individual elements stay clean
- Effect is cohesive
- Low-end is protected

### 2. The 808 Split Trick
```
808 Track ─┬─[Sub 0-80Hz]──► Direct to mix
           │
           └─[Mid 80-200Hz]─► Gross Beat ─► Mix
```
- Sub stays solid
- Mid gets the effect
- Best of both worlds

### 3. Commit and Compare
Always render a version:
1. With effect (safely applied)
2. Without effect
3. A/B in your car, phone, monitors
4. Choose what sounds best

---

## Emergency Checklist

If your low-end sounds wrong:
- [ ] Bypass Gross Beat on bass tracks
- [ ] Check if punch returns
- [ ] Verify you're not using time effects on solo bass
- [ ] Check mono compatibility
- [ ] Try bus processing instead
- [ ] Consider Volume effects only
- [ ] Render and A/B test

---

## Summary

**The #1 Rule:** Never apply time manipulation directly to sub-bass or 808s.

**The Solution:** Use bus processing, parallel methods, or Volume effects only.

**The Check:** Always verify in mono for phase issues.

Your low-end is the foundation of your track. Protect it.

---

## Source

Based on:
- [SRC: IL-MAN] Image-Line Gross Beat documentation
- Professional mixing engineering principles
- Phase and frequency response theory
- Industry best practices from hip-hop producers
