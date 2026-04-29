# UI Map And Signal Flow: Fruity HTML NoteBook

## UI Tour
The interface is a simple editor window with a few critical navigation icons. [SRC: IL-MAN]

### 1. View / Edit Toggle
- **Pencil Icon**: Switch to **Edit Mode**. This is where you write your HTML tags and text.
- **Eye Icon**: Switch to **Preview Mode**. This renders the code into its final visual form.

### 2. Page Navigation
- **Page Numbers (1-8+)**: The plugin supports multiple pages. Each page can store a different part of your documentation (e.g., Page 1: Credits, Page 2: Mix Notes).

### 3. File Operations
- **Import Button**: Load a `.html` file from your hard drive directly into the notebook.
- **Export Button**: Save your notes as a standard HTML file to share with people who don't have FL Studio.

## Signal Flow
*Note: This is a data-utility, so it does not process audio signals.*
1. **Input (User)**: Code or text is typed into the Edit buffer.
2. **Parsing**: The internal HTML 3.2 engine scans the text for tags like `<b>` or `<table>`.
3. **Rendering**: The engine draws the fonts, colors, and images to the GUI.
4. **Storage**: All text and small embedded images are saved directly into the FL Studio `.flp` file.

## Things Beginners Misunderstand
- **"It's not rendering"**: You must switch out of **Edit Mode** (Pencil) to see the result.
- **Image Paths**: If you use `<img src="C:\MyFolder\Logo.png">`, the image will **disappear** if you move the project to a different computer. You must embed or bundle images correctly.
- **CSS Styles**: You cannot use `<style>` blocks in the header. Use inline styles: `<font color="red">Warning!</font>`.
