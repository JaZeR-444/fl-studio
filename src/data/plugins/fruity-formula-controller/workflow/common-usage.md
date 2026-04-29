# Common Workflows: Fruity Formula Controller

## 1. Tempo-Synced Sine LFO

1.  **Variable:** `SongTime`.
2.  **Formula:** `Sin(SongTime * Pi * 2) * 0.5 + 0.5`
3.  **Explanation:**
    *   `SongTime`: Current play position in beats (or seconds? Manual says beats usually).
    *   `* Pi * 2`: 1 Beat = 1 Cycle (2 Pi Radians).
    *   `* 0.5 + 0.5`: Scales the -1/+1 output to 0/1 range.
4.  **Use:** A perfectly synced LFO that never drifts.

## 2. Dynamic Ring Modulation

1.  **Formula:** `a * Sin(SongTime * b * 50)`
2.  **Input a:** Volume envelope.
3.  **Input b:** Pitch/Rate knob.
4.  **Result:** An Amplitude Modulation (LFO) where the *rate* is controlled by knob `b` and the *depth* follows the envelope of input `a`.

## 3. Probability Gate (Randomizer)

1.  **Formula:** `SeededRand(SongTime)`
2.  **Result:** Generates a new random value every time the internal seed/time updates.
3.  **Enhancement:** `Iff(Rand(SongTime) > a, 1, 0)`
    *   **Input a:** Probability Threshold (e.g., 0.8).
    *   **Effect:** Only outputs "1" (Trigger) 20% of the time. Link to "Play" button of a sample.

## 4. Pythagorean Stereo Panner

1.  **Goal:** Constant Power Panning (Sine/Cosine law).
2.  **Output 1 (Left):** `Cos(a * Pi / 2)`
3.  **Output 2 (Right):** `Sin(a * Pi / 2)`
4.  **Result:** As knob `a` moves 0-1, the volume preserves energy relative to the center, unlike linear panning which dips in volume at the center. Requires 2 Formula Controllers (or Patcher).
