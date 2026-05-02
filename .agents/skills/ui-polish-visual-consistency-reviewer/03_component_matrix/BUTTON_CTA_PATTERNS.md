# Button & CTA Patterns

## Core Variants
A professional UI should stick to these variants:
1. **Primary:** The main action. Solid background, high-contrast text. (e.g., `bg-blue-600 text-white hover:bg-blue-700`).
2. **Secondary/Outline:** Alternative actions. Transparent background, border. (e.g., `border border-gray-300 text-gray-700 hover:bg-gray-50`).
3. **Tertiary/Ghost:** Low-priority actions. No border or background until hovered. (e.g., `text-gray-600 hover:bg-gray-100`).
4. **Destructive:** Actions that delete/remove. (e.g., `bg-red-600 text-white hover:bg-red-700`).

## Rules
- **Consistency:** Do not mix button styles randomly. All primary actions should look identical.
- **Icon Alignment:** Icons inside buttons should use `inline-flex items-center gap-2`.
- **Sizing Scales:** Have a defined scale (e.g., `sm`, `md`, `lg`) using consistent padding (e.g., `md` = `px-4 py-2`).
