# Workflow: Fixing Thin or Weak Audio

**Symptom:** The instrument sounds small, frail, or lacks "authority." It feels like it has no physical weight.

**Primary Suspect:** Lack of Low-Mid Body (150 - 250 Hz).

---

## 🛠️ The Fix (Priority 2)

We need to add **Body** and **Chest Resonance**.

### Step 1: The "Chest" Boost (Band 2 🌸)

This range (150-200 Hz) corresponds to the resonance of a human chest cavity.

- **Action:** Bell Boost
- **Freq:** 180 Hz - 200 Hz
- **Gain:** +1.5 to +3 dB
- **Result:** Instant authority and "bigness."

### Step 2: The Saturation Trick

Sometimes EQ isn't enough. If a +3 dB boost doesn't fix it, the audio file simply lacks low-end information.

- **Don't just keep boosting EQ.**
- **Try:** Adding a saturation plugin (like Fruity Blood Overdrive or Saturation Knob) _before_ the EQ to generate harmonics.

### Step 3: Check the High Pass

Did you accidentally High Pass (Band 1) too high?

- Check Band 1. Is it at 150 Hz?
- **Fix:** Drag it down to **80 Hz** or turn it off. You might be cutting the fundamental note of the instrument.

---

## 💡 Tone Shaping

- **Thick/Warm:** Boost ~220 Hz.
- **Big/Heavy:** Boost ~100 Hz (Band 1 Bell).
- **Power:** Boost ~180 Hz.

**Reference Rule:**

> `thin_or_weak` → Band 2: Add Body 200
