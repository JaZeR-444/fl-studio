# SynthMaker Parameter Cheat Sheet

| Primitive | Type | Role | Research Insight |
| :--- | :--- | :--- | :--- |
| **Float** | Red | Static | Fixed values (e.g., 440.0 for pitch). |
| **Int** | Red | Static | Whole numbers (e.g., 1 or 0 toggles). |
| **Stream** | White/Blue | Audio | Real-time signal (Sample rate speed). |
| **Event** | Green | Logic | Only triggers on change (Saves CPU). |
| **Poly** | Blue | Synth | Handles multiple voices automatically. |
| **Bitmap** | Yellow | GUI | Custom graphics for your plugin skin. |

## Quick Troubleshooting:
- **White to Green?** Use a "Stream to Float" node.
- **Green to White?** Use a "Float to Stream" or "ADSR" node.
- **Silent Sound?** Check the "Midi to Poly" connection.
