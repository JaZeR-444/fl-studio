# Core Techniques & Best Practices

## 💎 The Golden Techniques

### 1. The "VU Meter" (Audio Level)
*   **Context:** Visualizing mix loudness on your F-Keys.
*   **Move:**
    1.  Select **Effect:** `Audio Level`.
    2.  Select **Color:** Green (Low) to Red (High).
    3.  **Result:** Your keyboard acts like a mixer meter.

### 2. The "Kick Flash" (Isolation)
*   **Context:** Making the impact visual.
*   **Move:**
    1.  Put chroma plugin on the **Kick** Insert (Not Master).
    2.  Select **Effect:** `Single Harmonic` or `Breathing` (Fast).
    3.  **Result:** Keypad flashes only when Kick hits.

### 3. The "Background Mood" (Static)
*   **Context:** Setting the studio vibe.
*   **Move:**
    1.  Select **Effect:** `Static` or `Wave`.
    2.  Set Speed: Very Slow.
    3.  Color: Purple.
    4.  **Result:** Room lights (Philips Hue linked to Chroma) drift slowly, unrelated to the beat.

## 👂 What to Watch For
*   **Latency:** There is a tiny delay (10-50ms) between sound and light due to USB polling. Don't try to play intense rhythm games based *solely* on the light.
*   **CPU:** While lightweight, running complex "Wave" animations across 5+ devices can use a tiny bit of USB bandwidth.

## 🛑 Common Pitfalls
1.  **Synapse Priority:** If you have a game open (e.g., Overwatch) that also uses Chroma, it might fight FL Studio for control. Go to Synapse "Connect" tab and drag FL Studio to the top of the list.
