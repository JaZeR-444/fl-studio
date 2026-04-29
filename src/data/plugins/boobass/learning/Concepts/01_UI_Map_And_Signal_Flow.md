# UI Map And Signal Flow: BooBass

## UI Tour
BooBass features one of the simplest interfaces in FL Studio, modeled after a classic bass amp. [SRC: IL-MAN]

### 1. The Tone Stack (EQ)
- **Bass**: Boosts or cuts the low frequencies (~60Hz - 150Hz). 
  - *Right*: Adds weight and "thump."
- **Mid**: Adjusts the presence and "body" (~400Hz - 800Hz).
  - *Right*: Makes the bass sound more "aggressive" and helps it cut through guitars.
- **Treble**: Adjusts the string "snap" and "air" (~2kHz - 5kHz).
  - *Right*: Adds definition to the attack of the fingers hitting the strings.

### 2. Global Control
- **Output (Gain)**: Master fader to set the final level.

## Signal Flow
1. **Trigger**: MIDI note is received.
2. **Sample Selection**: The engine triggers the high-quality electric bass sample corresponding to the pitch.
3. **Monophonic Logic**: If a new note is played, the previous note is immediately cut off (simulating a bassist playing a single string).
4. **Tone Shaping (The Amp)**: The signal passes through the 3-band EQ (Bass, Mid, Treble).
5. **Output**: The processed organic bass signal is sent to the mixer.

## Things Beginners Misunderstand
- **"It sounds too plain"**: BooBass is a "dry" instrument. To make it sound professional, you almost always need to add an **Amp Simulator** (like Hardcore or Distructor) in the mixer.
- **Velocity**: BooBass is velocity-sensitive. Playing notes at 100% velocity triggers a more "aggressive" string hit, while 50% velocity sounds more "mellow."
- **Polyphony**: You cannot play chords in BooBass. This is a feature, not a bug—it forces you to write realistic basslines.
