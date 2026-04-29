# Integration Guide: "EQ Vibes" UI/UX

This guide defines the aesthetic and user experience patterns used in the "Fruity Parametric EQ 2 Knowledge Base." When building tools or interfaces based on this data, follow these conventions to maintain the "Vibe."

## 🎨 Color System

The 7 bands follow a specific gradient corresponding to the visible light spectrum (Low Frequency = Low Energy/Red end; High Frequency = High Energy/Blue end).

| Band  | Color  | Hex Code  | Purpose          |
| ----- | ------ | --------- | ---------------- |
| **1** | Purple | `#8B5CF6` | Sub / Foundation |
| **2** | Pink   | `#EC4899` | Warmth / Body    |
| **3** | Orange | `#F97316` | Boxiness         |
| **4** | Yellow | `#EAB308` | Honk / Nasal     |
| **5** | Green  | `#10B981` | Presence         |
| **6** | Teal   | `#06B6D4` | Detail           |
| **7** | Blue   | `#3B82F6` | Air              |

**Implementation Note:**
In your UI, these colors should be used for:

- Band tokens/icons
- Frequency curve lines
- Active state indicators

---

## 👻 Visualizing the "Ghost"

In the context of this knowledge base, the "Ghost" refers to the spectral analyzer background.

- **Concept:** "See what you hear."
- **UI Requirement:** Any tool visualizing this data should ideally underlay a frequency spectrum graph behind the EQ curve.
- **Y-Axis:** +18 dB to -18 dB.
- **X-Axis:** 20 Hz to 20 kHz (Logarithmic).

---

## 🖱️ Interaction Patterns

### The "Token" Control

Users interact with "Tokens" (the floating circles), not sliders.

- **Drag Horizontal:** Changes Frequency.
- **Drag Vertical:** Changes Gain.
- **Scroll Wheel:** Changes Bandwidth.

### Tooltips

When a user hovers over a Token, the UI should display the **Educational Role** defined in `02-Data/band-definitions/all-7-bands.json`.

- _Example:_ Hovering Band 2 shows: _"Zone: Warmth/Body - Cut to remove mud."_

---

## 🧩 Preset Action Buttons

When implementing the **Archetypes** (`02-Data/presets/band-archetypes.json`), use "Chip" style buttons.

- **Design:** Rounded pill shape.
- **Label:** Archetype Name (e.g., "De-Mud").
- **Action:** On click, snaps the corresponding band to the archetype settings.
- **Feedback:** The band line animates to the new position.
