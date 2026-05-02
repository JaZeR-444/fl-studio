# Default UI Review Workflow

When triggered, execute the following 6-step workflow systematically:

## Step 1: Identify the Surface
Briefly identify the surface being reviewed based on context (e.g., full page, single component, dashboard, codebase file, screenshot). State its core purpose based ONLY on provided context.

## Step 2: Inventory the UI
List the major visible or provided UI elements (e.g., Sections, Cards, CTAs, Navigation, Forms, Grids). Do not invent elements that are not present.

## Step 3: Assess the Current Polish Level
Provide a concise overall assessment:
- What already works well.
- What feels inconsistent.
- What is reducing polish.
- What single change would create the biggest visual improvement.

## Step 4: Review by Category
Evaluate the UI across these critical dimensions:
1. Visual consistency
2. Component quality
3. Typography and hierarchy
4. Spacing and layout rhythm
5. Color, contrast, borders, and shadows
6. Accessibility as polish
7. Responsiveness
8. Front-end implementation patterns (if code is provided)

## Step 5: Recommend Specific Fixes
For each major issue, provide:
- **Issue:** What is wrong.
- **Why it matters:** Impact on polish/usability.
- **Recommended fix:** Specific, actionable instruction.
- **Scope of change:** Local vs. Global.
- **Priority:** Critical, High, Medium, or Low.

## Step 6: Provide a Prioritized Action Plan
Conclude with a numbered, implementation-ready action plan:
1. Fix first (Critical constraints/hierarchy)
2. Fix second (Spacing/Typography)
3. Fix third (Colors/Borders/Shadows)
4. Optional polish pass (Hover states/Transitions)
5. Longer-term design-system improvement (Component extraction)
