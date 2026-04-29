# Core Techniques And Best Practices: Fruity HTML NoteBook

## 1. The "Color Code" Warning
Use colors to quickly identify the status of tracks for a collaborator.
- **Technique**: Use `<font color="#FF0000"><b>FIX THIS</b></font>` for issues and `<font color="#00FF00">READY</font>` for completed tracks.
- **Benefit**: Immediate visual recognition when opening the project.

## 2. Table-Based Tracklists
Create a structured list of everything in the project.
- **Technique**: Use the `<table>` tag to create columns for "Instrument," "Source," and "Note."
- **Benefit**: Keeps messy sample notes organized and easy to read.

## 3. Embedding Low-Res Diagrams
Use a screenshot tool to capture your Mixer routing and embed it.
- **Technique**: Save images as small, compressed JPGs to avoid project bloat.
- **Reference**: `<img src="routing_diagram.jpg" width="100%">`.

## 4. Emoji Icons
Since modern HTML NoteBook supports many Unicode characters, you can use Emojis.
- **Technique**: 🔥 for "Heat/Fire" sounds, 🌊 for "Vibey" pads, 🛑 for "Don't touch."
- **Benefit**: Makes documentation fun and readable.

## 5. Mono-Compatibility Checklist
- **Protocol**: Always include a "Mono-Check" step in your HTML NoteBook mixing checklist.
- **Code**: `<li>[ ] Check 808 in Mono</li>`.

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **Broken Layout** | Check for unclosed tags like `</b>` or `</table>`. |
| **Missing Images** | Move images into the same folder as the project file or use relative paths. |
| **Slow Project Loading** | You have embedded a massive image. Reduce image file size to <100kb. |
