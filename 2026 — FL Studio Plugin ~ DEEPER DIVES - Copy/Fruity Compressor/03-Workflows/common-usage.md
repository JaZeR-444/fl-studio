# Common Workflows: Fruity Compressor

## 1. Classic Sidechaining (The Setup)

Fruity Compressor handles sidechain differently than Limiter.

1.  **Routing:**
    *   Kick Channel -> Send "Sidechain" to Bass Channel.
2.  **Plugin:** Load Fruity Compressor on Bass.
3.  **Input:** Right-click the **Sidechain Selector** (in the plugin window, distinct from the wrapper). Select "Kick".
4.  **Settings:**
    *   **Threshold:** -20dB.
    *   **Ratio:** 4:1.
    *   **Attack:** 0ms.
    *   **Release:** Synced to tempo (e.g., 1/4 note).
5.  **Important:** Unlike Fruity Limiter, you don't see the ghost waveform. You must rely on your ears.

## 2. 808 Optimization

1.  **Goal:** Even out a bassline where some notes are quiet and some are loud.
2.  **Type:** **Vintage**.
3.  **Ratio:** 4:1.
4.  **Attack:** 50ms (Let the initial "thump" thru).
5.  **Release:** 300ms (Sustain the tail).
6.  **Gain:** Boost until the meter dances around 0dB.
7.  **Why Vintage?** The "LA-2A" curve adds warmth to the sub frequencies that standard VCA compression removes.

## 3. Acoustic Guitar Leveling

1.  **Type:** Soft/R.
2.  **Ratio:** 2.5:1.
3.  **TCR:** Critical here. Acoustic guitar has strumming (transients) and sustain (chords).
4.  **Effect:** The TCR allows the compressor to clamp down fast on the pick noise but release gently on the ring-out, avoiding the "nervous" pumping sound.

## 4. De-Essing (Manual)

1.  **Concept:** Compress only the "Sss" sounds.
2.  **Split:** Use **Patcher**.
3.  **Chain:**
    *   Split Signal into High/Low (Frequency Splitter).
    *   Put Fruity Compressor on the High band (above 5kHz).
4.  **Settings:** Fast Attack, Fast Release. Hard Knee.
5.  **Result:** It clamps down on sibilance without affecting the body of the vocal.
