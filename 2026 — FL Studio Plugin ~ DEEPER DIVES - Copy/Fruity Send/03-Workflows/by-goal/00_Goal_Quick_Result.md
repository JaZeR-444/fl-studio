# Fruity Send - Goal: Quick Result (Parallel Reverb in 2 Minutes)

## The Fastest Win: Parallel Reverb Send

**Time to complete:** 2 minutes  
**Skill level:** Beginner  
**Result:** Professional reverb routing that keeps vocals dry and upfront

[SRC: IL-MAN]

---

## Step-by-Step Setup

### Step 1: Create Mixer Tracks (20 seconds)
1. Track 1: "Lead Vocal" (source)
2. Track 2: "Vocal Reverb" (destination)

### Step 2: Sidechain Connection (10 seconds)
1. On Track 1, find Track 2's send knob
2. Right-click the small arrow icon next to it
3. Select "Sidechain to this track"

### Step 3: Load Fruity Send (10 seconds)
1. Click empty slot on Track 1
2. Navigate: Fruity → Fruity Send
3. Load plugin

### Step 4: Configure Send (20 seconds)
- **Send To:** Track 2 (Vocal Reverb)
- **Volume:** 60%
- **Dry:** 100%
- **Pan:** Center

### Step 5: Add Reverb on Destination (30 seconds)
1. Go to Track 2 (Vocal Reverb)
2. Load Fruity Reeverb 2
3. Set: **Dry:** 0%, **Wet:** 100%
4. Choose preset: Medium Room or Hall
5. Adjust **Size:** 70%, **Damping:** 50%

### Step 6: Blend to Taste (10 seconds)
1. Play your project
2. Adjust Track 2's fader: -8 to -12 dB
3. Done!

[SRC: IL-MAN + REPUTABLE mixing practices]

---

## Result Check

**What you should hear:**
- Vocal stays dry and upfront
- Reverb adds depth and space
- Vocal fader automation doesn't affect reverb level (pre-fader send)

**If it sounds wrong:**
- Too washy? Lower Track 2's fader
- No reverb? Check Send Volume is 60%+
- Phasey? Verify Reeverb 2 Dry is 0%

---

## Routing Diagram

```
Track 1 (Vocal)
  ↓
[Fruity Send] ——→ Track 2 (Reverb Bus)
  ↓                    ↓
Continue         [Fruity Reeverb 2]
  ↓                    ↓
Track 1 Fader    Track 2 Fader (-10 dB)
  ↓                    ↓
  ↓←——— MIX ————→     ↓
         ↓
    Master Output
```

---

## Next-Level Tweaks (Optional, +2 min)

### Add Pre-Delay for Clarity
On Track 2's Fruity Reeverb 2:
- **Pre-Delay:** 50-80 ms
- **Result:** Reverb starts after vocal transient = clearer, more professional

### Add EQ to Reverb Bus
Insert Fruity Parametric EQ 2 *before* Reeverb 2 on Track 2:
- **Low Cut:** 300 Hz (don't reverb low-mids)
- **Result:** Cleaner reverb, no mud

### Automate for Dynamics
Create automation clip for Send Volume:
- Verse: 40%
- Chorus: 70%
- **Result:** More reverb during chorus = bigger sound

[SRC: REPUTABLE - advanced reverb techniques]

---

## Why This Is Pro-Level Routing

**Standard mixer sends:**
- Happen *after* track fader
- Fader down = reverb down

**Fruity Send:**
- Happens *at insert position* (before fader)
- Fader down = vocal down, reverb *stays loud*
- **Use case:** Vocal fade-outs where reverb tail lingers

[SRC: IL-MAN]

---

## Common Mistakes (And Fixes)

| Problem | Cause | Fix |
|---------|-------|-----|
| "Send To" dropdown empty | No sidechain | Right-click Track 2 send → Sidechain |
| No reverb audible | Reverb track fader down | Raise Track 2 fader to -10 dB |
| Phasey/hollow sound | Reverb has Dry signal | Set Reeverb 2 Dry to 0% |
| Vocal disappears | Fruity Send Dry is 0% | Set Dry to 100% |

[SRC: IL-KB troubleshooting]

---

## Variation: Parallel Delay

**Change Step 5 to:**
1. Load Fruity Delay 3 on Track 2
2. Set: **Time:** 1/4, **Feedback:** 40%, **Mix:** 100%
3. Blend Track 2 at -12 dB

**Result:** Rhythmic delay send (works great for vocals, leads)

[SRC: REPUTABLE - delay mixing]

---

## Hip-Hop/R&B Context

**Hip-hop vocal treatment:**
- Use less reverb (40-50% Send Volume)
- Choose smaller room size (50-60%)
- Keep vocals dry and upfront (genre norm)

**R&B vocal treatment:**
- Use more reverb (60-80% Send Volume)
- Choose larger room/hall (70-90%)
- Blend for smoothness and polish

[SRC: REPUTABLE - genre-specific mixing]

---

**Time invested:** 2 minutes  
**Benefit:** Professional reverb routing for life  
**Next:** Try `02_Goal_Mix_Or_Control.md` for pre-fader send techniques
