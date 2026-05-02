# Responsive Breakpoint Guidance

Enforce consistent, mobile-first responsive design.

## The Standard Approach
- **Base (Mobile):** The default classes should apply to mobile devices.
- **`sm:` (640px):** Large phones / Small tablets.
- **`md:` (768px):** Tablets (Portrait). Often the breakpoint for moving from 1 column to 2.
- **`lg:` (1024px):** Laptops / Desktop. Often the breakpoint for full horizontal navigation.
- **`xl:` / `2xl:`:** Wide monitors.

## Common Issues to Flag
1. **Desktop-First Anti-Pattern:** Writing classes like `flex w-1/3 md:w-full`. This is backward and requires overriding. It should be `w-full md:w-1/3`.
2. **Missing Mobile Logic:** Large font sizes (`text-5xl`) without a smaller mobile variant (`text-3xl md:text-5xl`), resulting in broken text wrapping on phones.
3. **Hidden Content:** Using `hidden md:block` excessively instead of refactoring the layout to adapt gracefully to mobile.
