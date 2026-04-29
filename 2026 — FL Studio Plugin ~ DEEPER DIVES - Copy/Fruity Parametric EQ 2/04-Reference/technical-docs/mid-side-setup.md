# Mid / Side Processing (The Patcher Method)

Standard Parametric EQ 2 is a stereo plugin. However, FL Studio's **Patcher** allows us to unlock powerful Mid/Side capabilities.

## ❓ What is Mid/Side?

- **Mid:** The center information (Mono). Where the Kick, Snare, Bass, and Lead Vocal usually sit.
- **Side:** The stereo difference (Left - Right). Where Reverbs, Wide Synths, and Double-Tracked Guitars sit.

## 🛠️ The Setup

1.  Open **Patcher** as an effect slot.
2.  Inside Patcher, add **Fruity Stereo Shaper**.
3.  Right-click Stereo Shaper -> **Presets** -> **"Mid - Side Splitter"**.
    - _Note: This splits audio into two outputs: Send 1 (Mid) and Send 2 (Side)._
4.  Add **TWO** instances of **Fruity Parametric EQ 2**.
    - Rename one "EQ - MID".
    - Rename one "EQ - SIDE".
5.  Connect:
    - Stereo Shaper (Send 1) -> EQ - MID -> FL Studio Output.
    - Stereo Shaper (Send 2) -> EQ - SIDE -> FL Studio Output.

## 🚀 Workflows

### 1. Mono the Low End (Mastering Staple)

- **Target:** EQ - SIDE
- **Action:** **High Pass** (Band 1) at **120 Hz**.
- **Result:** Removes all stereo information from the bass frequencies. This gives you a tight, focused low end that translates perfectly to club systems.

### 2. Wide Air

- **Target:** EQ - SIDE
- **Action:** **High Shelf** (Band 7) boost at **10 kHz**.
- **Result:** Makes the mix sound "wider" and airier without making the center (Kick/Snare) harsh.

### 3. De-Clutter Vocals

- **Target:** EQ - MID
- **Action:** Cut **500 Hz** (Band 3) slightly.
- **Result:** Clears up space in the center for the lead vocal, while keeping the wide guitars thick.
