# Rules: Crossover & Phase Safety

How to use Frequency Splitter without destroying your mix. [SRC: REPUTABLE]

## 1. The "Resumming" Rule
- **Rule**: If you split audio into 3 bands and route them to different mixer tracks, **DO NOT** use different types of compressors or limiters on those tracks without testing.
- **Why**: Different plugins add different amounts of latency. If the Low band is 10 samples late compared to the Mid band, they will cancel each other out at the crossover frequency, creating a "hollow" sound.
- **Action**: Always use the **Patcher** method for complex multiband chains to ensure PDC handles the internal routing correctly.

## 2. Linear Phase Pre-Ringing
- **Rule**: Never use **Linear Phase** mode on a sharp Kick drum with a 96dB slope.
- **Verification**: If the kick sounds "smushy" or has a tiny "whoosh" sound right before it hits, you are hearing pre-ringing.
- **Fix**: Switch to **Zero Latency** mode or lower the slope to **24dB**.

## 3. Mono-Sub Protocol
- **Rule**: When splitting an 808 for saturation, the **Low** band crossover must be **Minimum Phase** or **Linear Phase**.
- **Move**: Set split point to 120Hz.
- **Goal**: To prevent the "Phase Rotation" of Zero Latency filters from weakening the sub-bass punch.

## 4. Modulation Safety
- **Rule**: If you automate the **Cutoff Frequency**, do not use **Linear Phase**.
- **Why**: FFT-based filters (Linear Phase) do not handle rapid movement well and will create digital "chirping" or clicks.
- **Fix**: Use **Minimum Phase** or **Zero Latency** for creative sweeps.
