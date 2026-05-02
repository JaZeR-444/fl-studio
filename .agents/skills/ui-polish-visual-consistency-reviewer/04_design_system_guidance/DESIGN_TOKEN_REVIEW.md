# Design Token Review

When reviewing code, look for hardcoded arbitrary values and suggest moving them to a design token system (like `tailwind.config.js` or CSS variables).

## 1. Arbitrary Values
- **Bad:** `w-[325px]`, `mt-[17px]`, `bg-[#1a2b3c]`.
- **Fix:** Map to the nearest standard token (`w-80`, `mt-4`). If it represents a brand color, configure it globally (e.g., `bg-brand-dark`).

## 2. Token Inconsistency
- If a project uses `text-gray-500` in one component, `text-slate-500` in another, and `text-zinc-500` in a third, flag this! A project should commit to one gray palette to ensure visual cohesiveness.

## 3. Semantic Meaning
- Recommend semantic names for custom tokens rather than literal ones.
- **Bad:** `text-blue-500` hardcoded everywhere for links.
- **Good:** Extending the theme to have `text-primary`.
