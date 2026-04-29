## Context

The previous attempt to document plugin research resulted in technical data being appended to the `README.md` files, cluttering the navigation structure. The user explicitly requested that the specific research files (cheat sheets, workflows, etc.) be created in their respective subfolders (`01-Learning`, `02-Data`, etc.).

## Goals / Non-Goals

**Goals:**
- Systematically create and populate the subfolder structure for 9 plugins.
- Move relevant technical content from the current `README.md` files into the new specialized files.
- Restore `README.md` files to their role as high-level guides/indexes.

**Non-Goals:**
- New research outside of what was already gathered (unless gaps exist).

## Decisions

### File Organization
**Decision:** Use the standardized folder structure proposed in the initial research plan for all plugins.
- `01-Learning/Quick-Reference/`
- `02-Data/parameters/`
- `03-Workflows/by-goal/`
- `04-Reference/`

**Rationale:** Consistency across all plugin documentation makes it easier to navigate.

### Content Migration
**Decision:** Manually extract content currently in `README.md` sections (like "Parameter Deep Dive") and move it to `01-Learning/Quick-Reference/parameter-cheat-sheet.md`.
**Rationale:** The content exists but is in the wrong place. Moving it preserves the work while fixing the structure.

## Risks / Trade-offs

- **Risk:** Overwriting user edits.
  - **Mitigation:** The user has explicitly asked for this population, implying they want the files created. I will verify file existence before writing if needed, but given the request, overwriting empty/placeholder files is likely intended.

## Migration Plan
1. For each plugin, create directories.
2. Create `parameter-cheat-sheet.md` and populate with data.
3. Create specific workflow files and populate.
4. Clean `README.md`.
