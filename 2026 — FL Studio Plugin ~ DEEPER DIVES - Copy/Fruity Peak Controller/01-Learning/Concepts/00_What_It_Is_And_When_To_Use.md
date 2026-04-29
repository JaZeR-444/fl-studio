# What It Is And When To Use: Fruity Peak Controller

## Purpose & Identity
Fruity Peak Controller is an **internal controller engine**. It transforms incoming audio levels or an internal LFO into automation data. It doesn't process the audio signal directly; instead, it "listens" to it and outputs control signals that can drive any other knob in FL Studio. [SRC: IL-MAN]

## 60-Second Mental Model
Imagine a sound engineer with their hand on a fader. When they hear the Kick drum, they quickly pull the fader down. Peak Controller is that engineer.
- **The "Peak" part** is the ear (listening to the audio).
- **The "LFO" part** is a robot hand (moving in a set pattern regardless of audio).

## Hip-Hop / R&B Context
The "Bounce" of modern trap is built on Fruity Peak Controller.
- **Sidechaining:** Automating the Bass volume to "duck" every time the Kick hits so the low-end doesn't turn into a muddy mess.
- **Dynamic Reverb:** Making the reverb get quieter while the artist is rapping, then swell up during the pauses for an "expensive" airy feel.
- **Auto-Wah:** Controlling a filter's cutoff based on how hard a guitarist or keyboardist plays.

## When To Use
- When you need **sidechain ducking** but don't want to use a compressor.
- When you want a sound's **amplitude to control another effect** (e.g., Vocal volume controls distortion depth).
- When you need a **tempo-synced LFO** to modulate something that doesn't have an LFO built-in.

## When NOT To Use
- **Surgical Compression:** If you need to actually *squash* the audio signal's dynamics, use **Fruity Limiter**. Peak Controller only generates data; it doesn't change the audio itself.
- **Global Automation:** For simple linear changes (like a fade-out), use a standard **Automation Clip**.
