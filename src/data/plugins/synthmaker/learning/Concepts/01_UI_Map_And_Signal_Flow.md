# 01: UI Map and Signal Flow

## UI Sections Tour
SynthMaker's UI is a workspace divided into the "Front Panel" (GUI) and the "Schematic" (Back-end). [SRC: IL-MAN-08]

### 1. The Schematic Workspace
- **The Canvas:** Where you place and connect nodes.
- **Toolbox:** A categorized list of all available components.
- **Connectors:** Colored circles on components indicating data types.

### 2. Component Types
- **Primitives (Red/Blue):** Basic math and logic (Add, Wave, Filter).
- **Modules (Green):** Pre-built functional units (ADSR, Arpeggiator).
- **Visuals (Yellow):** UI elements (Knobs, Bitmaps, Meters).

### 3. The Front Panel
- **The View:** What the user sees when the plugin is loaded in the rack.
- **Graphic Engine:** Supports custom bitmap imports for "Cyberpunk" or "Vintage" aesthetics.

### 4. Data Types (The "Wired" Colors)
- **White/Blue (Stream):** High-speed audio data (Every sample).
- **Green (Event):** Control data (MIDI notes, knob movements).
- **Red (Int/Float):** Static values or slow-moving logic.

## Signal Flow
`User Input (Knob/MIDI) -> Event Logic -> DSP Stream (Osc/Filter) -> Audio Output -> GUI Feedback (Meter)`

## Things Beginners Misunderstand
- **Stream vs. Event:** Connecting an audio wire (Stream) to a control wire (Event) will not work without a "Stream to Event" converter.
- **The 32-bit Limit:** SynthMaker is a 32-bit plugin. In 64-bit FL Studio, it will load in a separate "Bridge" window, which can be unstable.
- **Polyphony:** Building a polyphonic synth is significantly harder than a monophonic one because you have to manage "Voice" nodes.
