# Fruity Send: UI Map And Signal Flow

## UI Overview

Fruity Send has one of the simplest interfaces in FL Studio: just four controls (Send To dropdown, Dry knob, Volume knob, Pan knob). Despite its simplicity, it enables powerful routing scenarios. [SRC: IL-MAN]

**Layout (left to right):**
1. **Send To:** Dropdown selector for destination track
2. **Dry:** Knob controlling original signal continuation
3. **Volume:** Knob controlling send level
4. **Pan:** Knob controlling send stereo position

---

## Section 1: Send Destination (Left Side)

### Send To Dropdown
**What it is:** Dropdown menu listing available destination mixer tracks

**Interaction:**
- **Left-click:** Opens dropdown with list of sidechained tracks
- **Select track:** Chooses routing destination
- **Empty list:** Means no tracks are sidechained to source track

**Critical routing rule:** [SRC: IL-MAN]
- Only tracks that are **sidechained to the source track** appear in this list
- FL Studio enforces this to prevent feedback loops
- Must set up sidechain routing BEFORE Fruity Send will work

**How to add tracks to dropdown:**
1. Identify source track (where Fruity Send is loaded)
2. Identify target track (where you want to send signal)
3. In mixer, find source track's routing section
4. Right-click target track's routing button
5. Select "Sidechain to this track"
6. Target track now appears in Fruity Send dropdown

**What tracks are NOT available:**
- The source track itself (prevents immediate feedback)
- Master track (cannot sidechain to master) [UNVERIFIED: test in FL 21]
- Tracks that would create feedback loops (FL detects circular routing)
- Tracks not sidechained to source

---

## Section 2: Dry Control (Left-Center)

### Dry Knob
**Range:** 0% to 100%
**Default:** 100% [UNVERIFIED: confirm default]

**What it controls:**
- How much of the original signal continues down the effect chain
- 100% = full signal passes through (normal operation)
- 0% = signal is completely stopped after Fruity Send (extraction mode)
- 50% = signal is reduced by 50% before continuing

**Common settings:**
- **100% (Parallel processing):** Send copy to target, keep original signal flowing
- **0% (Signal extraction):** Send to target, mute original path (replace routing)
- **50-75% (Hybrid):** Send to target with partial original continuation [less common]

**What to listen for:**
- **100% Dry:** No change to original track's sound (send is parallel)
- **0% Dry:** Original track goes silent if nothing after Fruity Send amplifies it
- **Mid-range Dry:** Original track gets quieter

**Typical use cases:**
- **Dry=100%:** Parallel compression, parallel saturation, pre-fader sends
- **Dry=0%:** DI extraction (replace processed signal with different processing)
- **Dry=0% + effects after Send:** Extract clean signal, then continue with different FX chain

---

## Section 3: Volume Control (Right-Center)

### Volume Knob
**Range:** -∞ dB to +6 dB (approximately) [UNVERIFIED: check exact range]
**Default:** 0 dB (unity gain)

**What it controls:**
- Level of signal sent to target track
- Independent of Dry knob (Dry affects original path, Volume affects send path)

**Common settings:**
- **0 dB (Unity):** Send signal at same level as source
- **-6 to -12 dB:** Reduced send level (common for reverb/delay sends)
- **-∞ dB:** Mute send (effectively disables routing)
- **+3 to +6 dB:** Boosted send level (use cautiously to avoid clipping target)

**Automation target:** **YES** - Volume is automatable for dynamic send effects
- Automate for vocal "throws" (sudden send spikes on specific beats)
- Automate for build-up intensity (gradually increase send to reverb)
- Automate for creative routing changes (fade between dry and heavy-send states)

**What to listen for:**
- Higher Volume = louder signal on target track (more reverb/compression/etc.)
- Lower Volume = quieter signal on target track (subtle effect)
- Volume automation = dynamic effect intensity changes

---

## Section 4: Pan Control (Right Side)

### Pan Knob
**Range:** Hard left (100% L) to Hard right (100% R)
**Default:** Center (0%)

**What it controls:**
- Stereo position of signal sent to target track
- Independent of original signal's pan position
- Affects ONLY the send, not the dry signal

**Common settings:**
- **Center (default):** Maintain original stereo position
- **Hard left/right:** Send signal to one side only (creative stereo placement)
- **Opposite of dry:** Dry signal panned left, send signal panned right (stereo width trick)

