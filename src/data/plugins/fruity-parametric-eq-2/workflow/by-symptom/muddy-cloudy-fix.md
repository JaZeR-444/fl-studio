# Workflow: Fixing a Muddy or Cloudy Mix

**Symptom:** The mix sounds "thick," "congested," or like there is a blanket over the speakers. Instruments fight for space, and vocals lack clarity.

**Primary Suspect:** Low-Mid Frequency Buildup (200 - 350 Hz).

---

## 🛠️ The Fix (Priority 1)

This is a critical issue that must be addressed before adding polish.

### Step 1: Diagnosis

Solo the "warm" instruments in your mix one by one:

- Guitars
- Synths / Pads
- Vocals
- Snare Drum

Listen for a "woolly" or "muffled" quality.

### Step 2: The Action (Band 2 🌸)

Use the **De-Mud 250** archetype on the offending tracks.

| Parameter   | Setting       | Note                                      |
| ----------- | ------------- | ----------------------------------------- |
| **Band**    | 2 (Pink)      |                                           |
| **Type**    | Bell          |                                           |
| **Freq**    | 250 Hz        | _Sweep 200-300 Hz to find the worst spot_ |
| **Ammount** | -1.5 to -3 dB | _Start small!_                            |
| **BW**      | 35%           | _Wide-ish cut_                            |

### Step 3: Check Context

Un-solo the track. Does the whole mix sound clearer?

- **Yes:** Good job.
- **No, now it sounds thin:** You cut too much. Reduce the cut to -1 dB or try a wider bandwidth (lower %).

### Step 4: Advanced Separation

If vocals are fighting with guitars/keys in this range:

1.  **Cut more** (-3 dB) on the backing instrument (guitar/keys).
2.  **Cut less** (-1 dB) or leave neutral on the lead vocal.
3.  This creates a "pocket" for the vocal to sit in.

---

## 💡 Pro Tip

**"Mud accumulates."**
A -0.5 dB cut on 10 tracks = -5 dB total mud reduction. You often don't need heavy cuts on single tracks if you clean up everything slightly.

**Reference Rule:**

> `muddy_or_cloudy` → Band 2: De-Mud 250
