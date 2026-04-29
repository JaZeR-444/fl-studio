# Control Creator Deep Dive

The **Control Creator** is the design suite for Control Surface.

### Custom Knob Graphics
1. Create a "Knob Strip" (a single image containing all frames of a knob rotation, e.g., 31 frames).
2. Open Control Creator (Right-click Control Surface > Control Creator).
3. Import your bitmap strip.
4. Define the frame count and animation type.
5. Save as `.ilcontrol`.

### Applying Styles
- Once saved, your new style appears in the Right-Click > Styles menu of any knob in Control Surface.
- This is how pro Patcher designers create GUIs that look like boutique analog hardware.
