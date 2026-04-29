# Technical Guide: Capturing Your Own IRs

## The Goal
Capture the "soul" of a physical space (like a hallway or a bathroom) or a piece of analog hardware and bring it into **Fruity Convolver**.

## Requirements
1. A source of **Impulse** (The "Starter").
   - *Physical:* A starter pistol, a balloon pop, or a loud clap.
   - *Technical:* A Sine Sweep (Linear or Logarithmic).
2. A recording device (Phone, handheld recorder, or studio mic).

## Process: The Sine Sweep Method (Professional Standard)
1. **Preparation:** Play a 10-second Sine Sweep (20Hz to 20kHz) through the speakers in the room you want to capture.
2. **Recording:** Record the room's response from the position where the listener would be.
3. **Deconvolution:**
   - Load the **Original Sweep** and the **Recorded Response** into Convolver.
   - Use the **Deconvolve** tool.
   - Convolver subtracts the original sweep from the recording, leaving only the **Impulse Response**.

## Workflow for Gear Cloning
1. Play a sharp "White Noise" burst through a hardware distortion pedal or EQ.
2. Record the output.
3. Load into Convolver and use **Normalize**.
4. You now have a "static" digital clone of that hardware's frequency and phase response.
