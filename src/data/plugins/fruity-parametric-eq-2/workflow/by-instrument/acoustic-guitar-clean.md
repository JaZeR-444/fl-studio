# Workflow: Acoustic Guitar Clarity

**Goal:** Remove "boom" and "honk" to reveal the natural sparkle of the instrument.

**Preset Reference:** `Guitar - Acoustic Clean`

---

## 🛠️ The Chain

Acoustic guitars often take up too much space. We need to carve them out.

### Step 1: Control the Boom (Band 1 🟣)

**Gentle High Pass**

- **Freq:** 60 - 80 Hz
- **Gain:** 0 dB (Cut)
- **Use Case:** Removes the "thump" from the body that clashes with the kick/bass. Keep this lower (60 Hz) if it's a solo performance, higher (100 Hz) if it's in a dense mix.

### Step 2: The "Wood" Tone (Band 3 🟠)

**De-Box**

- **Freq:** ~420 Hz
- **Gain:** -2 to -3 dB
- **Why:** This removes the cheap "plywood" sound and makes the guitar sound like a more expensive instrument.

### Step 3: Sparkle (Band 6 🔵)

**String Detail**

- **Freq:** 5000 Hz (5 kHz)
- **Gain:** +1 to +2 dB
- **Why:** Brings out the sound of the pick hitting the strings. Essential for rhythm tracks.

### Step 4: Air (Band 7 🔵)

**Openness**

- **Freq:** 12 kHz (High Shelf)
- **Gain:** +1.5 dB
- **Why:** Adds dimension and space.

---

## 👂 Listener Guide

- **Too thin?** Turn off the High Pass (Band 1) or reduce the cut on Band 3.
- **Too harsh/clicky?** Reduce the boost on Band 6.
- **Too boom-y?** Use **Band 2** to cut a wide bell at 200 Hz.
