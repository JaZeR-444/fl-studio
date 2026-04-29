# Workflow: Embedding Images (Visual Guide)

*Goal: Include track artwork or routing diagrams inside your project documentation.*

## 🚶 Step-by-Step Setup
1. **Prepare Image**: Take your screenshot. Save it as a `.jpg` or `.png`.
2. **Optimize**: Keep the resolution low (e.g., 800px wide). Use a compressor like TinyJPG to get the file size under 100kb.
3. **Storage**: Save the image in the same folder as your FL Studio project file (`.flp`).
4. **The Code**: Switch to **Edit Mode** in the NoteBook. Use the tag:
   `<img src="my_diagram.jpg" width="100%">`
5. **Preview**: Switch to **Preview Mode**. The image should now fill the width of the NoteBook window.

## 🔄 Variations
- **The "Thumbnail"**: Use `width="50px"` to create a small icon.
- **The "External Link"**: Use a full URL if the image is hosted online:
  `<img src="https://mywebsite.com/logo.png">`

## ⚠️ Pitfalls & Fixes
- **Problem**: Image shows as a broken icon.
- **Fix**: Check the spelling of the filename. Ensure it is in the same folder as the project. 
- **Important**: FL Studio does not "pack" the image into the `.flp` unless you use a specific "Zipped Loop Package." [SRC: IL-MAN]
