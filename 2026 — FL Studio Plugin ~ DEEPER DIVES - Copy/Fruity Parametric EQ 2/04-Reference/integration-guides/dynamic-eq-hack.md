# DIY Dynamic EQ (The Peak Controller Hack)

Parametric EQ 2 is static... unless you use **Fruity Peak Controller**. This turns it into a Dynamic EQ (like Pro-Q 3's dynamic mode).

## ❓ What is Dynamic EQ?

Static EQ cuts a frequency **all the time**.
Dynamic EQ cuts a frequency **only when it gets too loud**.

## 🛠️ The Setup (De-Esser Example)

**Goal:** Cut 6 kHz (Band 6) only when the vocals say "Sss".

1.  **Insert Fruity Peak Controller** on the Vocal Mixer track.
    - _Place it BEFORE the EQ._
    - Unmute the Peak Controller (mute button usually auto-engages, you want to hear the signal).
2.  **Insert Fruity Parametric EQ 2** right after it.
3.  **Configure Peak Controller:**
    - **Base:** 50% (Center).
    - **Vol:** -50% (Invert - we want to CUT when signal is loud).
    - **Tension:** Linear.
4.  **Link the EQ:**
    - Right-click **Band 6 Gain** slider.
    - Select **Link to controller**.
    - Internal controller: **Peak Ctrl - Peak**.
    - Formula: `Input` (Default).
5.  **Configure EQ Band 6:**
    - Set Freq to **6 kHz**.
    - Set Bandwidth to fit the "Sss".

## 🚀 How it works

- When the vocal is silent, Peak Controller sends "50%" (0 dB Gain).
- When the vocal gets loud, Peak Controller sends a LOWER value (because Vol is -50%).
- The EQ Gain knob dips down.
- **Result:** Automatic harshness control that is transparent during quiet whispers.

---

## 🎛️ Sidechain EQ (Spectral Space)

You can put the Peak Controller on the **KICK** channel, and the EQ on the **BASS** channel.

- Link Bass EQ **Band 1 Gain** to Kick **Peak**.
- Now the Bass Low End ducks automatically every time the Kick hits.
- _Result:_ Perfect low-end separation without pumping the entire volume.
