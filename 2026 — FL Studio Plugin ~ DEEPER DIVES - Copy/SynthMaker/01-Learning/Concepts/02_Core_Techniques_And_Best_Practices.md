# 02: Core Techniques and Best Practices

## 1. Modular Organization
As your schematic grows, it becomes a "spaghetti" mess. Use the **Module** feature to group related components (e.g., all oscillator nodes) into a single box. Double-click to go "inside" the module. [SRC: REPUTABLE-09]

## 2. Optimizing CPU (Stream vs. Event)
Do not perform complex math in the **Stream** (audio) path if it can be done in the **Event** (control) path. Only use Stream wires for things that must change 44,100 times per second.

## 3. Custom GUI Mapping
1. Drag a "Knob" primitive into the schematic.
2. Link it to a "Bitmap" node.
3. Link the output of the knob to a "Multiply" node in your audio path.
- *Result:* You have created a custom volume control with your own unique graphic.

## 4. Building a "Bit-Crusher" (Hip-Hop Logic)
1. Take an audio stream.
2. Use a "Quantize" primitive.
3. Link a knob to the quantization level.
- *Result:* Instant custom lo-fi distortion tailored for 90s hip-hop vibes.

## 5. Using the "Code" Node
If the visual nodes are too limiting, you can use the **DSP Code** node to write low-level assembly-like code. This is where professional DSP designers create anti-aliased oscillators.

## 6. The "Dashboard" Workflow
Instead of making a synth, use SynthMaker to build a **MIDI CC Controller**.
1. Add a "Knob" UI element.
2. Connect it to a "MIDI Out" primitive.
3. Set the MIDI CC number to 74 (Filter Cutoff).
- *Result:* You now have a custom visual tool to control your hardware synth's filter.

## Common Pitfalls + Fixes
- **Pitfall:** Audio crackling.
  - **Fix:** You have too many "Stream" math nodes. Use "Poly" primitives where possible.
- **Pitfall:** Controls are laggy.
  - **Fix:** Check your "Redraw" logic in the GUI section. Ensure nodes aren't updating more than needed.
- **Pitfall:** Bridging errors.
  - **Fix:** Use FL Studio 32-bit to build your projects, then test in 64-bit with the bridge.
