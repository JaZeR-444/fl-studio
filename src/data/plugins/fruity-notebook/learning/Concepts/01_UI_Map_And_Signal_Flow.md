# UI Map And Signal Flow: Fruity NoteBook

## UI Tour
1.  **Page Knob:** The only automatable control. It ranges from 1 to 100.
2.  **Text Canvas:** The large area where you type or paste text. Supports standard Windows shortcuts (Ctrl+C, Ctrl+V).
3.  **Scrollbar:** Appears automatically if text exceeds the window height.
4.  **Formatting (Hidden):** There are no formatting buttons in the UI. You must paste **Rich Text** (RTF) from an external editor (like WordPad) to change fonts or colors. [SRC: IL-MAN]

## Functional Flow
1.  **Project Load:** NoteBook loads text data from the `.flp` file.
2.  **Page Lookup:** The Page Knob determines which of the 100 internal text buffers is displayed.
3.  **Automation Check:** If the playhead is moving and the Page Knob is linked, the UI refreshes instantly to the new page content.
4.  **Auto-Save:** Any text typed is saved directly into the project state (no external files needed).

## Things Beginners Misunderstand
- **Page Deletion:** You can't "delete" a page; you just clear the text. The 100 pages always exist.
- **Formatting Persistence:** Plain text copied from a web browser will lose all color/font data. To keep formatting, you must copy from an **RTF-capable** application. [SRC: REPUTABLE]
- **Portability:** If you use a rare font from your computer, a collaborator might see a default font (like Arial) if they don't have that font installed. [SRC: IL-KB]
