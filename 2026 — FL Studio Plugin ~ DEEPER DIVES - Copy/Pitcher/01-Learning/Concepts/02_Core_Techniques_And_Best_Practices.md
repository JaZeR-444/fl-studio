# Core Techniques & Best Practices

## 💎 The Golden Techniques

### 1. The "Prismizer" Chord (MIDI Mode)
*   **Context:** Creating the Bon Iver / Francis and the Lights "Vocal Choir" effect.
*   **Move:**
    1.  Switch Pitcher to **MIDI Mode**.
    2.  Set Retune Speed to **Fast**.
    3.  Create a **MIDI Out** channel. Set Port to 5.
    4.  Set Pitcher Input Port to 5.
    5.  Play a chord on the MIDI Out channel while singing a single sustained note.
*   **Result:** Your voice explodes into a chord.

### 2. The "Ghost" Double
*   **Context:** Thickening a lead vocal without it sounding corrected.
*   **Move:**
    1.  Put Pitcher on a Send track (not Insert).
    2.  Set Speed to **Slow** (40ms+).
    3.  Set Scale: Major/Minor.
    4.  Mix in the Send track at -15dB.
*   **Result:** The lead is natural/raw, but the background has a perfectly tuned "Ghost" supporting it.

### 3. The "Formant Drop" Ad-Lib
*   **Context:** Travis Scott vibes.
*   **Move:**
    1.  Turn on **Formant**.
    2.  Turn the Formant knob down (Left).
    3.  Sing high-energy ad-libs ("Yeah!", "It's Lit!").
*   **Result:** You sound like a big monster but with high energy.

## 👂 What to Listen For
*   **Warbling:** Fast fluctuations when holding a note.
    *   *Fix:* Your singing is drifting too far between two valid notes. Increase Retune Speed (slower) or deselect the wrong note on the keyboard UI.
*   **Clicks (Sibilance):** "S" and "T" sounds getting pitched.
    *   *Fix:* Pitcher hates noise. Use a De-Esser *before* Pitcher to calm down the sibilance so Pitcher focuses on the tone.

## 🛑 Common Pitfalls
1.  **Wrong Key:** There is no "Auto" key detection. You MUST know the key of your beat. Use **Wave Candy** or Google to find it.
2.  **Too Fast:** If Speed is on "Fast" (Left), you lose all emotional slide in the voice. Only do this for the "Effect". For singing, back it off to ~20ms.
