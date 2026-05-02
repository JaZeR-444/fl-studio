# Card Patterns

## Standard Card Structure
1. **Container:** Defined border radius (`rounded-xl` or `rounded-2xl`), subtle border (`border border-gray-200`) OR subtle shadow (`shadow-sm`).
2. **Padding:** Consistent `p-6` or `p-8`. If an image is flush, use `overflow-hidden` on the container and padding only on the text wrapper.
3. **Typography:** Title is bold and clear (`text-lg font-semibold`), body text is readable and subdued (`text-gray-600 text-sm`).
4. **Interactivity:** If clickable, add a hover state: `hover:shadow-md transition-shadow` or `hover:border-gray-300`.

## Avoid
- Over-shadowing: Heavy, black drop shadows.
- Cramped Text: Zero or minimal padding between text and card edges.
- Duplicate Styles: Using 20 utility classes repeatedly in the HTML instead of mapping to a shared `<Card>` component.
