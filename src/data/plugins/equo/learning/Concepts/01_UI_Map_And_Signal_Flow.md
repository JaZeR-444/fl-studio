# UI Map And Signal Flow: EQUO

## UI Tour
EQUO's interface is divided into the large display area and the control bank. [SRC: IL-MAN]

### 1. The Spectral Display (The "Grid")
- **Frequency Bands**: A series of vertical bars representing the frequency spectrum.
- **Drawing Tools**: Icons for **Pencil** (Freehand), **Line** (Straight), and **Curve** (Smooth).
- **Target Selector**: Buttons for **Vol** (EQ), **Pan** (Stereo), and **Send** (Mixer Send level).

### 2. The Bank Bank (Top Right)
- **1-8 Selectors**: Click a number to edit that specific EQ state.
- **Master / Individual Switch**: Determines if you are editing one bank or the combined result.

### 3. The Master Knobs (Bottom)
- **Morph**: Interpolates between the selected banks.
- **Shift**: Moves the entire frequency spectrum up or down (Pitch-like effect).
- **BW (Bandwidth)**: Controls how sharp or blurry the interactions between bands are.
- **Mix**: Global Dry/Wet balance.

## Signal Flow
1. **Input Stage**: The stereo signal enters.
2. **Frequency Splitting**: The internal engine splits the audio into multiple fixed-bandwidth bands.
3. **Target Processing**: 
   - If **Vol**: Adjusts gain of each band.
   - If **Pan**: Adjusts stereo position of each band.
   - If **Send**: Adjusts how much of each band is sent to the target mixer track.
4. **Morphing Logic**: The **Morph knob** calculates the weighted average of the active banks' settings.
5. **Summing**: The processed bands are recombined into a single audio signal.
6. **Output**: The signal leaves via the global **Mix** control.

## Things Beginners Misunderstand
- **"It's not an EQ"**: While it can EQ, its resolution is much lower than Parametric EQ 2. It is meant for broad, creative shapes.
- **The "Shift" knob**: It doesn't shift the pitch of the music; it shifts where the EQ filters are sitting. It can create "Phaser" like effects.
- **Send Mode**: To use this, you must have a "Send" track configured in your mixer. EQUO will then send specific frequencies only to that track.
