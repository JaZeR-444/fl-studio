# Workflow: Taming Nasal & Honky Tone

**Symptom:** The source (vocal, saxophone, guitar) sounds pinched, "honky," or like someone holding their nose. It's annoying and piercing.

**Primary Suspect:** Upper-Midrange Frequencies (600 - 1200 Hz).

---

## 🛠️ The Fix (Priority 2)

**Band 4 (Yellow)** is specifically designed for this range. It is the most sensitive band in the plugin.

### Step 1: The Sweep (Careful!)

1.  Select **Band 4**.
2.  Boost **+5 dB** (don't go too high, it will hurt).
3.  Narrow BW (70%).
4.  Sweep slowly from **700 Hz** to **1 kHz**.
5.  Listen for the "Goose Honk" or extreme nasality.

### Step 2: The Cut

| Parameter | Setting         | Note                       |
| --------- | --------------- | -------------------------- |
| **Band**  | 4 (Yellow)      |                            |
| **Freq**  | ~850 Hz         | _Common sweet spot_        |
| **Gain**  | -1.5 to -2.5 dB | _Small moves matter here!_ |
| **BW**    | 60%             | _Medium-Narrow_            |

### Step 3: Male vs. Female

- **Male Vocals:** Honk is often lower (**~700 Hz**).
- **Female Vocals:** Nasality is often higher (**~950 - 1100 Hz**).

---

## ⚠️ Warning

**Don't over-cut.**
If you scoop this range too deeply (-4 dB+), the vocal will lose its power and sound "hollow" or distant. You only want to tame the annoyance, not remove the core tone.

**Reference Rule:**

> `nasal_or_honky` → Band 4: Tame Honk 850