**Creative use cases:**
- **Stereo doubling:** Dry=center, Send=hard right (with pitch shift on target) creates stereo width
- **Ping-pong routing:** Send panned opposite of dry for spatial interest
- **Mono compatibility:** Keep send centered to avoid phase issues [less common need]

**What to listen for:**
- Pan affects where the *effect* appears in stereo field
- Example: Dry vocal = center, Send (reverb) = hard left creates asymmetric space

---

## Section 5: Right-Click Functions

### Right-Click on Send To Dropdown
- **No special menu** (just standard dropdown behavior)
- To add targets: Must sidechain tracks in mixer first

### Right-Click on Dry Knob
- **Type exact value:** Enter precise percentage (0.0 to 100.0)
- **Link to controller:** MIDI learn mode
- **Create automation clip:** Auto-generate automation for Dry knob
- **Copy/paste:** Transfer Dry value between instances
- **Reset to default:** Return to 100% [UNVERIFIED]

### Right-Click on Volume Knob
- **Type exact value:** Enter precise dB value
- **Link to controller:** MIDI learn for dynamic send control
- **Create automation clip:** Critical for "throw" effects
- **Copy/paste:** Transfer Volume settings
- **Reset to default:** Return to 0 dB

### Right-Click on Pan Knob
- **Type exact value:** Enter precise pan position (-100 to +100)
- **Link to controller:** MIDI learn for dynamic panning
- **Create automation clip:** Create moving send positions
- **Copy/paste:** Transfer pan settings
- **Reset to default:** Return to center (0%)

---

## Signal Flow Diagrams

### Flow 1: Parallel Processing (Dry=100%, Volume=0dB)
```
Audio enters Fruity Send at Slot X
         ↓
Fruity Send splits signal into two paths:
         ↓
Path A (DRY): 100% signal continues to Slot X+1, X+2... → Track Fader → Output
         ↓
Path B (SEND): 100% signal sent to Target Track Input → Target's Slot 1, 2, 3... → Target Fader → Output
         ↓
Result: Original + Processed versions both reach output (parallel processing)
```

**Example: Parallel Compression**
```
Drum Bus (Source Track):
  Slot 1: Fruity Send (→ Parallel Comp Track, Dry=100%, Vol=0dB)
  Slot 2: Light EQ
  Slot 3: Fruity Limiter
  Fader: 0dB
  → Output: Natural drums with EQ and limiting

Parallel Comp Track (Target):
  Slot 1: Fruity Compressor (8:1 ratio, -20dB threshold, fast attack)
  Fader: -10dB
  → Output: Heavily compressed drums at reduced level

Final Mix: Natural drums + subtle compressed layer = punch + density
```

---

### Flow 2: Pre-Fader Send (Dry=100%, placed early in chain)
```
Audio enters Track at input
         ↓
Slot 1: Fruity Send (Dry=100%, Vol=-6dB) → sends to Reverb Track
         ↓
Slot 2: EQ (shapes tone)
         ↓
Slot 3: Compressor (controls dynamics)
         ↓
Track Fader (automated to fade out)
         ↓
Output: Vocals fade to silence

Meanwhile, Reverb Track receives signal from Slot 1:
  → Unaffected by fader automation
  → Reverb tail sustains at constant level
  → Creates smooth, professional fade-out
```

**Why this matters:**
- Standard mixer sends happen AFTER the fader
- Fruity Send in Slot 1 happens BEFORE fader
- Fader automation doesn't affect Fruity Send's output to reverb track

---

### Flow 3: Signal Extraction (Dry=0%, Volume=100%)
```
Audio enters Fruity Send at Slot X
         ↓
Fruity Send splits signal:
         ↓
Path A (DRY): 0% signal continues (MUTED original path)
         ↓
Path B (SEND): 100% signal sent to Target Track
         ↓
Result: Only sent signal reaches output (extraction/replacement routing)
```

**Example: DI Extraction for Re-Amping**
```
Guitar Track:
  Slot 1: Amp Simulator (creates driven guitar tone)
  Slot 2: Fruity Send (→ Clean DI Track, Dry=0%, Vol=0dB)
  Slot 3: Reverb (would process driven tone, but...)
  → Output: NOTHING (Dry=0% killed the signal)

Clean DI Track:
  Receives post-amp signal from Slot 2
  Slot 1: Different Amp Sim or re-routing
  → Output: Alternative guitar tone from extracted signal
```

