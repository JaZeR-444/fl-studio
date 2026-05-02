# Component Review Matrix

When reviewing a UI, cross-reference visible components with this matrix to ensure thorough, standard evaluation.

| Component Type | Core Checks | Common Anti-Patterns to Flag |
| -------------- | ----------- | ---------------------------- |
| **Cards** | Padding, borders, shadow, title hierarchy. | Content touching edges, missing hover states, inconsistent heights in grids. |
| **Buttons** | Size, padding, clear variant (primary/secondary). | Too many distinct button styles across one page, tiny touch targets. |
| **Navigation** | Sticky behavior, active states, CTA visibility. | Cluttered links, poorly scaling mobile hamburger menu. |
| **Forms** | Input padding, clear borders, focus rings. | Invisible inputs, labels without clear association, cramped spacing. |
| **Badges** | Text size (smaller than body), subtle backgrounds. | Huge badges that look like buttons, low contrast text. |
| **Headers** | Eyebrow spacing, title weight, subtitle readability. | Massive text on mobile, centered text that spans the whole screen width. |
| **Grids** | Gap consistency, responsive wrapping. | Uneven gaps, orphan items stretching awkwardly on the last row. |
