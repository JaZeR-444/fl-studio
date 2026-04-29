# Technical Reference: Pattern Manager & MIDI Import

How to leverage the built-in groove library of FPC. [SRC: IL-MAN]

## 1. What are FPC Patterns?
FPC contains an internal library of MIDI drum patterns (loops).
- **Access**: The number/name box at the bottom of the UI.
- **Library**: Includes Rock, Hip-Hop, Funk, and Jazz grooves.

## 2. Using MIDI Grooves
- **Audition**: Select a pattern and press play in FL Studio. FPC will loop the MIDI data internally.
- **Drag to Playlist**: Click and drag the **MIDI Icon** (the notes) from the FPC interface directly onto your Playlist.
- **Benefit**: This allows you to quickly sketch a high-quality rhythm and then edit the notes in the Piano Roll.

## 3. Importing Custom MIDI
- **Procedure**: You can save your own Piano Roll data as an FPC pattern.
- **Move**: Click the **Down Arrow** in the Piano Roll -> **File -> Save score as...**
- **Save Location**: Place the `.fsc` file in the `FL Studio/Data/Patches/Plugin presets/Generators/FPC/Scores` folder.
- **Result**: Your custom groove will now appear in the FPC pattern selector for every new project.

## 4. The "Beat Slice" Interaction
- **Advanced Move**: If you have a loop in **Slicex**, you can drag the marker regions directly into FPC pads.
- **Logic**: This turns a rhythmic loop into a playable kit of individual slices.
