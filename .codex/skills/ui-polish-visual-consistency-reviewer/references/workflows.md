# Workflows for UI Polish & Visual Consistency Reviewer

## Workflow 1: Quick Polish Pass

Use when the user wants a short, practical review.

1. Identify the page or component purpose.
2. Identify the top 3 to 5 visual issues.
3. Prioritize spacing, hierarchy, card consistency, and CTA clarity.
4. Recommend fixes in order of impact.
5. Avoid deep design-system analysis unless repeated inconsistencies are obvious.

## Workflow 2: Full Page UI Audit

Use when the user asks for a complete page review.

1. Identify the page purpose.
2. Identify what is already working.
3. Review layout and spacing.
4. Review typography hierarchy.
5. Review card and content block consistency.
6. Review CTAs, buttons, and badges.
7. Review color, contrast, and background treatment.
8. Review navigation or forms if present.
9. Review responsive behavior if evidence is available.
10. Separate major issues from minor polish.
11. Recommend reusable design-system rules.
12. End with implementation guidance.

## Workflow 3: Code-Aware Styling Review

Use when the user provides React, Tailwind, CSS, HTML, or component code.

1. Read the code before recommending changes.
2. Identify the component purpose.
3. Identify existing styling conventions.
4. Preserve existing content and logic.
5. Identify inconsistent classes, spacing, color usage, surfaces, borders, typography, and responsive rules.
6. Recommend targeted code-level improvements.
7. Suggest reusable variants, tokens, or shared components when repeated patterns exist.
8. Provide code only when requested.

## Workflow 4: Screenshot-Based UI Review

Use when the user provides screenshots.

1. Review only visible UI.
2. Identify the likely page purpose.
3. Evaluate visual hierarchy, spacing, alignment, card consistency, color, contrast, and section rhythm.
4. Avoid assumptions about code or hidden states.
5. Provide specific visual recommendations.
6. Mention limitations clearly.

## Workflow 5: Cross-Page Consistency Review

Use when the user provides multiple pages, screenshots, or components.

1. Identify the shared product, site, or portfolio purpose.
2. Compare repeated elements across pages.
3. Look for inconsistent:
   - Section spacing
   - Card padding
   - Border radius
   - Shadows
   - Accent colors
   - Typography scale
   - CTA styles
   - Badge styles
   - Navigation states
   - Background surfaces
4. Recommend a unified design system.
5. Prioritize reusable patterns over one-off fixes.
6. Do not rewrite content or invent missing sections.

## Workflow 6: Portfolio Review

Use when reviewing a professional portfolio, résumé site, sales page, case study page, or hiring-focused page.

1. Identify the page's hiring purpose.
2. Check whether recruiters can scan the page quickly.
3. Make sure proof points are visually easy to find.
4. Improve hierarchy around metrics, role fit, technical fluency, and CTAs.
5. Keep the design credible and restrained.
6. Avoid exaggerating the user's technical identity.
7. Preserve existing career positioning unless the user asks for a positioning rewrite.

## Workflow 7: Dashboard Review

Use when reviewing dashboards, internal tools, command centers, CRMs, or operational apps.

1. Identify the dashboard's operational purpose.
2. Identify primary data, secondary data, and actions.
3. Check whether key information is visible without excessive scanning.
4. Review cards, tables, filters, badges, status indicators, and alerts.
5. Prioritize clarity and actionability over decorative styling.
6. Recommend consistent patterns for states, density, and data hierarchy.