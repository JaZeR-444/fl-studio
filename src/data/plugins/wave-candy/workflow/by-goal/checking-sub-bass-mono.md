# Checking Sub-Bass Mono (Wave Candy)

## Goal
Verify that your sub-bass is not causing phase issues and is centered in the mono field.

## Technical Steps
1. **Mode Selection:** Select **Vectorscope**.
2. **Input Filtering:**
   - If possible, place `Fruity Parametric EQ 2` before Wave Candy and solo only the bass (Low Pass at 100Hz).
   - Alternatively, place Wave Candy on your dedicated Sub-Bass mixer track.
3. **Visual Inspection:**
   - **Good:** A solid vertical line. This means your sub is 100% mono.
   - **Bad:** A wide cloud or horizontal line. This indicates stereo information in the sub, which will cause weak bass on club systems.
4. **Correction:** If the line isn't vertical, use `Fruity Stereo Shaper` to force the channel to mono before it hits Wave Candy.

## Why it works
The Vectorscope plots L/R phase against each other. A vertical line confirms that L and R are identical, which is essential for low-end energy preservation.
