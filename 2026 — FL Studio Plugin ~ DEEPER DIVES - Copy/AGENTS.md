# Repository Guidelines

## Project Structure & Module Organization

This repository is a documentation and data model collection for FL Studio plugins. Each plugin lives in its own top-level folder (e.g., `Fruity Parametric EQ 2/`, `Autogun/`). Inside plugin folders, content follows a consistent four-part layout: `01-Learning/`, `02-Data/`, `03-Workflows/`, and `04-Reference/`. Shared assets and references live at the root (e.g., `globals.css`, `EXAMPLE-PLUGIN-PAGE-LAYOUT.html`, `fl-studio-online-manual-plugin-pages.md`). Completed plugin work is archived under `.DONE/`. OpenSpec workflow files live in `openspec/`.

## Build, Test, and Development Commands

There is no build system or runtime for this repo. Work is file-based. Common tasks are simple file edits and schema checks. Example commands:

- `rg --files` to inventory content.
- `Get-Content README.md` to review project guidance.

## Coding Style & Naming Conventions

- Markdown files: `kebab-case.md` (e.g., `parameter-cheat-sheet.md`).
- JSON files: `kebab-case.json`; JSON keys use `camelCase`.
- Plugin folders: Title Case with spaces, matching official plugin names.
- Keep content concise and plugin-specific; avoid generic advice.
- When editing a plugin, read the plugin’s `CLAUDE.md` first if present.

## Testing Guidelines

No automated tests are configured. For JSON data files in `02-Data/`, validate against any schemas in `02-Data/schema/` and keep structures consistent with established plugin patterns (e.g., `Fruity Parametric EQ 2/` as the reference model).

## Commit & Pull Request Guidelines

This directory is not currently a Git repository, so there is no commit history to infer conventions from. If you initialize Git, use clear, imperative commit messages (e.g., `Add Gross Beat workflow recipes`) and include:

- A concise summary of what changed and why.
- Links to source material or manual pages when applicable.
- Screenshots for UI or layout changes (`_screenshots/`).

## Security & Configuration Tips

This project contains documentation only; avoid adding proprietary or copyrighted content beyond brief excerpts. Prefer linking to official manuals in `fl-studio-online-manual-plugin-pages.md`.
