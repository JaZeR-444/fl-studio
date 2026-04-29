# Workflow: Removing "Boxy" or Cardboard Tone

**Symptom:** The audio sounds like it was recorded in a small cardboard box. It lacks depth and sounds "cheap" or "hollow."

**Primary Suspect:** Lower-Midrange Congestion (300 - 550 Hz).

---

## 🛠️ The Fix (Priority 2)

Removing boxiness is the "secret sauce" that makes home recordings sound expensive.

### Step 1: The Sweep

1.  Select **Band 3 (Orange)**.
2.  Boost it to **+9 dB** (temporarily!).
3.  Make the bandwidth narrow (80%).
4.  Sweep slowly between **300 Hz** and **600 Hz**.
5.  Listen for the frequency that sounds most like "honking into a cup." **That is the boxiness.**

### Step 2: The Action (Band 3 🟠)

Once you found the frequency (often ~400-450 Hz), cut it.

| Parameter  | Setting     | Note                                    |
| ---------- | ----------- | --------------------------------------- |
| **Band**   | 3 (Orange)  |                                         |
| **Type**   | Bell        |                                         |
| **Freq**   | ~420 Hz     | _Or wherever you found the "cup" sound_ |
| **Amount** | -2 to -4 dB | _Aggressive cuts often work here_       |
| **BW**     | 50%         | _Medium width_                          |

### Step 3: Verify

Toggle the band on/off. The sound should visibly "open up" and feel less enclosed when the cut is active.

### Instrument Specifics

- **Drums (Snare/Toms):** Often need heavy cuts (-4 dB) at ~400 Hz to sound "pro."
- **Acoustic Guitar:** Cut ~350-400 Hz to remove the "cheap wood" sound.
- **Vocals:** Gentle cut at ~350 Hz clears up the muddiness that isn't quite low-end mud.

---

## 💡 Pro Tip

**Don't hollow it out.**
If you cut too much, the sound becomes distinctively "scooped" and weak. You want to remove the _excess_ resonance, not the entire frequency range.

**Reference Rule:**

> `boxy_or_cardboard` → Band 3: De-Box 420
