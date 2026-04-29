# Workflow: Lead Vocal Polish

**Goal:** Create a modern, professional lead vocal that sits "on top" of the mix without being harsh.

**Preset Reference:** `Vocal Polish - Lead`

---

## 🛠️ The Chain

This workflow uses a 4-band approach to shape the vocal.

### Step 1: Clean (Band 1 🟣)

**Low-End Cleanup**

- **Action:** High Pass Filter to remove rumble.
- **Freq:** 80 - 100 Hz
- **Why:** Vocals don't need sub-bass frequencies. This headroom belongs to the kick and bass.

### Step 2: Clear (Band 2 🌸)

**De-Mud**

- **Action:** Bell Cut.
- **Freq:** ~250 Hz (Sweep 200-300 Hz)
- **Amount:** -1.5 to -3 dB
- **Why:** Removes the "muffled" quality and separates the vocal from guitars/keys.

### Step 3: Present (Band 5 🟢)

**Intelligibility**

- **Action:** Bell Boost.
- **Freq:** ~2.5 k - 2.8 k Hz
- **Amount:** +1.5 dB (Wide BW)
- **Why:** This is where the human ear hears lyrics. A small boost here brings the singer forward.
- **Warning:** If the vocal is already harsh or sibilant, SKIP this or use a De-Esser first.

### Step 4: Shine (Band 7 🔵)

**Air & Gloss**

- **Action:** High Shelf Boost.
- **Freq:** 12 kHz
- **Amount:** +2.5 dB
- **Why:** Adds that expensive "studio sheen" and breathiness.

---

## 🔄 Adjustment Guide

| If it sounds...      | Do this...                                                 |
| -------------------- | ---------------------------------------------------------- |
| **Thin**             | Reduce the cut on Band 2, or add +1 dB at 180 Hz (Body).   |
| **Harsh**            | Disable Band 5 boost. Cut Band 6 (~4.5 kHz) by -1 dB.      |
| **Sibilant ("Sss")** | Cut Band 6 (~6 kHz) or use a De-Esser. Reduce Band 7 gain. |
| **Boxy**             | Add a cut on Band 3 (~400 Hz).                             |
