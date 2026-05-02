# Screenshot Review Workflow

When reviewing a UI strictly from an image/screenshot (no code provided):

1. **Acknowledge the Medium:** State that the review is based purely on visual output, not implementation.
2. **Visual Hierarchy Check:** Identify where the eye is drawn first. Does it match the assumed intent of the page?
3. **Alignment & Grid:** Look for invisible lines. Are elements snapping to a consistent grid? Are margins and paddings mathematically consistent?
4. **Color & Contrast:** Check for inaccessible text colors, competing brand accents, and heavy borders.
5. **Interactive Affordance:** Can you tell what is clickable? Do inputs look like inputs?
6. **Actionable Output:** Phrase recommendations in CSS terminology (e.g., "Increase `padding-y` on the hero section to `96px` to let it breathe") even without seeing the code, to give the developer clear guidance.
