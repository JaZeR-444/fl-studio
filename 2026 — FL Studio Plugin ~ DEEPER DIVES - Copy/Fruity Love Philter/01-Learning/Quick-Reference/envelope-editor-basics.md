# Quick Reference: Envelope Editor Basics

How to draw your sound in Love Philter. [SRC: IL-MAN]

## 1. The Tabs
- **Env**: A one-shot or repeating envelope.
- **LFO**: A periodic wave (Sine, Square, etc.).
- **Map**: Links a MIDI value (Key, Velocity) to the parameter.

## 2. Tools & Shortcuts
- **Right-Click Node**: Change curve type (Single curve, Double curve, Step, etc.).
- **Shift + Click**: Lock horizontal/vertical movement.
- **Alt + Click**: Reset node to default.
- **Articulator Options (Small Triangle)**: 
  - **Copy/Paste**: Move curves between Cut, Res, and Vol.
  - **Analyze Audio**: (If available) creates a curve based on an audio file.

## 3. The "Sync" Control
- **Snap**: Snaps nodes to the grid.
- **Sync**: Locks the envelope to the project tempo (Beats/Bars).
- **Global**: If ON, all notes share the same LFO phase. If OFF, every new note restarts the LFO from the beginning.

## 4. Tension Handle
- Drag the small circle between two nodes to change the "tension."
- **Concave**: Slow start, fast finish.
- **Convex**: Fast start, slow finish.
- **Linear**: Straight line.
