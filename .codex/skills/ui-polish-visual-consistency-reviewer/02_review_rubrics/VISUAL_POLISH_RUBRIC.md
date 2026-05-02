# Visual Polish Rubric

Use this rubric to evaluate the overall visual polish of an interface. 

## 1. Border Radius (Rounding)
- **Consistency:** Are border radii mathematically related? (e.g., small buttons `rounded-md`, large cards `rounded-xl`).
- **Nesting:** Do nested elements have smaller border radii than their containers to prevent awkward corner gaps? (Inner radius = Outer radius - padding).
- **Extremes:** Are there random mixings of pill-shaped (`rounded-full`) and completely sharp (`rounded-none`) elements without a clear design system rule?

## 2. Shadows & Elevation
- **Purpose:** Do shadows indicate interactivity or layering? 
- **Subtlety:** Are shadows too dark or harsh? (Recommend lowering opacity, e.g., `shadow-sm` or `shadow-black/5` instead of default `shadow`).
- **Consistency:** Do all floating elements (modals, dropdowns) share a consistent elevation shadow?

## 3. Borders & Dividers
- **Subtlety:** Are borders too thick or dark? (Recommend using subtle grays/opacities like `border-gray-200` or `border-white/10` in dark mode).
- **Necessity:** Are borders used where whitespace could achieve the same separation?

## 4. Alignment
- **Optical vs. Mathematical:** Do icons and text align optically? 
- **Edges:** Does the content align to a strong, invisible left and right edge across different vertical sections?
