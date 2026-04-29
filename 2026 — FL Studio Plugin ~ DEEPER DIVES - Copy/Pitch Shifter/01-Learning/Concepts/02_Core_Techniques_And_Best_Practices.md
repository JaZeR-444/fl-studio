# Core Techniques & Best Practices

## 💎 The Golden Techniques

### 1. The "Formant Corrected" Shift
*   **Goal:** Pitch a vocal down without it sounding like a muddy monster.
*   **Move:**
    1.  Mode: **Voice**.
    2.  Pitch: **-5 semitones** (Deep).
    3.  Formant: **+5 semitones** (Opposite direction).
*   **Result:** The pitch drops, but the "Throat Size" stays closer to natural. The singer sounds like they just have a lower range, not a bigger head.

### 2. The "Rising Riser" (Feedback Loop)
*   **Goal:** A transition effect that screams upwards.
*   **Move:**
    1.  Pitch: **+1 semitone**.
    2.  Feedback: **90%**.
    3.  Delay: **100ms**.
    4.  Input: Feed it a single snare hit.
*   **Result:** The snare hits, then echoes. Each echo is 1 semitone higher. It spirals up into a mosquito whine.

### 3. The "Granular Cloud" Reverb
*   **Goal:** Shimmering texture.
*   **Move:**
    1.  Mode: **Music**.
    2.  Pitch: **+12 semitones** (Octave).
    3.  Duration: **100ms** (Long grains).
    4.  Place this *after* a Reverb plugin.
*   **Result:** The reverb tail is lifted up an octave and smeared into a cloudy haze.

## 👂 What to Listen For
*   **Glitches in Voice Mode:** If you play chords into Voice mode, it freaks out (bubbling sound).
    *   *Fix:* Switch to Music mode.
*   **Metallic Ring:** Short delay times in the feedback loop create a metallic robotic ring (Comb Filter).
    *   *Fix:* Increase delay time >30ms.

## 🛑 Common Pitfalls
1.  **Latency:** This plugin adds latency. If you use it on a live recording, the vocalist will hear themselves delayed. Only use it during mixing or with "Low Latency" monitoring if possible (though quality suffers).
2.  **Double Shift:** Using Pitch Shifter *and* changing the BPM of the project can cause weird artifacts if the sample is stretched elsewhere. Keep the signal chain simple.
