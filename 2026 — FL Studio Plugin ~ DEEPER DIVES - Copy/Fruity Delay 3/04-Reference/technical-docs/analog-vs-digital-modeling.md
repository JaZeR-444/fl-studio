# Digital vs. Analog Delay Modeling

## Digital Mode
- **Behavior:** Standard "Buffer Copy". 
- **Time Changes:** When you change the delay time while audio is playing, the signal is simply truncated or lengthened.
- **Sound:** Clean, transparent, robotic.
- **Phase:** No pitch shifting occurs during time modulation.

## Analog Mode
- **Behavior:** Variable Sample Rate Emulation.
- **Time Changes:** Changing the delay time simulates the behavior of a physical BBD (Bucket Brigade Device) or Tape machine. 
- **The Physics:** Moving the "head" or changing the tape speed causes a **Doppler Effect**. 
  - *Shortening Time:* Pitch goes UP.
  - *Lengthening Time:* Pitch goes DOWN.
- **Sound:** Organic, "warped", musical.

## Diffusion Engine
Fruity Delay 3 uses a series of nested all-pass filters for its **Diffusion** section.
- This breaks up the distinct "echoes" and turns them into a cloud of sound.
- If you set Diffusion to 100%, the delay effectively becomes a **Reverb**.
- **Smear:** Smear acts as a spectral smoothing filter, removing the "graininess" from the diffusion for a more ethereal, pad-like tail.
