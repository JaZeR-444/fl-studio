# Grid Layout Patterns

## CSS Grid Usage
- Always prefer `grid` over `flex` for multi-row card layouts to ensure equal heights and alignments.
- **Standard setup:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`.

## Gap Consistency
- Use a consistent spacing token for grids. `gap-6` (24px) or `gap-8` (32px) are industry standards for card grids.

## Edge Cases
- **Orphans:** If a 3-column grid has 4 items, the 4th item will sit alone on the second row. Ensure this looks intentional, or suggest adjusting the column count.
- **Equal Heights:** Ensure grid children stretch to fill the height (default grid behavior, but often broken by nested divs missing `h-full`).
