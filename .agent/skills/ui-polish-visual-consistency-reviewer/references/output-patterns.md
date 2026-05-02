# Output Patterns for UI Polish & Visual Consistency Reviews

## Quick Review Output

Use when the user wants a brief review.

```markdown
# Quick UI Polish Review

## Overall Read

[Brief summary of the current UI quality and main issue.]

## Top 5 Fixes

1. [Highest-impact fix]
2. [Second fix]
3. [Third fix]
4. [Fourth fix]
5. [Fifth fix]

## Most Important Design-System Rule to Add

[One reusable rule that would improve consistency across the page or component.]

## Guardrails

These recommendations preserve the existing content, page purpose, and core strategy.
```

## Full Review Output

Use when the user asks for a thorough audit.

```markdown
# UI Review Summary

[Purpose, current polish level, and main consistency issues.]

# What Is Working

- [Strength 1]
- [Strength 2]
- [Strength 3]

# Highest-Priority Improvements

## P0 / P1 Issues

- [Issue]
  - Why it matters:
  - Recommended fix:

## P2 / P3 Polish Opportunities

- [Issue]
  - Why it matters:
  - Recommended fix:

# Recommendations by UI Element

## Layout & Spacing

[Specific recommendations.]

## Typography & Hierarchy

[Specific recommendations.]

## Cards & Content Blocks

[Specific recommendations.]

## Buttons, CTAs & Badges

[Specific recommendations.]

## Color, Contrast & Backgrounds

[Specific recommendations.]

## Navigation, Forms, or Dashboard Elements

[Include only when relevant.]

# Design-System Recommendations

- Card pattern:
- Button pattern:
- Badge pattern:
- Section spacing:
- Typography scale:
- Surface/background rules:
- Color token usage:

# Implementation Guidance

[Plain-language or code-aware guidance.]

# Guardrails Check

- No invented content
- No fake metrics
- No unrelated features
- Existing page purpose preserved
- Existing positioning preserved unless the user requested otherwise
```

## Code-Aware Output

Use when code is provided.

```markdown
# Code-Aware UI Polish Review

## Main Styling Diagnosis

[Summarize the biggest visual and structural styling issues.]

## Recommended Changes

### 1. [Change Name]

Current issue:
[Explain issue.]

Recommended fix:
[Explain fix.]

Implementation notes:
[Reference classes, components, tokens, layout changes, or CSS adjustments.]

### 2. [Change Name]

Current issue:
[Explain issue.]

Recommended fix:
[Explain fix.]

Implementation notes:
[Reference classes, components, tokens, layout changes, or CSS adjustments.]

# Reusable Patterns to Extract

- [Pattern 1]
- [Pattern 2]
- [Pattern 3]

# Code Guardrails

- Preserve existing content
- Preserve component purpose
- Avoid unnecessary logic changes
- Avoid new dependencies unless requested
- Keep changes scoped to UI polish and consistency
```

## Screenshot Review Output

Use when screenshots are provided.

```markdown
# Screenshot-Based UI Review

## Visible UI Summary

[Summarize what is visible and the likely page purpose.]

## Strongest Visual Elements

- [Strength 1]
- [Strength 2]
- [Strength 3]

## Main Issues Visible in the Screenshot

- [Issue 1]
- [Issue 2]
- [Issue 3]

## Recommended Improvements

### Layout & Spacing

[Recommendations based only on visible layout.]

### Typography & Hierarchy

[Recommendations based only on visible text hierarchy.]

### Cards & Sections

[Recommendations based only on visible cards/sections.]

### Buttons, CTAs & Badges

[Recommendations based only on visible action elements.]

### Color & Contrast

[Recommendations based only on visible color and contrast.]

## Limitations

This review is based only on the provided screenshot. Code, hover states, mobile responsiveness, and hidden sections may need separate review.
```