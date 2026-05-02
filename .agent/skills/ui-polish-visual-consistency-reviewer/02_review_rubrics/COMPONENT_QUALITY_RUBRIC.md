# Component Quality Rubric

Use this rubric to evaluate the design and implementation of specific UI components.

## 1. Cards
- **Padding:** Is internal padding consistent?
- **Hierarchy:** Does the card title stand out from the body text?
- **Actions:** Are card actions (buttons/links) consistently placed (usually bottom left or bottom right)?
- **Hover States:** Do interactive cards lift up (`-translate-y-1`), show a shadow (`shadow-md`), or change border color on hover?

## 2. Buttons & CTAs
- **Variants:** Are there clear primary (filled), secondary (outlined/dimmed), and tertiary (ghost/text) variants?
- **Sizing:** Are touch targets large enough? (Minimum `44px`/`48px` height for mobile).
- **Alignment:** Are icons vertically centered with the text inside the button?

## 3. Forms & Inputs
- **Visibility:** Do inputs have clear borders or background fills?
- **Focus States:** Is there a clear, highly visible focus ring? (e.g., `focus:ring-2 focus:ring-blue-500`).
- **Labels:** Are labels positioned consistently (usually above the input)?

## 4. Badges & Tags
- **Size:** Are badges appropriately small? (They shouldn't compete with primary buttons).
- **Styling:** Do they use subtle background opacities with bold text for readability? (e.g., `bg-blue-100 text-blue-800`).

## 5. Navigation
- **Active States:** Is the current page clearly indicated?
- **Hierarchy:** Is the primary action (e.g., "Sign Up") visually distinct from standard links?
