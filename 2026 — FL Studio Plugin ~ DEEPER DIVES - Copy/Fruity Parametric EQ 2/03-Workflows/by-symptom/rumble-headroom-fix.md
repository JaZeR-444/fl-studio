# Workflow: Cleaning Rumble & Improving Headroom

**Symptom:** The mix looks loud on meters but sounds quiet. The standard limiter is "pumping" or distorting easily. Speakers are flapping but you don't hear much bass.

**Primary Suspect:** Subsonic Noise (0 - 40 Hz).

---

## 🛠️ The Fix (Priority 1)

This is the "invisible killer" of loud mixes.

### Step 1: The Diagnosis

Look at the spectral analyzer (the moving background in Parametric EQ 2).

- Do you see purple activity down at 20 Hz even when the bass isn't playing?
- That is **rumble** (AC hum, mic stand bumps, breathing). It eats energetic space but provides no musical value.

### Step 2: The Safety Filter (Band 1 🟣)

Apply this to **every track** except the Kick and Sub-Bass.

- **Type:** High Pass
- **Freq:** 80 - 100 Hz
- **Steepness:** Default
- **Result:** You just recovered ~3-6 dB of headroom instantly.

### Step 3: The Bass Cleanup

Even your Bass and Kick don't need _infinite_ low end.

- **Action:** High Pass on Kick/Bass
- **Freq:** 20 - 30 Hz
- **Steepness:** Steep
- **Why:** Removes DC offset and useless subsonic flab. Makes the bass sound "tighter" and less "floppy."

---

## 📉 Why High Pass?

A limiter reacts to the _loudest_ peaks. Low frequencies carry the most energy. If your 30 Hz rumble is peaking, the limiter clamps down on your _Vocals_ (at 2 kHz), making the whole song quieter.
**Cut the rumble = Louder potential volume.**

**Reference Rule:**

> `rumble_or_headroom_loss` → Band 1: HP Clean 80
