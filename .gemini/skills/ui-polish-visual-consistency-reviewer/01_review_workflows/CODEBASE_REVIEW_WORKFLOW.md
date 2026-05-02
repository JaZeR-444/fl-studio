# Codebase Review Workflow

When reviewing front-end styling code (Tailwind, CSS Modules, Styled Components, etc.) without a visual screenshot:

1. **Utility Class Audit (Tailwind):**
   - Look for bloated `className` strings with 15+ utilities.
   - Spot contradictory classes (e.g., `p-4 px-6`).
   - Identify hardcoded arbitrary values (e.g., `w-[325px]`, `text-[#112233]`) and recommend mapping them to the `tailwind.config.js` theme.

2. **Componentization Check:**
   - Look for duplicated styling blocks across multiple HTML elements (e.g., three identical div structures for cards).
   - Recommend extracting these into reusable functional components with a `variant` prop.

3. **Responsive Logic Review:**
   - Check mobile-first implementation (e.g., base styles for mobile, `md:`, `lg:` modifiers for larger screens).
   - Flag elements that lack responsive wrapping logic (e.g., `flex` without `flex-col` on mobile).

4. **Interactive States:**
   - Check for the presence of `hover:`, `focus:`, `active:`, and `focus-visible:` states. Recommend adding them if missing for accessibility and polish.
