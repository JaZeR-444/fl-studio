# Key Tracking (Musical EQ)

You can "tune" the EQ bands to follow the notes you play. This is incredible for Bass design, where the fundamental frequency moves with every note.

## 🛠️ The Setup

1.  Add **Fruity Parametric EQ 2** to your Synth's mixer channel.
2.  Right-click the **Band 1 Freq** knob (or any band).
3.  Select **"Link to controller..."**.
4.  In the "Internal controller" section, select: **"Note - Keyboard Controller"** (if using Patcher) OR ensure you have a **Fruity Keyboard Controller** standard setup.

### The "Keyboard Controller" Method (Standard)

1.  Add a **Fruity Keyboard Controller** channel.
2.  Open it. Right-click the knob, "Type in value", type **20**. (This maps C0 to 20%).
3.  Go to EQ 2. Right-click **Band 1 Freq** -> **Link to controller**.
4.  Select **Internal controller: Keyboard Controller - Note**.
5.  In the Mapping formula, choose **"Logarithmic"** (or adjust until C5 = 523 Hz). _Note: Mapping linear MIDI notes to Logarithmic Hz requires a specific formula._

### The Formula

For accurate 1:1 Hz tracking, use this mapping formula in the Link dialog:
`Log(Input + 0.5)` (Approximation - tuning by ear is often required).

---

## 🎹 Use Cases

### 1. The "Singing" Resonance

- **Band 5 (Bell), Gain +12dB, Narrow Q.**
- Link Freq to Key.
- The EQ boost moves with your melody, creating a vocoder-like or physical modeling resonance.

### 2. Consistent Sub-Bass

- **Band 1 (Bell), Gain +3dB.**
- Link Freq to Key.
- Tracks the fundamental of your 808.
- _Benefit:_ Your low E note gets the same boost as your high C note. Without tracking, a static 50 Hz boost would make the E loud but the C weak.
