# Peak vs. RMS vs. LUFS

## Peak Level (What Fruity dB Meter shows)
Peak level is the absolute highest voltage (or digital value) a signal reaches. 
- **Significance:** It tells you if you are **Clipping** (distorting the audio at the bit-depth limit).
- **Limitation:** It does not correlate well with how "loud" we perceive a sound to be.

## RMS (Root Mean Square)
RMS is the mathematical average of the level over a short period (usually 300ms).
- **Significance:** It closer represents perceived loudness. A sustained pad and a sharp snare might have the same Peak, but the pad has a much higher RMS.

## LUFS (Loudness Units relative to Full Scale)
LUFS is the modern industry standard for loudness, used by Spotify, YouTube, and Apple Music.
- **Significance:** It uses a "K-Weighting" filter to account for the fact that humans hear mid-frequencies as louder than lows/highs.
- **Fruity dB Meter vs. Wave Candy:** While dB Meter shows Peak, you should use **Wave Candy** or **Youlean Loudness Meter** for LUFS monitoring during the final mastering stage.

## Digital Headroom
In a 32-bit floating-point engine (like FL Studio's internal mixer), you cannot actually "clip" the signal *inside* the mixer. However, you will clip as soon as the audio leaves the mixer for your speakers or when you export to a 16-bit or 24-bit file. Always keep your peaks below 0dB!
