# Stereo Panning Laws & Fruity Balance

## Panning Law in FL Studio
By default, FL Studio uses a **Circular Panning Law**. This means as you pan a sound away from the center, the volume of the signal is adjusted to maintain a perceived constant loudness.

## Fruity Balance Behavior
Fruity Balance implements a standard linear balance pan. 
- **Hard Left**: The Right channel is fully attenuated.
- **Hard Right**: The Left channel is fully attenuated.

## Mono vs. Stereo Input
- If the input is **Mono**, Fruity Balance distributes the single signal between the L/R channels.
- If the input is **Stereo**, it attenuates one side relative to the other. To truly "move" a stereo image, consider using **Fruity Stereo Shaper**.
