# EQUO - UI Tour And Core Concepts

## UI Tour

### Main Interface Layout

EQUO presents a unique interface centered around its morphing graphic equalizer functionality. The interface is organized into several key areas:

#### Top Section
- **Title Bar**: Shows the plugin name and version
- **Preset Browser**: For loading and saving EQ configurations
- **Mode Selector**: VOL (Volume), PAN (Panning), SEND (Send Level) modes
- **Global Controls**: Including bypass and mix controls

#### Central Area - EQ Graph and X/Y Pad
- **EQ Graph**: Visual representation of the current EQ curve
- **X/Y Morph Pad**: Central pad for morphing between different EQ banks
- **Bank Selectors**: 8 numbered buttons (1-8) for selecting different EQ configurations
- **Drawing Tools**: Pencil, Line, and Curve tools for drawing EQ curves
- **Analysis Button**: For matching EQ to input signal

#### Right Panel - Parameter Controls
- **Shift Knob**: Frequency shifting (moves entire curve left/right)
- **Bandwidth Knob**: Controls interaction between adjacent bands
- **Mix Knob**: Dry/Wet blend control
- **Current Bank Display**: Shows which bank is currently active

#### Bottom Section
- **Parameter Value Displays**: Numeric readouts for precise control
- **Status Indicators**: Showing current settings and activity

### Visual Feedback Elements

EQUO provides extensive visual feedback through:
- **EQ Curve Visualization**: Real-time display of current EQ curve
- **X/Y Position Indicator**: Shows current morph position on the pad
- **Bank Activation Lights**: Visual indication of which banks are active during morphing
- **Parameter Value Displays**: Numeric readouts for precise control
- **Active State Indicators**: Showing which parameters are being adjusted

## Core Concepts and Terminology

### Morphing EQ Fundamentals

**Morphing**: The process of smoothly interpolating between different EQ curves stored in different banks. This allows for real-time transitions between completely different frequency responses.

**Banks**: Eight separate EQ configurations that can be stored and recalled. Each bank contains a complete EQ curve that can be morphed to/from.

**X/Y Control**: The central pad that controls morphing between different banks. X-axis typically controls one set of banks while Y-axis controls another.

**Drawing Modes**: Three different tools (Pencil, Line, Curve) for creating EQ curves directly on the graph.

**Analysis Function**: Feature that analyzes the input signal and attempts to match the EQ curve to it.

### Key Parameters Explained

**Shift**: Controls overall frequency shifting of the entire EQ curve. Turning this parameter shifts all frequencies up or down by the same amount, creating phaser-like effects or pitch shifting.

**Bandwidth**: Controls how much adjacent bands interact with each other. Low bandwidth creates more distinct bands (like a comb filter), while high bandwidth creates smoother curves.

**Mix**: Controls the blend between processed and unprocessed signals. 0% is completely dry, 100% is completely wet.

**VOL/PAN/SEND Modes**:
- VOL: Volume-based EQ affecting amplitude
- PAN: Frequency-based panning affecting stereo position
- SEND: Frequency-based send levels for routing to effects

### Parameter Interactions

Understanding how parameters interact is crucial for effective use:

- **Shift + Morph**: Shift affects the entire curve regardless of morph position
- **Bandwidth + Morph**: Low bandwidth can create comb-filter effects during morphing
- **Mix + Morph**: Lower mix values reduce the intensity of morphing changes

### Core Terminology

**Morphing**: Smooth interpolation between different EQ curves
**Banks**: Separate EQ configurations (8 total)
**X/Y Pad**: Two-dimensional morphing control
**Drawing Modes**: Pencil, Line, Curve tools for EQ curve creation
**Analysis**: Automatic EQ matching to input signal
**Shift**: Frequency shifting of entire curve
**Bandwidth**: Band interaction control
**VOL/PAN/SEND**: Processing modes

## Typical Starting Workflow (the first 5 minutes)

1. **Load EQUO**: Insert EQUO into a channel in the Channel Rack or as an insert effect

2. **Select a Mode**: Choose between VOL (standard EQ), PAN (frequency-based panning), or SEND (frequency-based sends)

3. **Draw a Simple Curve**: Use the pencil tool to draw a basic EQ curve in Bank 1

4. **Create a Second Curve**: Switch to Bank 2 and draw a different curve (e.g., high-pass or low-pass)

5. **Test Morphing**: Move the X/Y pad to morph between the two curves

6. **Adjust Bandwidth**: Modify the bandwidth to hear how it affects the morphing

7. **Set Mix**: Adjust the dry/wet mix to taste

8. **Save as Starting Point**: Save this basic morphing setup as a starting template

## Common Beginner Traps (what people misunderstand)

1. **Thinking it's a regular EQ**: Many users expect EQUO to work like traditional parametric EQs, but it's a morphing graphic EQ with unique capabilities.

2. **Not understanding morphing**: The X/Y pad doesn't control individual parameters but interpolates between complete EQ curves.

3. **Ignoring drawing tools**: Users often don't realize they can draw curves directly rather than adjusting individual bands.

4. **Overlooking the analysis function**: The analysis feature can automatically match EQ to input signals, which many users miss.

5. **Misunderstanding modes**: The PAN and SEND modes work differently than standard EQ and can create unexpected results if misunderstood.

6. **Extreme bandwidth settings**: Very low bandwidth can create comb-filter effects that might be mistaken for malfunction.

7. **Not using multiple banks**: Some users only use one bank and miss the morphing capabilities entirely.

8. **Confusing Shift with pitch shift**: The Shift parameter moves the entire EQ curve but doesn't actually transpose the audio.