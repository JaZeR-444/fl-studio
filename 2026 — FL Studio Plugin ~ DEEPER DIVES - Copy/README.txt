FL STUDIO HUB - DESIGN BIBLE & INTERFACE SPECIFICATION
======================================================
Version: 2.0 | Theme: Deep Space Cyberpunk | Framework: Tailwind CSS + Custom CSS

1. CORE DESIGN PRINCIPLES
-------------------------
The "FL Studio Hub" interface is designed to emulate a high-fidelity, futuristic production environment. It prioritizes focus, depth, and tactile feedback.

*   **Immersion First:** The interface uses deep, dark backgrounds with subtle motion (aurora blobs, particles) to create a "living" workspace that doesn't distract from the controls.
*   **Glassmorphism as Hierarchy:** Depth is conveyed not by shadows alone, but by "glass" layers. The closer an element is to the user, the more opaque and blurred the background becomes.
*   **Tactile Cybernetics:** Every interactive element must provide feedback. Buttons glow, cards lift, and borders pulse. The UI should feel like physical hardware with a holographic overlay.
*   **Data Density:** The design supports high-density information display (charts, parameters, knobs) without clutter, utilizing collapsible sections and tabbed interfaces.

2. COLOR SYSTEM (THEME: 'GRAVITY')
----------------------------------
The palette relies on a deep void background punctuated by neon luminescence.

A. **Base Layers (The Void)**
   *   `--bg-primary` (#0a0612): The absolute background. Used for the HTML body.
   *   `--bg-secondary` (#0f0a1a): Secondary depth. Used for section backgrounds.
   *   `--bg-tertiary` (#1a0a2e): Tertiary depth. Used for sidebars and panels.

B. **Primary Accent: 'Ethereal Purple'**
   *   Used for: Brand identity, primary actions, active states, focus rings.
   *   `--accent-primary` (#7c3aed): Base interaction color.
   *   `--accent-secondary` (#8b5cf6): Hover states, borders.
   *   `--accent-tertiary` (#a78bfa): Text highlights, glows.
   *   `--glow-purple` (rgba(124, 58, 237, 0.4)): The "light" emitted by active elements.

C. **Functional Accents (Data Visualization)**
   *   **Cyan** (#06b6d4): Information, Analysis, "Cold" data (e.g., Oscilloscopes).
   *   **Pink** (#ec4899): Warnings, Clipping, "Hot" data (e.g., Limiters).
   *   **Green** (#10b981): Success, Safe Zones, "Good" signal.
   *   **Orange** (#f97316): Caution, Mid-range values.

3. TYPOGRAPHY & TYPESETTING
---------------------------
Font Family: **Inter** (Variable Weight)

*   **Headings:** Bold/Black weights (700-900). Often stylized with `text-transparent bg-clip-text bg-gradient-to-r` using Brand Gradients.
*   **Body:** Regular/Medium (400-500). Color: `--text-secondary` (#c4b5fd) for readability against dark backgrounds. High line-height (`leading-relaxed`) prevents eye strain.
*   **Labels/Meta:** Semi-Bold (600). Color: `--text-muted` (#8b7faa). Uppercase with `tracking-wider` (letter-spacing) for technical clarity.
*   **Monospace:** Used for data values and code snippets (implied/system mono).

4. COMPONENT ARCHITECTURE & STYLING
-----------------------------------

A. **Glass Cards (`.glass-card`)**
   The fundamental building block.
   *   **Background:** `rgba(255, 255, 255, 0.03)` (Ultra-low opacity white).
   *   **Blur:** `backdrop-filter: blur(16px)` (Frosted glass effect).
   *   **Border:** 1px solid `rgba(139, 92, 246, 0.15)` (Subtle purple rim).
   *   **Radius:** `rounded-2xl` (16px) or `rounded-xl` (12px).
   *   **Interaction:**
       *   Hover: `translateY(-2px)`, border brightens to 0.3 opacity, shadow deepens.

B. **Navigation & Sidebar**
   *   **Glass Sidebar:** darker tint (`rgba(10, 6, 18, 0.85)`) with higher blur (`24px`) to ensure legibility over the animated background.
   *   **Nav Items:**
       *   Default: Transparent, text muted.
       *   Hover: White text, 10% white bg.
       *   Active: 20% Purple bg, left border highlight, text white.

C. **Inputs & Forms (`.glass-input`)**
   *   Background: Transparent or 3% white.
   *   Border: 1px solid muted purple.
   *   Focus: Border becomes `--accent-secondary`, box-shadow adds a 3px glow ring.

5. MICRO-INTERACTIONS & MOTION
------------------------------
Motion conveys state and physics.

*   `animation: fadeIn 0.3s`: Used for tab content switching.
*   `animation: blob 7s infinite`: Used for background ambient light blobs (scale & translate).
*   `transition: all 0.2s ease`: Standard timing for hover effects.
*   **Typing/Loading:** `animation: typing 1.4s infinite` (Scaling dots).
*   **Glow Pulse:** `animation: pulse-glow 2s infinite` (Shadow intensity oscillation).

6. UTILITY CLASS PATTERNS (TAILWIND EXTENSIONS)
-----------------------------------------------
*   `.text-gradient`: Linear gradient text clip (Purple -> Cyan).
*   `.bg-noise`: SVG turbulence filter overlay for texture.
*   `.hidden-content`: `display: none !important` utility for JS tab switching.

7. ACCESSIBILITY NOTES
----------------------
*   **Contrast:** All primary text meets WCAG AA standards against the dark background.
*   **Focus Rings:** Custom focus styles (`outline: 2px solid var(--accent-secondary)`) ensure keyboard navigability.
*   **Reduced Motion:** Critical animations should respect `prefers-reduced-motion` (implementation pending).

8. FILE STRUCTURE REFERENCE
---------------------------
*   **HTML:** `EXAMPLE-PLUGIN-PAGE-LAYOUT.html` (Structure & Layout).
*   **CSS:** `globals.css` (Variables, Animations, Base Styles).
*   **Assets:** Icons/Images in root directory.
