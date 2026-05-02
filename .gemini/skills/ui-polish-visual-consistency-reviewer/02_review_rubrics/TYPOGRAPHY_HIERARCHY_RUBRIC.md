# Typography & Hierarchy Rubric

Use this rubric to evaluate how text is presented and structured.

## 1. Scale & Sizing
- **Mathematical Scale:** Do heading sizes follow a logical scale? (e.g., `text-sm`, `text-base`, `text-2xl`, `text-4xl`).
- **Too Many Sizes:** Are there more than 4-5 distinct text sizes on a single page? (Recommend reducing the number of unique sizes).

## 2. Weight & Contrast
- **Hierarchy:** Are primary headings bolder than secondary text?
- **Readability:** Is body text too thin (`font-light`) or too thick (`font-bold`)? Recommend `font-normal` or `font-medium`.
- **Dimming:** Are secondary elements (timestamps, metadata) visually de-emphasized using lighter colors (e.g., `text-gray-500`) rather than just smaller text?

## 3. Line Height (Leading)
- **Headings:** Do large headings have tighter line heights? (e.g., `leading-tight` or `leading-none`).
- **Body Text:** Does multi-line body text have enough breathing room? (e.g., `leading-relaxed` or `leading-7`).

## 4. Letter Spacing (Tracking)
- **Headings:** Large text often benefits from slightly tighter tracking (`tracking-tight`).
- **Eyebrows/Caps:** Uppercase eyebrow text should always have wider tracking (`tracking-wider` or `tracking-widest`).

## 5. Line Length (Measure)
- **Constraint:** Does body text stretch completely across wide screens? Recommend restricting max width for readability (e.g., `max-w-prose` or `max-w-2xl`).
