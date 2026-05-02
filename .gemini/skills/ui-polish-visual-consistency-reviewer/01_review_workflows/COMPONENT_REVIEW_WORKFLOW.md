# Component Review Workflow

When isolating the review to a specific component (e.g., a Card, Navbar, or Modal):

1. **Anatomy Check:** Identify the sub-elements (e.g., Card = Image, Eyebrow, Title, Body, Footer CTA).
2. **Internal Spacing:** Evaluate the padding inside the component vs. the gap between its internal items. (Padding should generally be >= the largest internal gap).
3. **State Variations:** Does this component handle edge cases? (e.g., Text too long, image missing, active vs. disabled state).
4. **Reusability:** Is it styled globally or scoped locally? Could it accept props (`size="sm" | "md" | "lg"`) to prevent the creation of highly similar duplicate components?
5. **Isolation Constraints:** Do not comment on the broader page layout unless the component's styling forces it to break page layouts (e.g., a card with a hardcoded `w-screen`).
