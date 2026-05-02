# Project Directory Map

Use this as the quick navigation guide for the FL Studio Master Hub project.

## App Source

- `src/app/` - Next.js App Router pages, layouts, and providers.
- `src/components/` - Shared UI, navigation, and hub section components.
- `src/context/` - App-wide state and reducer context.
- `src/data/` - Static plugin, template, preset, and workflow data used by the app.
- `src/hooks/`, `src/lib/`, `src/services/`, `src/utils/`, `src/types/` - Supporting application logic.
- `src/styles/` - Global CSS design system.

## Public Assets

- `public/` - Runtime assets served by Next.js.
- `public/images/branding/` - Logo and icon assets.
- `public/images/plugin-pages/` - Plugin page visual assets.
- `public/templates/` - Template metadata and generated template manifests.

## Documentation

- `docs/` - Project documentation and reference material.
- `docs/reports/` - Design, QA, testing, and implementation reports.
- `docs/reference/` - Reference inputs and one-off source documents.
- `docs/generated/` - Generated docs and large consolidated artifacts.
- `docs/assets/screenshots/` - Captured UI screenshots.
- `docs/assets/wireframes/` - Wireframes and visual planning images.
- `docs/page-upgrade-docs/` - Plugin-page upgrade research and source bundles.

## Automation

- `scripts/` - Data generation, aggregation, repair, and maintenance scripts.
- `tests/` - Local test and QA scripts.

## Build Output And Dependencies

- `.next/` - Next.js local build cache. Generated.
- `out/` - Static export output. Generated.
- `node_modules/` - Installed dependencies. Generated.

## Local Tooling

- `.agent/`, `.agents/`, `.claude/`, `.codex/`, `.gemini/`, `.qwen/`, `.zencoder/` - Local AI/tooling configuration and skills.
- `.github/` - GitHub workflow configuration.
- `.vscode/` - Local editor configuration.

## Large Research Folder

- `2026 — FL Studio Plugin ~ DEEPER DIVES - Copy/` - Large source research archive for plugin deep dives. Kept at root for now because it is ignored and may be used as raw reference material.
