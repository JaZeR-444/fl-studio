# Project Conventions

To maintain consistency across the Knowledge Base and any derivative tools, we adhere to the following strict conventions.

## 📂 File Naming

- **Markdown Files:** `kebab-case.md` (lowercase, hyphens).
  - _Good:_ `vocal-lead-workflow.md`
  - _Bad:_ `VocalLeadWorkflow.md`, `vocal_lead.md`
- **JSON Files:** `kebab-case.json` or `camelCase.json` (depending on data type), but strictly lowercase for directories.
- **Directories:** `00-Numbered-Title` for top-level, `kebab-case` for sub-directories.

## 📝 Data Structure Standards

### 1-Based vs 0-Based Indexing

- **User-Facing Text:** Always **1-Based** (Band 1, Band 7).
- **Code/Data ID:** Always **1-Based** (`bandId: 1`).
- **Array Storage:** Always **0-Based** (`bands[0]`).
- _Reasoning:_ FL Studio UI labels them 1-7. Code arrays are naturally 0-6. The `bandId` property bridges this gap explicitly.

### Inverted Bandwidth

We strictly follow FL Studio's internal scale for bandwidth to ensure copy-paste compatibility.

- **0%** = Wide / Gentle
- **100%** = Narrow / Surgical

## 🎨 Semantic Colors

We do not use random colors. Band 1 is ALWAYS Purple. Band 7 is ALWAYS Blue. This establishes a cognitive link between "Purple" and "Sub-Bass" for the user.

## ✍️ Documentation Style

- **Tone:** Professional, encouraging, authoritative but accessible.
- **Action-Oriented:** "Cut -2 dB" instead of "You might want to consider reducing the gain."
- **Headings:** Use emojis in H2 headers to improve visual scanning (e.g., `## 🛠️ The Fix`).

## 🔢 Units

- **Frequency:** `Hz` (or `kHz` for >999, optional but `Hz` preferred for data consistency).
- **Gain:** `dB` (always signed: `+1.0 dB`, `-3.5 dB`).
- **Bandwidth:** `%` (percent).
