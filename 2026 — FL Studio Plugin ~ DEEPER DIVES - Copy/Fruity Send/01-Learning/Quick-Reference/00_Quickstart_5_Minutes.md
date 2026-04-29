# Fruity Send - Quickstart (5 Minutes)

## The Fastest Way to Get Results

### Step 1: Create Your Routing (30 seconds)
1. **Create two mixer tracks:**
   - Track 1: "Vocals" (source)
   - Track 2: "Reverb Bus" (destination)

2. **Sidechain Track 2 to Track 1:**
   - Right-click the small arrow icon on Track 2's routing button in Track 1's send panel
   - Select "Sidechain to this track"
   - *This enables Fruity Send to route from Track 1 → Track 2*

[SRC: IL-MAN]

---

### Step 2: Load Fruity Send (10 seconds)
1. Click an empty slot on Track 1 (Vocals)
2. Navigate to: **Fruity** → **Fruity Send**
3. Load it (it appears as a small routing plugin)

[SRC: IL-MAN]

---

### Step 3: Configure the Send (20 seconds)
1. **Send To dropdown:** Select "Track 2" (Reverb Bus)
2. **Volume:** Leave at 100% (unity gain)
3. **Dry:** Leave at 100% (vocal continues to Track 1's fader)
4. **Pan:** Leave at center (same position as original)

**Result:** Vocals now send to Track 2 *before* Track 1's fader. Lower Track 1's fader → vocal gets quiet, but reverb send stays loud (pre-fader send).

[SRC: IL-MAN]

---

### Step 4: Add an Effect on the Destination (30 seconds)
1. Go to Track 2 (Reverb Bus)
2. Load **Fruity Reeverb 2** (or any reverb)
3. Set **Dry:** 0%, **Wet:** 100% (100% reverb, no dry signal)
4. Adjust reverb time, size, etc. to taste

**Result:** Track 2 now outputs pure reverb, sourced from Track 1.

[SRC: IL-MAN]

---

### Step 5: Test the Pre-Fader Behavior (20 seconds)
1. **Play your project**
2. **Automate Track 1's fader** from 0 dB → -∞ dB over 2 bars
3. **Listen:** Vocal fades out, but reverb *stays loud*

**Why?** Fruity Send happens *before* the fader (pre-fader send). Standard mixer sends happen *after* the fader (post-fader).

[SRC: IL-MAN]

---

## Common First-Use Scenarios

### Scenario 1: Parallel Compression (New York Style)
**Goal:** Compress drums heavily without losing transients.

**Setup (1 minute):**
1. Track 1: Drums (source)
2. Track 2: "Drum Crush" (parallel compression bus)
3. Sidechain Track 2 to Track 1
4. Load Fruity Send on Track 1, Slot 1, send to Track 2
5. Set Dry: 100% (drums continue normally)
6. Load Fruity Limiter on Track 2, set **COMP:** 8:1, **THRESH:** -20 dB, **Wet:** 100%
7. Blend Track 2's fader to taste (10-30% is typical)

**Result:** Drums have punch (Track 1) + density (Track 2).

[SRC: REPUTABLE - New York compression technique]

---

### Scenario 2: Extract Clean DI from Processed Guitar
**Goal:** You have a heavily distorted guitar on Track 1. You want to extract the *clean* signal before distortion for re-amping later.

**Setup (1 minute):**
1. Track 1: Guitar → Slot 1 (Fruity Send) → Slot 2 (Distortion plugin)
2. Track 2: "Clean DI" (destination)
3. Sidechain Track 2 to Track 1
4. Configure Fruity Send (Slot 1): Send To: Track 2, Dry: 100%
5. Load distortion on Slot 2 of Track 1

**Result:**
- Track 1 output: Distorted guitar (Slot 2's distortion is applied)
- Track 2 output: Clean guitar (extracted *before* Slot 2's distortion)

**Use case:** Record Track 2 to audio for later re-amping experiments.

[SRC: IL-MAN]

---

### Scenario 3: Vocal Throw (Dub Delay)
**Goal:** Create a "delay throw" effect where the delay is independent of the vocal's volume fader.

**Setup (1 minute):**
1. Track 1: Vocals
2. Track 2: "Delay Throw"
3. Sidechain Track 2 to Track 1
4. Load Fruity Send on Track 1, send to Track 2
5. Load Fruity Delay 3 on Track 2 (Wet: 100%, Feedback: 50%, Time: 1/4)
6. Automate Fruity Send's **Volume knob** from 0% → 100% for 1 bar (at the end of a phrase)

**Result:** Delay throw happens on cue, regardless of vocal fader position.

[SRC: REPUTABLE - dub mixing techniques]

---

## Quick Troubleshooting

### "The Send To dropdown is empty!"
**Cause:** You haven't sidechained any tracks to the current track.  
**Fix:** Right-click the destination track's send icon on the source track → "Sidechain to this track"

---

### "I can't hear the send!"
**Cause:** Destination track's fader is down, or Send Volume is 0%.  
**Fix:** Check both Track 2's fader and Fruity Send's Volume knob.

---

### "The original track is silent after adding Fruity Send!"
**Cause:** Dry is set to 0% (signal is extracted completely).  
**Fix:** Set Dry to 100% to maintain the original signal path.

---

### "I'm getting phase/comb filtering!"
**Cause:** Both the original track and the send track are audible, creating phase interaction.  
**Fix:** Set Dry to 0% (send only), or use the destination track for 100% wet FX (no dry signal on the FX return).

---

## Next Steps (After 5 Minutes)

1. **Read:** `01-Learning/Concepts/00_What_It_Is_And_When_To_Use.md` for deeper understanding
2. **Read:** `01-Learning/Concepts/02_Core_Techniques_And_Best_Practices.md` for advanced routing
3. **Try:** `03-Workflows/by-goal/` for specific use cases (reverb, compression, DI extraction)
4. **Experiment:** Multiple Fruity Send instances on one track (send to 3 different buses simultaneously)

---

## Key Concepts to Remember

| Concept | Explanation |
|---------|-------------|
| **Pre-fader** | Fruity Send happens *before* the track fader (independent of volume) |
| **Insert position** | You can place Fruity Send anywhere in the FX chain (extract signal mid-chain) |
| **Dry control** | 0% = signal stops here; 100% = signal continues down the chain |
| **Sidechain required** | Destination track must be sidechained first (FL Studio's routing validation) |

[SRC: IL-MAN]

---

**Time to mastery:** 5 minutes to route, 1 hour to internalize pre-vs-post fader concepts, 1 day to build complex parallel workflows.
