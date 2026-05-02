# Reusable Component Variants

When reviewing React/Vue/Svelte codebases, identify styling patterns that should be extracted into component variants.

## The Problem
Developers often copy-paste button or card HTML structures and manually change the Tailwind classes for "success", "error", or "outline" states. This leads to drift where one button has `rounded-md` and another has `rounded-lg`.

## The Recommendation
Recommend abstracting the styling into the component definition using props.

**Example Feedback:**
> "I see you have three different button styles hardcoded with long Tailwind strings. Consider refactoring this `<Button>` component to accept a `variant` prop (e.g., `variant='primary' | 'outline' | 'ghost'`). This will centralize the base styles (`px-4 py-2 rounded-md font-medium`) and ensure visual consistency across the app."

This applies to:
- Buttons
- Badges
- Cards
- Alert banners
- Inputs
