# Good UI Feedback Examples

When providing feedback, you MUST be specific, actionable, and tied to UI principles.

## Example 1: Spacing
**Good:** "Increase the vertical separation between the Hero section and the Features section from `py-8` to `py-24`. Currently, they feel blended together. Tighten the internal gap inside the feature cards to `gap-2` so the icon and text feel like a cohesive unit."

## Example 2: Typography
**Good:** "The section headers are competing with the page title. Reduce the section headers from `text-4xl` to `text-2xl font-semibold` and add an uppercase tracking eyebrow (`text-sm tracking-wide text-blue-600`) above them to establish clear hierarchy without relying on massive font sizes."

## Example 3: Component Variants
**Good:** "I see 4 different button styles across the page. Standardize all primary actions to `bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700` and convert the rest to a secondary outline variant. Extract this into a reusable `<Button variant="primary">` component."

## Example 4: Shadows & Borders
**Good:** "The black drop shadows on the cards (`shadow-xl`) are too heavy for a clean, modern SaaS look. Switch to a subtle border (`border border-slate-200`) and a very soft shadow (`shadow-sm`). On hover, lift the card slightly (`-translate-y-1`) and increase the shadow to `shadow-md`."
