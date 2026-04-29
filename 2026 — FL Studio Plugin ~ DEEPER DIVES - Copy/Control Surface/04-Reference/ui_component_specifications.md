# Technical Reference: UI Component Specifications

A detailed breakdown of the Control Surface widget behavior. [SRC: IL-MAN]

## 1. Value Resolution
- **Internal Mapping**: All widgets operate on a normalized scale of **0.0 to 1.0**.
- **Automation**: When you automate a Control Surface knob, FL Studio records it with the same high-resolution precision as a standard plugin parameter.

## 2. Widget Styles
- **Simple**: Minimalist, flat design. Very low CPU usage.
- **Modern**: Standard FL Studio aesthetic.
- **Cyber**: Neon, high-contrast, designed for dark-mode projects.
- **Vintage**: High-detail, modeled after analog hardware (bakelite, wood, metal).

## 3. Patcher Integration
- When used inside **Patcher**, Control Surface acts as a **Parameter Node Generator**.
- Every widget you add to the surface becomes an **Output Node** on the red "Control" side of the Patcher map.
- This allows you to wire one Control Surface knob to dozens of internal plugin inputs within the Patcher environment.

## 4. Resource Usage
- **CPU Footprint**: Negligible for the controls themselves.
- **Visual Load**: Having hundreds of highly detailed "Vintage" knobs can slightly increase GUI rendering time on older systems. Use "Simple" knobs for massive dashboards.
