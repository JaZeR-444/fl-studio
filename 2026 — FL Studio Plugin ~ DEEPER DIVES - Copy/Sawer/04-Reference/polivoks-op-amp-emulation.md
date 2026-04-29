# Polivoks Op-Amp Emulation: The Dirty Secret

## The KR140UD12 Chip
Standard filters (Moog, Roland) use high-quality operational amplifiers. The Soviet Polivoks used the **KR140UD12**, which was electrically "noisy" and had a slow slew rate. [SRC: HW-HIST]

## Technical Consequences in Sawer:
1. **Self-Oscillation Distortion:** When resonance is high, the filter starts to "scream" (produce its own frequency). In Sawer, this oscillation is deliberately "impure," adding a layer of saturation that sounds like a tube amp.
2. **Phase Instability:** The oscillators in Sawer don't start at the exact same phase every time. This creates a "random" punch in the low-end.
   - **Research Tip:** If your 808 layer sounds different every time you play it, it’s the Sawer phase instability. Switch the **Sub Phase** to a fixed position to override this.

## How to use "The Grit" in Mixes:
- **Low Pass 24dB:** This is where the emulation is most aggressive. Use it for **Trap Bass** to add mid-range harmonics that help the bass cut through iPhone speakers.
- **Warm Mode:** This simulates the Master Output saturation of the original unit. Turn it on to "glue" the oscillators together before they hit the mixer.