**When to use Dry=0%:**
- Extracting signal for completely different processing path
- "Replacing" original signal flow with sent path
- Creative routing where original path is no longer needed after send point

---

## Key Interactions Users Misunderstand

### Misconception 1: "Why is my dropdown empty?"
**Explanation:** Fruity Send only shows tracks that are sidechained to the source track. This is FL Studio's feedback loop prevention.

**Solution:**
1. Right-click target track's routing button on source track
2. Select "Sidechain to this track"
3. Target now appears in Fruity Send dropdown

---

### Misconception 2: "Dry=0% means no send output"
**Explanation:** Dry controls the *original path*, not the send path. Dry=0% mutes original, but send still works at full strength.

**Correct understanding:**
- **Dry knob** = how much continues down *source track's chain*
- **Volume knob** = how much goes to *target track*
- These are independent controls

---

### Misconception 3: "Why does my track go silent when I add Fruity Send?"
**Checklist:**
1. Is Dry set to 0%? (Increase to 100%)
2. Is Volume sent to target, but target is muted? (Check target track)
3. Are there any effects after Fruity Send that might be killing signal?

**Most common cause:** Accidentally set Dry=0% when you meant to do parallel processing (should be Dry=100%)

---

### Misconception 4: "Can I send to multiple tracks?"
**Answer:** Not with one instance. Each Fruity Send routes to ONE destination. For multi-destination sends:
- Use multiple Fruity Send instances in different slots
- Or use standard mixer sends (post-fader) for additional destinations
- Or use Patcher for complex multi-routing

---

### Misconception 5: "Fruity Send adds reverb/delay/etc."
**Reality:** Fruity Send does NOTHING to the audio. It's a pure router. To hear reverb:
1. Send signal to target track (using Fruity Send)
2. Load reverb plugin on TARGET track (not source track)
3. Target track's reverb then processes the sent signal

---

## Workflow Integration Points

### With FL Studio Mixer
1. **Set up sidechain routing first:** Right-click routing buttons before loading Fruity Send
2. **Use mixer's routing panel:** Visualize signal flow (source → target connections)
3. **Monitor both tracks:** Check levels on source AND target to ensure routing works

### With Automation
- **Automate Volume for throws:** Sudden spikes create rhythmic send effects
- **Automate Dry for morphing:** Gradually shift from original to sent signal
- **Automate Pan for movement:** Create evolving stereo send positions

### With Patcher (Advanced)
- Fruity Send can route TO a Patcher instance on target track
- Patcher can then do complex internal routing
- Useful for building sophisticated effect chains triggered by Fruity Send

---

## Performance Tips

### For Pre-Fader Reverb Sends:
1. **Slot position:** Place Fruity Send in Slot 1 (before all other FX)
2. **Dry setting:** 100% (maintain original signal)
3. **Volume setting:** -6 to -12 dB (typical reverb send level)
4. **Target track:** Dedicated reverb track with 100% wet reverb plugin

### For Parallel Compression:
1. **Slot position:** Slot 1 (grab signal before any compression on original track)
2. **Dry setting:** 100% (maintain original dynamics)
3. **Volume setting:** 0 dB (send at full strength)
4. **Target track:** Heavy compression (8:1 ratio or higher), blend fader to taste (-10 to -15 dB)

### For DI Extraction:
1. **Slot position:** Place after desired processing (e.g., after amp sim)
2. **Dry setting:** 0% if replacing original path, 100% if maintaining both
3. **Volume setting:** 0 dB (preserve signal level)
4. **Target track:** Alternative processing chain or clean storage track

---

## CPU & Latency

**CPU usage:** Negligible (Fruity Send is pure routing, no DSP processing)
**Latency:** 0 samples (real-time routing with no delay)
**PDC (Plugin Delay Compensation):** Not applicable (no internal delay)

**Performance impact:**
- Adding Fruity Send instances does NOT increase CPU load significantly
- Safe to use many instances in one project
- Routing itself is handled by FL Studio's mixer engine (very efficient)

---

**Last Updated:** 2026-02-03  
**Source Priority:** [IL-MAN], [REPUTABLE]  
**Verification Status:** Core routing verified, some default values require testing
