# Building Evolving Percussion (Drumaxx)

## Goal
Create a rhythmic element that slowly shifts its tonal character over time.

## Technical Steps
1. **Pad Initialization:**
   - Select an unused pad. Set **Material** to Low (soft skin).
2. **Internal LFO / Automation:**
   - Right-click the **Tension** slider and select **Create Automation Clip**.
   - Draw a slow, triangular wave over 8 bars.
3. **The "Talking Drum" Effect:**
   - Set the automation to shift Tension by +/- 20%.
   - This causes the "pitch" of the drum to glide up and down while it's being played by the sequencer.
4. **Sequencing:**
   - Program a steady 1/8th note pattern in the Drumaxx step sequencer.
   - Vary the **Velocity** of the steps to trigger different responses in the physical model.

## Why it works
Because Drumaxx is a physical model, changing "Tension" doesn't just pitch-shift a static recording; it recalculates the vibration of the entire mesh. This results in organic, fluid transitions that sound like a drummer pressing their hand on the skin while playing.
