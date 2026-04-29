# What It Is And When To Use: Fruity Keyboard Controller

## Purpose & Identity
Fruity Keyboard Controller is a **note-to-automation bridge**. Its primary identity is a generator that doesn't make sound, but instead converts MIDI notes and velocity into data signals. It allows you to "play" an effect parameter (like a filter cutoff or reverb mix) using the Piano Roll as if it were a melodic instrument. [SRC: IL-MAN]

## 60-Second Mental Model
Think of it as a "Translator." It takes the pitch of a note (C5, D5, etc.) or the hardness of a hit (Velocity) and turns it into a knob position (0 to 100%). You can then link any knob in FL Studio to this signal. If you play a scale in the Piano Roll, the target knob will follow that scale.

## Hip-Hop / R&B Context
- **Vocal Glitch Sequencing:** Mapping the "Note" output to a Mute plugin. You can then "play" rhythmic cuts in a vocal by drawing patterns in the Piano Roll (Upbeat).
- **Expressive Electric Piano:** Mapping "Velocity" to a filter cutoff. Harder hits make the keys sound brighter and "Vibey."
- **Key-Tracked Distortion:** Mapping "Note" to a distortion drive. High-pitched melodies get grittier, while low-pitched ones stay clean (Psychedelic).

## When To Use
- When you want to **sequence automation** with the precision of the Piano Roll.
- When you need a plugin to **react to the pitch** you are playing (Key Tracking).
- When you want to use **MIDI Velocity** to control non-expressive effects.

## When NOT To Use
- **Simple LFOs:** Use **Fruity LFO** or **Formula Controller** if you just want a standard repeating wave.
- **Envelope Control:** Use **Fruity Envelope Controller** if you need ADSR-style shaping rather than just note-to-value mapping. [SRC: REPUTABLE]