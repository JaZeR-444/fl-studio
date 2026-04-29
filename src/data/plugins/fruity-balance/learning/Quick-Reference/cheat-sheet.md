# Fruity Balance: The Automation Essential

> **Scope:** Gain Staging, Volume Automation, and Stereo Panning.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Low (Utility).

## 🧠 The "Utility" Concept
Fruity Balance is arguably the most important utility plugin for **Mixing Workflow**.
*   **Function:** It creates a "Gain Stage" in the middle of your effect chain.
*   **Why use it?** To separate **Volume Automation** from **Static Mixing**.
    *   *Bad Workflow:* Automating the Mixer Track Fader. (Now you can't adjust the overall level of the track easily).
    *   *Good Workflow:* Automating Fruity Balance Volume. (The Mixer Fader remains free for mixing adjustments).

**Signal Flow:**
`Input` -> **[BALANCE (PAN)]** -> **[VOLUME (GAIN)]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The Controls

| Knob | Function | Details |
| :--- | :--- | :--- |
| **Balance** | Panning. | **True Summing:** Unlike standard "Balance" controls that just mute the other side, Fruity Balance mixes the Left and Right channels together as you pan. |
| **Volume** | Gain. | **Range:** -inf to +6dB (approx). It allows for slight boosting, but is primarily for attenuation. |

---

## 🔁 Section 2: Panning Physics

*   **Mode:** "True Pan" / Summing.
*   **Behavior:**
    *   *Hard Left:* You hear both the Left signal AND the Right signal coming out of the Left speaker.
    *   *Standard Mixer Pan:* Usually attenuates the Right channel (Circular Panning Law). You lose the Right signal info.
*   **Application:** Use Fruity Balance when you have a stereo synth (e.g., Ping Pong sound) and you want to move the *entire image* to the left without losing the "Pong" delay taps.

---

## ⚡ Technical Specs: CPU Usage

*   **Load:** Negligible.
*   **Math:** It is a simple multiplication algorithm (`Samples * Volume`).
*   **Latency:** 0 samples. 0ms.
*   **Optimization:** You can load 500 instances of Fruity Balance without denting a modern CPU.

---

## 🧪 "Secret Sauce" Workflows

### 1. The Pre-Fader Send Trick
1.  **Context:** You want to send a vocal to a Reverb bus, but you want the Reverb to stay loud even if you turn the vocal volume down (Pre-Fader).
2.  **FL Studio Limitation:** FL's "Send" knobs are Post-Fader only (mostly).
3.  **Workaround:**
    *   Route Vocal to a "Submix" track.
    *   Place Fruity Balance on the Submix.
    *   Route Submix to Master (Dry) and Reverb (Wet).
    *   Automate Fruity Balance Volume to control the Dry level.
    *   The Send to the Reverb happens *before* the Volume Fader of the Submix track, effectively simulating a Pre-Fader send if you structure the routing chains correctly. (Actually, easier: Just route Vocal to Reverb, and use Fruity Balance on the Vocal track as the "Fader" to kill the dry signal while the route remains active).

### 2. Sidechain Ducking (Manual)
1.  **Goal:** Duck the Bass when the Kick hits.
2.  **Tool:** Fruity Balance.
3.  **Action:** Automate the Volume knob.
4.  **Shape:** Draw a quick dip (V shape) on every kick.
5.  **Benefit:** cleaner and more transparent than a Compressor. No attack/release artifacts. Just pure volume Envelope.
