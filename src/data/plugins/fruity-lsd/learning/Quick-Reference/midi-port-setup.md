# Quick Reference: MIDI Port Setup (The Connection)

Follow these steps exactly to make Fruity LSD produce sound. [SRC: IL-MAN]

## Step 1: The Mixer
- Go to an empty Mixer Track.
- Load **Fruity LSD** into one of the effect slots.

## Step 2: The Port
- Look at the top right of the Fruity LSD window.
- Set the **Port** to a unique number (e.g., **10**).

## Step 3: The Generator
- Add a new channel to your Channel Rack: **MIDI Out**.
- Set the **Port** in the MIDI Out plugin to match LSD (**10**).

## Step 4: The Channel
- In the MIDI Out plugin, ensure the **Channel** is set to **1**.
- Click the **Patch** box in MIDI Out. Select a sound (e.g., Acoustic Grand Piano).

## Step 5: Verification
- Play a key on your MIDI keyboard or the Piano Roll of the MIDI Out channel.
- You should see the level move in the Mixer track where Fruity LSD is loaded.

---
**Pro Tip**: Use a different **Channel** (1-16) in MIDI Out to play different sounds from the same instance of Fruity LSD.
