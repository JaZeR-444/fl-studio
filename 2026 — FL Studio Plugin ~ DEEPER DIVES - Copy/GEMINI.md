# FL Studio Plugin Deep Dives - Gemini Context

## Project Overview

**FL Studio Plugin Deep Dives** is a comprehensive research and documentation repository focused on the technical analysis, workflow optimization, and advanced usage of FL Studio's plugin ecosystem.

This is primarily a **documentation and data project**, not a traditional software codebase. It aims to provide deep insights beyond the official manual, structured JSON data models for plugin parameters, and a prototype web interface for navigating this information.

**Key Components:**
*   **Deep-Dive Documentation:** 100+ plugin directories with standardized structures.
*   **Structured Data Models:** JSON files defining parameters, presets, and rules (Schema-First).
*   **Web Interface Prototype:** A "Deep Space Cyberpunk" themed dashboard layout.
*   **OpenSpec Integration:** Standardized plugin specifications.

## Repository Architecture

### Top-Level Structure

*   `[Plugin Directories]/`: Individual folders for each plugin (e.g., `Sytrus/`, `Fruity Delay 3/`).
*   `.DONE/`: Archive of completed plugin documentation.
*   `openspec/`: OpenSpec framework integration files.
*   `_screenshots/`: Visual assets and screenshots.
*   `README.md`: Main project index and research guidelines.
*   `CLAUDE.md`: Detailed developer and contributor guidelines.
*   `fl-studio-online-manual-plugin-pages.md`: Links to the official Image-Line manual.
*   `EXAMPLE-PLUGIN-PAGE-LAYOUT.html` & `globals.css`: Web interface prototypes.

### Standardized Plugin Folder Structure

Every plugin directory follows this strict 4-folder organization:

*   **`01-Learning/`**: Educational content (Quick-Reference, Concepts, Band-Guides).
*   **`02-Data/`**: Structured JSON data (Parameters, Presets, Rules, Schema).
*   **`03-Workflows/`**: Practical application guides (By Symptom, Instrument, or Goal).
*   **`04-Reference/`**: Technical specs, integration guides, glossary.
*   **`README.md`**: Plugin-specific research guidelines and status.
*   **`00-START-HERE.md`**: (Optional) Quick navigation guide.

## Development & Contribution Conventions

### Documentation Standards
*   **File Naming:** Use `kebab-case.md` for Markdown and JSON files. Images can use descriptive names.
*   **Structure:** strictly adhere to the 4-folder pattern (`01-Learning` ... `04-Reference`).
*   **Priorities:**
    *   ⭐ **HIGH:** Essential docs (Cheat sheets, Signal flow).
    *   🟡 **MEDIUM:** Advanced features, optimizations.
    *   🔵 **LOW:** Edge cases, specialized uses.
*   **Content:** Avoid generic advice; focus on specific FL Studio contexts. Always link to the official manual.

### Data Model Philosophy
*   **JSON-First:** The repository treats data as the single source of truth.
*   **Validation:** Use JSON Schemas (`02-Data/schema/`) to validate data files.
*   **Composition:** Presets are built from reusable "archetypes" (e.g., a specific band setting).

### Web Interface Design System
*   **Theme:** "Deep Space Cyberpunk" (Dark background, Purple accents, Glassmorphism).
*   **Components:** Glass cards, fixed sidebar, tab-based navigation.
*   **CSS:** Defined in `globals.css`.

## Key Files & Resources

*   **`README.md`**: The central hub for the repository. Start here to navigate plugins.
*   **`CLAUDE.md`**: **CRITICAL** - Contains detailed rules for directory structure, JSON schemas, and design systems. Refer to this for deep structural questions.
*   **`Organization_Summary_YYYYMMDD.md`**: Tracks the current status of repository organization and cleanup tasks.
*   **`fl-studio-online-manual-plugin-pages.md`**: Source for official documentation links.

## Common Tasks

### Starting New Research
1.  Create a directory with the exact Plugin Name.
2.  Copy the structure from a reference plugin (e.g., `Fruity Parametric EQ 2` or `.DONE/FLEX`).
3.  Initialize `README.md` with research priorities.
4.  Populate `01-Learning` with basic cheat sheets.

### Validating Data
1.  Check `02-Data/schema/` for relevant JSON schemas.
2.  Ensure new JSON files in `parameters/` or `presets/` conform to these schemas.

### Web UI Prototyping
1.  Duplicate `EXAMPLE-PLUGIN-PAGE-LAYOUT.html`.
2.  Update content within the `.glass-card` containers.
3.  Ensure `globals.css` is correctly linked.
