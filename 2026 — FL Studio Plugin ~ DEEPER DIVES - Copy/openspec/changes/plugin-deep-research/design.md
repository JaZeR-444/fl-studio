## Context

The project aims to provide comprehensive resources for FL Studio users. Currently, we have basic READMEs for various plugins. We need to deepen this by conducting rigorous research into specific plugins to provide "deep dive" level information, including factual data, advanced usage techniques, and effective workflow pairings.

## Goals / Non-Goals

**Goals:**
- Conduct deep research for 9 specific FL Studio plugins: 3x Osc, Drumaxx, Edison, FL Keys, Morphine, Patcher, Soundgoodizer, Toxic Biohazard, Wave Candy.
- Document findings in a structured, consistent manner for each plugin.
- Include factual data (parameters, history if relevant), advanced techniques, and common/effective pairings.
- Update existing documentation to reflect this new depth.

**Non-Goals:**
- Creating new software features for the plugins themselves (we are documenting/researching).
- Researching plugins outside the specified list for this pass.
- Creating video tutorials (text/image based documentation only for now).

## Decisions

### Documentation Structure
**Decision:** Update existing `README.md` files within each plugin's directory.
**Rationale:** Keeps information co-located with the plugin folder. If the content becomes unwieldy, we can split into `RESEARCH.md` later, but starting with the main README ensures visibility.

### Research Methodology
**Decision:** Use a combination of official manuals, user communities (forums, Reddit), and "black box" testing/usage to gather data.
**Rationale:** Ensures a mix of theoretical correctness and practical, real-world applicability.

### Content Format
**Decision:** Standardized sections for each plugin's documentation: "Overview", "Deep Dive / Advanced Features", "Workflow Pairings", "Tips & Tricks".
**Rationale:** Provides a consistent reading experience across all plugin deep dives.

## Risks / Trade-offs

- **Risk:** Information overload.
  - **Mitigation:** Use collapsible sections or clear headers to organize deep content so it doesn't overwhelm the basic intro.
- **Risk:** Outdated information if FL Studio updates.
  - **Mitigation:** Note the FL Studio version used for research where applicable.

## Migration Plan
N/A - purely documentation update.
