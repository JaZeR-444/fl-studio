# Acoustic Guitar Widening Workflow

## Goal
Give a mono-recorded acoustic guitar a wide, professional stereo image without using a second microphone.

## Steps
1. **Insert Fruity Delay 3**: Place it on the guitar track.
2. **The Haas Setup**:
   - Set **Model** to Digital (for transparency).
   - Set **Time** to **0ms**.
   - Set **Offset** to **+15ms** (Right channel delayed).
   - Set **Feedback** to **0%**.
   - Set **Dry** to 100%, **Wet** to 100%.
3. **Tone Matching**:
   - If the right side sounds too bright, lower the **LP Filter** slightly.
4. **Diffusion for Depth**:
   - Add **5% Diffusion**. This softens the " Haas" delay, making it sound more like a room reflection than a distinct copy.
5. **Phase Check**:
   - Toggle the **Mono** switch on your Master track. If the guitar disappears or sounds hollow, reduce the Offset to **10ms**.

## Result
A wide, natural guitar sound that takes up the full stereo field while remaining mono-compatible.
