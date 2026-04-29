# Image Processing Rules: BeepMap (Hip-Hop & R&B)

## 1. The "Black Background" Rule
- **Rule**: Only use images with a 100% black background.
- **Why**: White space in an image creates constant high-frequency noise. Black space creates silence. For musical results, you need the "silence" to define the "notes."
- **Action**: Use a photo editor to remove backgrounds before loading.

## 2. Low Resolution Mandate
- **Rule**: Resize all images to 256 pixels wide (max).
- **Goal**: To prevent CPU spikes and to ensure the synthesis has enough "time" to interpret each pixel without sounding like random noise.

## 3. The "Sepia" Soul Strategy
- **Rule**: Convert colorful images to **Sepia** or **Warm Grayscale**.
- **Why**: In BeepMap, Red/Green/Blue control panning and FM. Pure Grayscale or Sepia creates a centered, focused mono signal that is much easier to mix in Hip-Hop.

## 4. Logarithmic Mapping Only
- **Rule**: Never use "Linear" mode for melodic tracks.
- **Action**: Always ensure the **Log** switch is active.
- **Goal**: Linear mode spreads frequencies evenly, meaning 90% of your image will sound like extreme high-frequency dog-whistles. Log mode puts the focus in the audible musical range.
