# Building a Master Bus Dashboard

**Goal:** Create a 4-knob "Confidence Monitor" for the Master Track.

### Step 1: Layout
1. Add Control Surface to Master Slot 1.
2. Add 4 Knobs: "Gain", "Mono", "Air", "Punch".
3. Use a **Bevel** to group them with a label "MASTER BUS".

### Step 2: Mapping
- **Gain:** Link to a `Fruity Balance` at the end of your chain.
- **Mono:** Link to the Mixer Track's **Stereo Separation** knob (Use formula `Input * -1` so 100% on knob = 100% Mono).
- **Air:** Link to a High Shelf gain on `Fruity Parametric EQ 2`.
- **Punch:** Link to the "Amount" knob on `Soundgoodizer` or a compressor's mix.

### Step 3: Optimization
- Disable **Edit Mode**.
- Set the window to "Detached" so you can always see it while mixing.
