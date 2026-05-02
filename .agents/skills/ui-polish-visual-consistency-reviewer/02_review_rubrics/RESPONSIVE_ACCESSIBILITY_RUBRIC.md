# Responsive Design & Accessibility Rubric

Evaluate how the UI adapts to devices and supports basic accessibility as a facet of polish.

## 1. Mobile Responsiveness
- **Stacking:** Do multi-column layouts stack elegantly into a single column on small screens?
- **Padding:** Does horizontal padding reduce on mobile to maximize screen real estate? (e.g., `px-4` on mobile, `px-8` on desktop).
- **Typography:** Do massive hero headlines scale down on mobile to prevent awkward word wrapping? (e.g., `text-4xl md:text-6xl`).

## 2. Touch Targets (Mobile)
- **Size:** Are buttons and interactive elements at least `44px` by `44px`?
- **Spacing:** Is there enough space between interactive elements to prevent accidental taps?

## 3. Desktop Constraints
- **Stretching:** Do images and text lines stretch infinitely on ultrawide monitors? (Recommend `max-w` constraints).
- **Empty Space:** Does the design feel completely empty on 4K screens? (Recommend using grids or centering).

## 4. Accessibility as Polish
- **Focus States:** Are keyboard focus rings visible? Removing default focus rings without replacing them reduces both accessibility and professional polish.
- **Color Contrast:** Is crucial information readable?
- **Semantic HTML (If code is visible):** Are buttons actual `<button>` elements? Are links `<a>` elements?
