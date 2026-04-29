# UI Map And Signal Flow: Fruity NoteBook 2

## UI Tour
1.  **Page Slider:** Selects pages 1 through 100.
2.  **Zoom Engine (Hidden):** Activated by holding **Ctrl + Mouse Wheel**. This is the primary upgrade over NoteBook 1.
3.  **Options Menu (Gear Icon):** 
    - **Auto-popup:** Automatically opens the plugin window when the project is loaded. [SRC: IL-MAN]
    - **Detached:** Allows the window to float on top of other FL Studio windows.
4.  **Text Area:** Clean, modern rendering of UTF-8 text.

## Functional Flow
1.  **Buffer Loading:** Text is read from the project binary. NoteBook 2 is more robust with UTF-8 character encoding than the legacy version.
2.  **Rendering:** The UI calculates the zoom level and wraps text to the current window width.
3.  **Display:** Shows the active page. Automation of the Page Slider triggers an instant redraw.

## Things Beginners Misunderstand
- **Zoom Persistence:** The zoom level is global for all pages. You can't have Page 1 zoomed in and Page 2 zoomed out.
- **Font Colors:** Unlike NoteBook 1, NoteBook 2 focuses on clean, readable text. If you can't get colors to work via copy-paste, stick to ASCII-based emphasis (e.g., `*** HEADER ***`).
- **Input Focus:** You must click inside the text area to type. If the window isn't focused, your keyboard shortcuts might trigger FL Studio transport controls instead (e.g., Spacebar for Play). [SRC: REPUTABLE]
