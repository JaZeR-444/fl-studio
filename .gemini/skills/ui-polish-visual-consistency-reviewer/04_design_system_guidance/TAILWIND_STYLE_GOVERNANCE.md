# Tailwind Style Governance

When reviewing codebases using Tailwind CSS, enforce these best practices:

## 1. Avoid Utility Bloat
If a `className` exceeds ~10-15 utilities and is repeated across multiple elements, recommend extracting it.
- **Bad:** Repeating `<button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">` everywhere.
- **Fix:** Map this to a reusable component, or use a tool like `cva` (Class Variance Authority) to manage variants.

## 2. Eliminate Contradictory Classes
Spot overlapping properties that indicate messy copying/pasting.
- **Bad:** `p-4 px-6 pt-2` (Contradictory paddings).
- **Fix:** Clean up to single, precise definitions.

## 3. Grouping Logic
Suggest a logical order for classes (even if Prettier does this, mental grouping helps developers):
1. Layout (`block`, `flex`, `grid`)
2. Spacing (`p-4`, `m-2`)
3. Sizing (`w-full`, `h-10`)
4. Typography (`text-sm`, `font-bold`)
5. Visuals (`bg-white`, `rounded-md`, `shadow`)
6. States (`hover:`, `focus:`, `md:`)
