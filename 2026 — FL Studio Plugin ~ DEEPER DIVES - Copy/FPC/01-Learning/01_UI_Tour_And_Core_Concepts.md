# FPC - UI Tour And Core Concepts

## UI Tour

### Main Interface Layout

FPC presents a professional drum machine interface with a clear, organized layout optimized for pad-based drum programming. The interface is divided into several key areas:

#### Top Section
- **Title Bar**: Shows the plugin name and version
- **Preset Browser**: For loading and saving drum kit presets
- **Global Controls**: Including global tune, decay, and other kit-wide parameters
- **Bank Selector**: Toggle between Bank A (pads 1-16) and Bank B (pads 17-32)

#### Central Area - Pad Matrix
The main area features the iconic 4x4 pad matrix (expandable to 8x4 with both banks):

**Pad Grid**:
- **16 Hexagonal Pads**: Arranged in 4x4 grid (Bank A)
- **Color Coding**: Different colors for different drum types
- **Velocity Sensitivity**: Visual feedback based on trigger velocity
- **Pad Status Indicators**: Showing active samples and layering

**Additional Pads**:
- **Bank B**: Additional 16 pads accessible via bank toggle
- **Total of 32 Pads**: Across both banks for extensive kit creation

#### Right Panel - Sample and Layer Controls
- **Sample List**: Shows samples loaded on the selected pad
- **Layer Management**: Controls for multi-layering per pad
- **Velocity Ranges**: Visual representation of layer velocity splits
- **Sample Parameters**: Per-sample controls (tune, decay, etc.)

#### Bottom Section - Mixer and Transport
- **Mini Mixer**: Compact mixer interface for pad level control
- **Transport Controls**: Play, stop, record for pattern playback
- **Pattern Controls**: Pattern selection and management
- **Status Indicators**: Showing current settings and activity

### Visual Feedback Elements

FPC provides extensive visual feedback through:
- **Pad Illumination**: Pads light up when triggered
- **Velocity Meters**: Visual representation of velocity response
- **Layer Visualization**: Shows how velocity ranges map to different samples
- **Parameter Value Displays**: Numeric readouts for precise control
- **Active State Indicators**: Showing which parameters are being adjusted
- **Sample Waveforms**: Visual representation of loaded samples

## Core Concepts and Terminology

### Pad-Based Drum Programming

**Pads**: The 16 (or 32 with both banks) trigger points that represent individual drum sounds. Each pad can contain one or multiple samples.

**Banks**: Two separate banks (A and B) of 16 pads each, allowing for 32 total sounds per kit. Bank A contains pads 1-16, Bank B contains pads 17-32.

**Layers**: Multiple samples assigned to a single pad with different velocity ranges. For example, a snare pad might have a ghost note sample (0-30 velocity), regular snare (31-70 velocity), and rim shot (71-127 velocity).

**Velocity Ranges**: The velocity thresholds that determine which layer plays on a multi-layered pad.

### Key Parameters Explained

**Global Tune**: Adjusts the pitch of all samples in the kit simultaneously.

**Global Decay**: Controls the overall decay time of all pads in the kit.

**Pad Volume**: Individual volume control for each pad.

**Pad Pan**: Individual panning control for each pad.

**Pad Tune**: Individual pitch adjustment for each pad.

**Pad Decay**: Individual decay/time adjustment for each pad.

### Parameter Interactions

Understanding how parameters interact is crucial for effective use:

- **Velocity + Layers**: Velocity determines which sample layer plays on multi-layered pads
- **Tune + Decay**: Pitch adjustments can affect perceived decay length
- **Volume + Pan**: These interact to create the stereo field position
- **Global + Individual**: Global parameters affect all pads, individual parameters override for specific pads

### Core Terminology

**Choke Groups**: Pads that silence each other when triggered (e.g., open hi-hat silences closed hi-hat)
**Multi-Layering**: Having multiple samples on one pad triggered by different velocity ranges
**Bank Switching**: Changing between Bank A and Bank B to access different sounds
**Pad Mapping**: Assigning specific drum sounds to specific pads
**Velocity Splitting**: Dividing velocity ranges to trigger different samples
**Pattern**: A sequence of drum events within FPC's sequencer
**Kit**: A complete collection of sounds assigned to all pads
**Sample**: The audio file assigned to a pad or layer

## Typical Starting Workflow (the first 5 minutes)

1. **Load FPC**: Insert FPC into a channel in the Channel Rack

2. **Select a Default Kit**: Choose a preset from the preset browser (e.g., "Acoustic Kit" or "Hip Hop Kit")

3. **Test the Pads**: Play on the pads using mouse or MIDI controller to hear the sounds

4. **Switch Banks**: Toggle between Bank A and Bank B to access more sounds

5. **Load Your Own Samples**: Click on a pad and load your own drum samples

6. **Adjust Basic Parameters**: Modify volume, tune, and decay for the selected pad

7. **Try Multi-Layering**: Add additional samples to a pad with different velocity ranges

8. **Set Up Mixer Routing**: Route individual pads to separate mixer tracks if needed

9. **Create a Simple Pattern**: Use the built-in step sequencer to create a basic drum pattern

10. **Save Your Kit**: Save your custom kit for future use

## Common Beginner Traps (what people misunderstand)

1. **Thinking it's just a sampler**: Many users expect FPC to work like a simple sampler, but it's a full drum machine with MPC-style workflow and layering capabilities.

2. **Not understanding velocity layering**: Users often don't realize they can put multiple samples on one pad with different velocity ranges.

3. **Ignoring choke groups**: Beginners often don't set up choke groups for realistic hi-hat behavior.

4. **Bank confusion**: Not understanding that Bank A and Bank B are separate collections of sounds.

5. **Mixer routing**: Not knowing that each pad can be routed to its own mixer track for individual processing.

6. **Pattern vs. Channel**: Confusing FPC's internal patterns with FL Studio's channel automation.

7. **Sample format limitations**: Expecting all sample formats to work without understanding format compatibility.

8. **Velocity response**: Not realizing that FPC responds to velocity for both triggering and layer selection.

9. **Pad mapping**: Thinking pads are fixed to specific drum sounds rather than being customizable.

10. **Layer priority**: Not understanding how multiple samples on one pad interact with each other.