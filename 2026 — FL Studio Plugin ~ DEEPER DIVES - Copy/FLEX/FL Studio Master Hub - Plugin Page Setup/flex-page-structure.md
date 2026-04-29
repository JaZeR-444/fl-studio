# FLEX Plugin Page - Complete Structure & Layout

**Purpose:** Clear, implementation-ready structure for integrating FLEX page into FL Studio Master Hub

**Version:** 1.0
**Date:** 2026-01-30

---

## 📐 Page Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│  HEADER (Site-wide navigation - inherit from main site)     │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  HERO SECTION                                                │
│  - Title + Subtitle                                          │
│  - 2 Primary CTAs                                            │
│  - Musical note particles (background)                       │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  TABLE OF CONTENTS (Sticky on scroll - optional)             │
│  [Quick Wins] [Troubleshooting] [Workflows] [Genres] [FAQ]  │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  SECTION 1: 60-SECOND SETUP                                  │
│  ├─ 5-step checklist cards                                   │
│  └─ Progress indicators                                      │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  SECTION 2: FIVE QUICK WINS                                  │
│  ├─ 5 action cards (grid layout)                             │
│  └─ Copy-to-clipboard buttons                                │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  SECTION 3: TROUBLESHOOTING GRID                             │
│  ├─ Symptom → Fix → Control cards                            │
│  └─ Filterable by category                                   │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  SECTION 4: INTERFACE MAP                                    │
│  ├─ Visual diagram of FLEX interface                         │
│  └─ Clickable areas (optional)                               │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  SECTION 5: MACRO-FIRST SOUND DESIGN                         │
│  ├─ 6-step workflow                                          │
│  ├─ Macro archetypes viewer                                  │
│  └─ Collapsible deep-dive                                    │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  SECTION 6: ENVELOPE SHAPES                                  │
│  ├─ Preset selector                                          │
│  ├─ Visual envelope curve                                    │
│  └─ Parameter values                                         │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  SECTION 7: FILTER RECIPES                                   │
│  ├─ Recipe cards                                             │
│  └─ Frequency response graphs                                │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  SECTION 8: SPACE & DEPTH (Delay/Reverb)                     │
│  ├─ Spatial preset cards                                     │
│  └─ Parameter settings                                       │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  SECTION 9: LIMITER MODES                                    │
│  ├─ Mode comparison table                                    │
│  └─ Use case examples                                        │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  SECTION 10: WORKFLOWS BY GOAL                               │
│  ├─ 5 workflow cards                                         │
│  └─ Links to detailed guides                                 │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  SECTION 11: WORKFLOWS BY INSTRUMENT                         │
│  ├─ 6 instrument cards                                       │
│  └─ Quick tips + links                                       │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  SECTION 12: GENRE TEMPLATES                                 │
│  ├─ Genre selector                                           │
│  ├─ Parameter display                                        │
│  └─ Copy full template button                                │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  SECTION 13: FAQ                                             │
│  ├─ Accordion items                                          │
│  └─ Links to deep-dive docs                                  │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  SECTION 14: DEEP LINKS & RESOURCES                          │
│  ├─ Reference file list                                      │
│  └─ Master Index link                                        │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│  FOOTER (Site-wide - inherit from main site)                 │
└─────────────────────────────────────────────────────────────┘

FIXED POSITION ELEMENTS (Overlay):
┌─ Quick Actions Panel (bottom-right desktop / bottom mobile)
├─ Search Overlay (triggered by "/" key)
└─ Back to Top button (appears on scroll)
```

---

## 🏗️ HTML Structure (Semantic)

```html
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FLEX Quick Guide | FL Studio Master Hub</title>
  <meta name="description" content="Fast FLEX reference for working producers. Quick wins, troubleshooting, and workflows.">

  <!-- Existing site CSS -->
  <link rel="stylesheet" href="/css/main.css">

  <!-- FLEX page specific CSS -->
  <link rel="stylesheet" href="/css/flex-page.css">
</head>

<body class="bg-primary text-primary">

  <!-- ============================================ -->
  <!-- SITE HEADER (Inherit from main site) -->
  <!-- ============================================ -->
  <header class="site-header">
    <!-- Your existing navigation -->
  </header>

  <!-- ============================================ -->
  <!-- MAIN CONTENT -->
  <!-- ============================================ -->
  <main class="flex-page" id="flexPage">

    <!-- ============================================ -->
    <!-- HERO SECTION -->
    <!-- ============================================ -->
    <section id="hero" class="hero-section">
      <div class="container">
        <!-- Optional: Musical particles canvas -->
        <canvas id="musicalParticles" class="particles-bg"></canvas>

        <div class="hero-content">
          <h1 class="hero-title">
            FLEX Quick Guide for Working Producers
          </h1>
          <p class="hero-subtitle">
            Find the right sound fast, shape it fast, and keep your session moving.
          </p>

          <div class="hero-actions">
            <button class="btn btn-primary" data-scroll-to="quick-wins">
              <span class="btn-icon">⚡</span>
              Open the Quick Wins
            </button>
            <button class="btn btn-secondary" data-scroll-to="troubleshooting">
              <span class="btn-icon">🔧</span>
              Jump to Troubleshooting
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- TABLE OF CONTENTS (Sticky) -->
    <!-- ============================================ -->
    <nav class="toc-nav" id="tocNav">
      <div class="container">
        <ul class="toc-list">
          <li><a href="#quick-wins" class="toc-link">Quick Wins</a></li>
          <li><a href="#troubleshooting" class="toc-link">Troubleshooting</a></li>
          <li><a href="#workflows" class="toc-link">Workflows</a></li>
          <li><a href="#genres" class="toc-link">Genres</a></li>
          <li><a href="#faq" class="toc-link">FAQ</a></li>
        </ul>
      </div>
    </nav>

    <!-- ============================================ -->
    <!-- SECTION 1: 60-SECOND SETUP -->
    <!-- ============================================ -->
    <section id="setup" class="section section-setup">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">⏱️ 60 sec</span>
          <h2 class="section-title">60-Second Setup</h2>
          <p class="section-subtitle">In-Session Checklist</p>
        </div>

        <div class="checklist-grid">
          <!-- Checklist Item 1 -->
          <div class="checklist-item">
            <div class="checklist-number">1</div>
            <div class="checklist-content">
              <h3 class="checklist-title">Load a preset</h3>
              <p class="checklist-desc">
                From any installed pack
              </p>
            </div>
            <input type="checkbox" class="checklist-checkbox" id="check1">
            <label for="check1" class="checklist-label"></label>
          </div>

          <!-- Checklist Item 2 -->
          <div class="checklist-item">
            <div class="checklist-number">2</div>
            <div class="checklist-content">
              <h3 class="checklist-title">Lock Master Volume</h3>
              <p class="checklist-desc">
                Keep browsing at consistent level
              </p>
              <a href="#" class="checklist-link">How to →</a>
            </div>
            <input type="checkbox" class="checklist-checkbox" id="check2">
            <label for="check2" class="checklist-label"></label>
          </div>

          <!-- Checklist Item 3 -->
          <div class="checklist-item">
            <div class="checklist-number">3</div>
            <div class="checklist-content">
              <h3 class="checklist-title">Reset macros</h3>
              <p class="checklist-desc">
                Alt + Click each slider to default
              </p>
            </div>
            <input type="checkbox" class="checklist-checkbox" id="check3">
            <label for="check3" class="checklist-label"></label>
          </div>

          <!-- Checklist Item 4 -->
          <div class="checklist-item">
            <div class="checklist-number">4</div>
            <div class="checklist-content">
              <h3 class="checklist-title">Disable Arp</h3>
              <p class="checklist-desc">
                If you want a normal playable patch
              </p>
            </div>
            <input type="checkbox" class="checklist-checkbox" id="check4">
            <label for="check4" class="checklist-label"></label>
          </div>

          <!-- Checklist Item 5 -->
          <div class="checklist-item">
            <div class="checklist-number">5</div>
            <div class="checklist-content">
              <h3 class="checklist-title">Check Vectorscope</h3>
              <p class="checklist-desc">
                If working on bass (should be vertical line)
              </p>
              <a href="#" class="checklist-link">Learn more →</a>
            </div>
            <input type="checkbox" class="checklist-checkbox" id="check5">
            <label for="check5" class="checklist-label"></label>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- SECTION 2: FIVE QUICK WINS -->
    <!-- ============================================ -->
    <section id="quick-wins" class="section section-quick-wins">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">⚡ Essential</span>
          <h2 class="section-title">Five Quick Wins</h2>
          <p class="section-subtitle">Do These Now</p>
        </div>

        <div class="quick-wins-grid">
          <!-- Quick Win Card 1 -->
          <div class="card quick-win-card">
            <div class="card-header">
              <span class="card-icon">🔒</span>
              <h3 class="card-title">Lock Master Volume</h3>
            </div>
            <div class="card-body">
              <p class="card-desc">
                Stable volume while browsing presets
              </p>
              <div class="card-controls">
                <code class="control-tag">Master Volume</code>
                <code class="control-tag">Lock Icon</code>
              </div>
            </div>
            <div class="card-footer">
              <a href="#" class="card-link">View guide →</a>
            </div>
          </div>

          <!-- Quick Win Card 2 -->
          <div class="card quick-win-card">
            <div class="card-header">
              <span class="card-icon">♻️</span>
              <h3 class="card-title">Reset All Macros</h3>
            </div>
            <div class="card-body">
              <p class="card-desc">
                Understand preset baseline
              </p>
              <div class="card-controls">
                <code class="control-tag">Alt + Click</code>
                <code class="control-tag">Each Macro</code>
              </div>
            </div>
            <div class="card-footer">
              <button class="btn-copy" data-copy="Alt + Click macros to reset">
                <span class="copy-icon">📋</span>
                Copy Tip
              </button>
            </div>
          </div>

          <!-- Quick Win Card 3 -->
          <div class="card quick-win-card">
            <div class="card-header">
              <span class="card-icon">🎚️</span>
              <h3 class="card-title">High-Pass Non-Bass</h3>
            </div>
            <div class="card-body">
              <p class="card-desc">
                Clear mud from your mix
              </p>
              <div class="card-setting">
                <span class="setting-label">Type:</span>
                <code class="setting-value">High Pass 12dB</code>
                <button class="btn-copy-inline" data-copy="HP12dB">📋</button>
              </div>
              <div class="card-setting">
                <span class="setting-label">Cutoff:</span>
                <code class="setting-value">180Hz</code>
                <button class="btn-copy-inline" data-copy="180Hz">📋</button>
              </div>
            </div>
            <div class="card-footer">
              <a href="#" class="card-link">Filter recipes →</a>
            </div>
          </div>

          <!-- Quick Win Card 4 -->
          <div class="card quick-win-card">
            <div class="card-header">
              <span class="card-icon">🔥</span>
              <h3 class="card-title">Add Warmth</h3>
            </div>
            <div class="card-body">
              <p class="card-desc">
                Instant analog character
              </p>
              <div class="card-setting">
                <span class="setting-label">Limiter:</span>
                <code class="setting-value">Warming</code>
                <button class="btn-copy-inline" data-copy="Warming">📋</button>
              </div>
              <div class="card-setting">
                <span class="setting-label">Pre Gain:</span>
                <code class="setting-value">30%</code>
                <button class="btn-copy-inline" data-copy="30%">📋</button>
              </div>
            </div>
            <div class="card-footer">
              <a href="#" class="card-link">Limiter modes →</a>
            </div>
          </div>

          <!-- Quick Win Card 5 -->
          <div class="card quick-win-card">
            <div class="card-header">
              <span class="card-icon">📐</span>
              <h3 class="card-title">Check Bass is Mono</h3>
            </div>
            <div class="card-body">
              <p class="card-desc">
                Maximum power on all systems
              </p>
              <div class="vectorscope-example">
                <div class="vectorscope-visual">
                  <div class="vectorscope-line"></div>
                  <span class="vectorscope-label">✓ Vertical = Mono</span>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <a href="#" class="card-link">Visual analysis →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- SECTION 3: TROUBLESHOOTING GRID -->
    <!-- ============================================ -->
    <section id="troubleshooting" class="section section-troubleshooting">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">🔧 Fix It Fast</span>
          <h2 class="section-title">Troubleshooting</h2>
          <p class="section-subtitle">Symptom to Fix</p>
        </div>

        <!-- Filter tabs (optional) -->
        <div class="trouble-filters">
          <button class="filter-btn active" data-filter="all">All Issues</button>
          <button class="filter-btn" data-filter="sound">Sound Quality</button>
          <button class="filter-btn" data-filter="behavior">Behavior</button>
          <button class="filter-btn" data-filter="performance">Performance</button>
        </div>

        <div class="troubleshooting-grid">
          <!-- Trouble Card 1 -->
          <div class="trouble-card" data-category="sound">
            <div class="trouble-symptom">
              <span class="trouble-icon">⚠️</span>
              <span class="trouble-text">Preset too wet</span>
            </div>
            <div class="trouble-arrow">→</div>
            <div class="trouble-fix">
              Lower Reverb Mix and Delay Mix to 0-20%
            </div>
            <div class="trouble-controls">
              <code>Reverb Mix</code>
              <code>Delay Mix</code>
            </div>
          </div>

          <!-- Trouble Card 2 -->
          <div class="trouble-card" data-category="behavior">
            <div class="trouble-symptom">
              <span class="trouble-icon">⚠️</span>
              <span class="trouble-text">Sound doesn't stop</span>
            </div>
            <div class="trouble-arrow">→</div>
            <div class="trouble-fix">
              Reduce Release to 5-15%
            </div>
            <div class="trouble-controls">
              <code>Release (R)</code>
            </div>
          </div>

          <!-- Trouble Card 3 -->
          <div class="trouble-card" data-category="behavior">
            <div class="trouble-symptom">
              <span class="trouble-icon">⚠️</span>
              <span class="trouble-text">Unwanted rhythm</span>
            </div>
            <div class="trouble-arrow">→</div>
            <div class="trouble-fix">
              Turn Arpeggiator icon off (grey)
            </div>
            <div class="trouble-controls">
              <code>Arp Icon</code>
            </div>
          </div>

          <!-- Trouble Card 4 -->
          <div class="trouble-card" data-category="sound">
            <div class="trouble-symptom">
              <span class="trouble-icon">⚠️</span>
              <span class="trouble-text">Too quiet</span>
            </div>
            <div class="trouble-arrow">→</div>
            <div class="trouble-fix">
              Raise Master Volume or Limiter Pre 10-30%
            </div>
            <div class="trouble-controls">
              <code>Master Volume</code>
              <code>Limiter Pre</code>
            </div>
          </div>

          <!-- Trouble Card 5 -->
          <div class="trouble-card" data-category="sound">
            <div class="trouble-symptom">
              <span class="trouble-icon">⚠️</span>
              <span class="trouble-text">Too bright/harsh</span>
            </div>
            <div class="trouble-arrow">→</div>
            <div class="trouble-fix">
              Lower Cutoff OR LP filter @ 8kHz
            </div>
            <div class="trouble-controls">
              <code>Cutoff</code>
              <code>Master Filter</code>
            </div>
          </div>

          <!-- Trouble Card 6 -->
          <div class="trouble-card" data-category="performance">
            <div class="trouble-symptom">
              <span class="trouble-icon">⚠️</span>
              <span class="trouble-text">High CPU usage</span>
            </div>
            <div class="trouble-arrow">→</div>
            <div class="trouble-fix">
              Lower Unison/Voices macro, disable visualizers
            </div>
            <div class="trouble-controls">
              <code>Unison Macro</code>
              <code>Display Off</code>
            </div>
            <div class="trouble-link">
              <a href="#" class="link-sm">Full CPU guide →</a>
            </div>
          </div>
        </div>

        <div class="section-footer">
          <a href="#" class="btn btn-secondary">
            View Complete Troubleshooting Guide
          </a>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- SECTION 4: INTERFACE MAP -->
    <!-- ============================================ -->
    <section id="interface-map" class="section section-interface">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">🗺️ Navigation</span>
          <h2 class="section-title">FLEX Interface Map</h2>
          <p class="section-subtitle">What Matters Most</p>
        </div>

        <div class="interface-visual">
          <!-- ASCII or image representation of FLEX interface -->
          <div class="interface-diagram">
            <div class="interface-zone zone-top">
              <div class="zone-label">Analysis Display</div>
              <div class="zone-controls">
                <span class="zone-item">Oscilloscope</span>
                <span class="zone-item">Spectrogram</span>
                <span class="zone-item">Vectorscope</span>
                <span class="zone-item">Histogram</span>
              </div>
            </div>

            <div class="interface-zone zone-middle">
              <div class="zone-label">8 Macros (Main Sound Design)</div>
              <div class="zone-controls">
                <div class="macro-slider">M1</div>
                <div class="macro-slider">M2</div>
                <div class="macro-slider">M3</div>
                <div class="macro-slider">M4</div>
                <div class="macro-slider">M5</div>
                <div class="macro-slider">M6</div>
                <div class="macro-slider">M7</div>
                <div class="macro-slider">M8</div>
              </div>
            </div>

            <div class="interface-zone zone-bottom">
              <div class="zone-label">Master Effects Chain</div>
              <div class="zone-controls">
                <span class="zone-item">Filter</span>
                <span class="zone-item">Delay</span>
                <span class="zone-item">Reverb</span>
                <span class="zone-item">Limiter</span>
              </div>
            </div>

            <div class="interface-zone zone-right">
              <div class="zone-label">Utilities</div>
              <div class="zone-controls">
                <span class="zone-item">Pitch</span>
                <span class="zone-item">Arp</span>
                <span class="zone-item">MIDI Dump</span>
              </div>
            </div>
          </div>
        </div>

        <div class="interface-links">
          <a href="#" class="interface-link-card">
            <span class="link-icon">📊</span>
            <span class="link-text">Visual Diagrams</span>
          </a>
          <a href="#" class="interface-link-card">
            <span class="link-icon">⚡</span>
            <span class="link-text">Parameter Cheat Sheet</span>
          </a>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- SECTION 5: MACRO-FIRST SOUND DESIGN -->
    <!-- ============================================ -->
    <section id="sound-design" class="section section-sound-design">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">🎨 Design</span>
          <h2 class="section-title">Macro-First Sound Design</h2>
          <p class="section-subtitle">Fix macros before touching anything else</p>
        </div>

        <div class="workflow-steps">
          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3 class="step-title">Reset</h3>
              <p class="step-desc">Alt + Click all macros</p>
            </div>
          </div>

          <div class="step-arrow">→</div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3 class="step-title">Macros</h3>
              <p class="step-desc">Move M1-3 (tone, character, movement)</p>
            </div>
          </div>

          <div class="step-arrow">→</div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3 class="step-title">Envelope</h3>
              <p class="step-desc">Adjust ADSR to match role</p>
            </div>
          </div>

          <div class="step-arrow">→</div>

          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3 class="step-title">Filter</h3>
              <p class="step-desc">Shape with Master Filter</p>
            </div>
          </div>

          <div class="step-arrow">→</div>

          <div class="step-card">
            <div class="step-number">5</div>
            <div class="step-content">
              <h3 class="step-title">Space</h3>
              <p class="step-desc">Add Delay/Reverb last</p>
            </div>
          </div>

          <div class="step-arrow">→</div>

          <div class="step-card">
            <div class="step-number">6</div>
            <div class="step-content">
              <h3 class="step-title">Automate</h3>
              <p class="step-desc">1-2 macros for movement</p>
            </div>
          </div>
        </div>

        <!-- Macro Archetypes Collapsible -->
        <details class="collapsible-section">
          <summary class="collapsible-header">
            <span class="collapsible-icon">🎛️</span>
            <h3 class="collapsible-title">Macro Archetypes (Starting Points)</h3>
            <span class="chevron">▼</span>
          </summary>
          <div class="collapsible-content">
            <div class="archetypes-grid">
              <!-- Archetype 1 -->
              <div class="archetype-card">
                <h4 class="archetype-name">Cinematic Pad Wash</h4>
                <div class="archetype-params">
                  <div class="param-row">
                    <span class="param-label">Filter/Tone:</span>
                    <code class="param-value">40-60%</code>
                  </div>
                  <div class="param-row">
                    <span class="param-label">Movement:</span>
                    <code class="param-value">~70%</code>
                  </div>
                  <div class="param-row">
                    <span class="param-label">Unison:</span>
                    <code class="param-value">~80%</code>
                  </div>
                  <div class="param-row">
                    <span class="param-label">Envelope:</span>
                    <span class="param-desc">High attack & release</span>
                  </div>
                  <div class="param-row">
                    <span class="param-label">FX:</span>
                    <span class="param-desc">Long reverb, slow delay</span>
                  </div>
                </div>
                <button class="btn-copy-preset" data-copy-archetype="pad">
                  Copy Settings
                </button>
              </div>

              <!-- Archetype 2 -->
              <div class="archetype-card">
                <h4 class="archetype-name">Tight Pluck / EDM Lead</h4>
                <div class="archetype-params">
                  <div class="param-row">
                    <span class="param-label">Filter/Tone:</span>
                    <span class="param-desc">Open or automated</span>
                  </div>
                  <div class="param-row">
                    <span class="param-label">Pluck/Decay:</span>
                    <code class="param-value">Low</code>
                  </div>
                  <div class="param-row">
                    <span class="param-label">Envelope:</span>
                    <span class="param-desc">Instant attack, short release</span>
                  </div>
                  <div class="param-row">
                    <span class="param-label">FX:</span>
                    <span class="param-desc">Short reverb, ping pong delay</span>
                  </div>
                  <div class="param-row">
                    <span class="param-label">Limiter:</span>
                    <code class="param-value">Clean (Limiter)</code>
                  </div>
                </div>
                <button class="btn-copy-preset" data-copy-archetype="pluck">
                  Copy Settings
                </button>
              </div>
            </div>

            <div class="section-footer">
              <a href="#" class="btn btn-secondary">
                View All Macro Archetypes (JSON)
              </a>
            </div>
          </div>
        </details>

        <div class="section-footer">
          <a href="#" class="btn btn-primary">
            Complete Sound Design Guide
          </a>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- SECTION 6: ENVELOPE SHAPES -->
    <!-- ============================================ -->
    <section id="envelopes" class="section section-envelopes">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">📈 ADSR</span>
          <h2 class="section-title">Envelope Shapes</h2>
          <p class="section-subtitle">Pick the right shape fast</p>
        </div>

        <!-- Envelope Preset Selector -->
        <div class="envelope-selector">
          <button class="envelope-preset-btn active" data-preset="pluck">
            Sharp Pluck
          </button>
          <button class="envelope-preset-btn" data-preset="pad">
            Atmospheric Pad
          </button>
          <button class="envelope-preset-btn" data-preset="bass">
            Punchy Bass
          </button>
          <button class="envelope-preset-btn" data-preset="piano">
            Piano
          </button>
          <button class="envelope-preset-btn" data-preset="strings">
            Strings
          </button>
        </div>

        <!-- Envelope Visualizer -->
        <div class="envelope-visualizer">
          <div class="envelope-display">
            <svg class="envelope-svg" id="envelopeSVG" viewBox="0 0 400 200">
              <!-- SVG curve generated by JavaScript -->
              <defs>
                <linearGradient id="envelopeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style="stop-color:#4a9eff;stop-opacity:0.3" />
                  <stop offset="100%" style="stop-color:#4a9eff;stop-opacity:0" />
                </linearGradient>
              </defs>
              <!-- Grid lines -->
              <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4,4"/>
              <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4,4"/>
              <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4,4"/>

              <!-- Envelope path (generated by JS) -->
              <path id="envelopePath" d="" fill="url(#envelopeGradient)" stroke="#4a9eff" stroke-width="3"/>

              <!-- Labels -->
              <text x="50" y="195" fill="#a0a0a0" font-size="12">A</text>
              <text x="100" y="195" fill="#a0a0a0" font-size="12">H</text>
              <text x="150" y="195" fill="#a0a0a0" font-size="12">D</text>
              <text x="250" y="195" fill="#a0a0a0" font-size="12">S</text>
              <text x="350" y="195" fill="#a0a0a0" font-size="12">R</text>
            </svg>
          </div>

          <!-- Envelope Parameters -->
          <div class="envelope-params">
            <div class="param-control">
              <label class="param-label">Attack</label>
              <input type="range" class="param-slider" id="attackSlider" min="0" max="100" value="0">
              <span class="param-value" id="attackValue">0%</span>
            </div>
            <div class="param-control">
              <label class="param-label">Hold</label>
              <input type="range" class="param-slider" id="holdSlider" min="0" max="100" value="0">
              <span class="param-value" id="holdValue">0%</span>
            </div>
            <div class="param-control">
              <label class="param-label">Decay</label>
              <input type="range" class="param-slider" id="decaySlider" min="0" max="100" value="30">
              <span class="param-value" id="decayValue">30%</span>
            </div>
            <div class="param-control">
              <label class="param-label">Sustain</label>
              <input type="range" class="param-slider" id="sustainSlider" min="0" max="100" value="0">
              <span class="param-value" id="sustainValue">0%</span>
            </div>
            <div class="param-control">
              <label class="param-label">Release</label>
              <input type="range" class="param-slider" id="releaseSlider" min="0" max="100" value="15">
              <span class="param-value" id="releaseValue">15%</span>
            </div>
          </div>

          <!-- Copy Button -->
          <div class="envelope-actions">
            <button class="btn btn-primary" id="copyEnvelopeBtn">
              Copy All Values
            </button>
            <a href="#" class="btn btn-secondary">
              View All Envelope Presets (JSON)
            </a>
          </div>
        </div>

        <!-- Quick Envelope Tips -->
        <div class="envelope-tips">
          <div class="tip-card">
            <span class="tip-icon">💡</span>
            <p class="tip-text">Use short release for bass, longer for pads and strings</p>
          </div>
          <div class="tip-card">
            <span class="tip-icon">💡</span>
            <p class="tip-text">High attack + high release = slow, evolving sounds</p>
          </div>
          <div class="tip-card">
            <span class="tip-icon">💡</span>
            <p class="tip-text">Zero attack + low release = percussive, plucky sounds</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- SECTION 7: FILTER RECIPES -->
    <!-- ============================================ -->
    <section id="filters" class="section section-filters">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">🎚️ EQ</span>
          <h2 class="section-title">Filter Recipes</h2>
          <p class="section-subtitle">Mixing and Effects</p>
        </div>

        <div class="filter-grid">
          <!-- Filter Recipe 1 -->
          <div class="filter-card">
            <h3 class="filter-name">Clean-Up High Pass</h3>
            <p class="filter-desc">Remove mud from non-bass sounds</p>
            <div class="filter-params">
              <div class="filter-param">
                <span class="filter-param-label">Type:</span>
                <code class="filter-param-value">HP12dB</code>
                <button class="btn-copy-inline" data-copy="HP12dB">📋</button>
              </div>
              <div class="filter-param">
                <span class="filter-param-label">Cutoff:</span>
                <code class="filter-param-value">~180Hz</code>
                <button class="btn-copy-inline" data-copy="180Hz">📋</button>
              </div>
            </div>
            <div class="filter-use">
              <span class="use-label">Use on:</span>
              <span class="use-tags">
                <span class="use-tag">Keys</span>
                <span class="use-tag">Pads</span>
                <span class="use-tag">Leads</span>
              </span>
            </div>
          </div>

          <!-- Filter Recipe 2 -->
          <div class="filter-card">
            <h3 class="filter-name">Telephone/Radio Effect</h3>
            <p class="filter-desc">Lo-fi transitions and creative effects</p>
            <div class="filter-params">
              <div class="filter-param">
                <span class="filter-param-label">Type:</span>
                <code class="filter-param-value">Band Pass</code>
                <button class="btn-copy-inline" data-copy="Band Pass">📋</button>
              </div>
              <div class="filter-param">
                <span class="filter-param-label">Cutoff:</span>
                <code class="filter-param-value">~1.5kHz</code>
                <button class="btn-copy-inline" data-copy="1.5kHz">📋</button>
              </div>
            </div>
            <div class="filter-use">
              <span class="use-label">Use on:</span>
              <span class="use-tags">
                <span class="use-tag">Vocals</span>
                <span class="use-tag">Transitions</span>
              </span>
            </div>
          </div>

          <!-- Filter Recipe 3 -->
          <div class="filter-card">
            <h3 class="filter-name">Automated Sweep</h3>
            <p class="filter-desc">Builds and movement</p>
            <div class="filter-params">
              <div class="filter-param">
                <span class="filter-param-label">Automate:</span>
                <code class="filter-param-value">Cutoff</code>
              </div>
              <div class="filter-param">
                <span class="filter-param-label">Range:</span>
                <code class="filter-param-value">200Hz → 8kHz</code>
              </div>
            </div>
            <div class="filter-tip">
              💡 Use on builds, drops, and transitions
            </div>
          </div>
        </div>

        <div class="section-footer">
          <a href="#" class="btn btn-secondary">
            View All Filter Recipes (JSON)
          </a>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- SECTION 8: SPACE & DEPTH (Delay/Reverb) -->
    <!-- ============================================ -->
    <section id="space-depth" class="section section-space">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">🌊 FX</span>
          <h2 class="section-title">Space and Depth</h2>
          <p class="section-subtitle">Delay + Reverb</p>
        </div>

        <div class="space-grid">
          <!-- Space Preset 1 -->
          <div class="space-card">
            <h3 class="space-name">Intimate Studio Room</h3>
            <div class="space-params">
              <div class="space-param">
                <span class="space-label">Reverb Decay:</span>
                <code>Short (~20%)</code>
              </div>
              <div class="space-param">
                <span class="space-label">Reverb Mix:</span>
                <code>Low (~10%)</code>
              </div>
              <div class="space-param">
                <span class="space-label">Delay:</span>
                <code>Off or minimal</code>
              </div>
            </div>
            <div class="space-use">
              <span class="use-label">Use for:</span>
              <span class="use-desc">Vocals, pianos, intimate sounds</span>
            </div>
          </div>

          <!-- Space Preset 2 -->
          <div class="space-card">
            <h3 class="space-name">Massive Hall</h3>
            <div class="space-params">
              <div class="space-param">
                <span class="space-label">Reverb Decay:</span>
                <code>Long (~70%)</code>
              </div>
              <div class="space-param">
                <span class="space-label">Reverb Mix:</span>
                <code>Medium (~30%)</code>
              </div>
              <div class="space-param">
                <span class="space-label">Delay Type:</span>
                <code>Ping Pong</code>
              </div>
              <div class="space-param">
                <span class="space-label">Delay Mix:</span>
                <code>~25%</code>
              </div>
            </div>
            <div class="space-use">
              <span class="use-label">Use for:</span>
              <span class="use-desc">Pads, strings, cinematic sounds</span>
            </div>
          </div>
        </div>

        <div class="space-warning">
          <span class="warning-icon">⚠️</span>
          <strong>Golden Rule:</strong> Do NOT add reverb to sub-bass. Keep bass dry and mono.
        </div>

        <div class="section-footer">
          <a href="#" class="btn btn-secondary">
            View All Spatial Presets (JSON)
          </a>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- SECTION 9: LIMITER MODES -->
    <!-- ============================================ -->
    <section id="limiter" class="section section-limiter">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">🔊 Dynamics</span>
          <h2 class="section-title">Limiter Modes</h2>
          <p class="section-subtitle">Fast Tone Shaping</p>
        </div>

        <div class="limiter-comparison">
          <table class="limiter-table">
            <thead>
              <tr>
                <th>Mode</th>
                <th>Character</th>
                <th>Pre Gain</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>Limiter</code></td>
                <td>Clean peak control</td>
                <td>0-10%</td>
                <td>Transparent limiting</td>
              </tr>
              <tr>
                <td><code>Warming</code></td>
                <td>Subtle saturation</td>
                <td>~30%</td>
                <td>Pads, keys, warm sounds</td>
              </tr>
              <tr>
                <td><code>Heating</code></td>
                <td>Punchy, aggressive</td>
                <td>~50%</td>
                <td>Leads, aggressive sounds</td>
              </tr>
              <tr>
                <td><code>Distortion</code></td>
                <td>Heavy saturation</td>
                <td>~85%</td>
                <td>808s, guitars, lo-fi</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="section-footer">
          <a href="#" class="btn btn-secondary">
            View Limiter Dynamics Recipes (JSON)
          </a>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- SECTION 10: WORKFLOWS BY GOAL -->
    <!-- ============================================ -->
    <section id="workflows" class="section section-workflows">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">🎯 Goals</span>
          <h2 class="section-title">Workflows by Goal</h2>
        </div>

        <div class="workflow-grid">
          <!-- Workflow Card 1 -->
          <div class="workflow-card">
            <div class="workflow-icon">🔒</div>
            <h3 class="workflow-title">Preset Surfing with Locks</h3>
            <ul class="workflow-list">
              <li>Lock volume and key parameters while browsing</li>
              <li>Dry search: set Delay/Reverb Mix to 0% and lock</li>
              <li>Lock release for consistent tail behavior</li>
            </ul>
            <a href="#" class="workflow-link">View Guide →</a>
          </div>

          <!-- Workflow Card 2 -->
          <div class="workflow-card">
            <div class="workflow-icon">🎭</div>
            <h3 class="workflow-title">Creative Automation</h3>
            <ul class="workflow-list">
              <li>Automate a tone macro every 4-8 bars</li>
              <li>Link two macros to one automation clip for evolving movement</li>
              <li>Avoid over-automation in busy arrangements</li>
            </ul>
            <a href="#" class="workflow-link">View Guide →</a>
          </div>

          <!-- Workflow Card 3 -->
          <div class="workflow-card">
            <div class="workflow-icon">🎹</div>
            <h3 class="workflow-title">Extract MIDI from Loops</h3>
            <ul class="workflow-list">
              <li>Use the piano roll icon when it's orange</li>
              <li>Dump MIDI to active pattern and edit</li>
              <li>Learn from loop programming techniques</li>
            </ul>
            <a href="#" class="workflow-link">View Guide →</a>
          </div>

          <!-- Workflow Card 4 -->
          <div class="workflow-card">
            <div class="workflow-icon">📦</div>
            <h3 class="workflow-title">Managing Packs</h3>
            <ul class="workflow-list">
              <li>Use tags for fast filtering</li>
              <li>Star favorites for personal shortlist</li>
              <li>Offline pack management via FLEX Packs folder</li>
            </ul>
            <a href="#" class="workflow-link">View Guide →</a>
          </div>

          <!-- Workflow Card 5 -->
          <div class="workflow-card">
            <div class="workflow-icon">⚡</div>
            <h3 class="workflow-title">CPU Optimization</h3>
            <ul class="workflow-list">
              <li>Shorten release, reduce unison</li>
              <li>Disable visualizers when not needed</li>
              <li>Use Smart Disable in FL Studio when idle</li>
            </ul>
            <a href="#" class="workflow-link">View Guide →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- SECTION 11: WORKFLOWS BY INSTRUMENT -->
    <!-- ============================================ -->
    <section id="instruments" class="section section-instruments">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">🎸 Instruments</span>
          <h2 class="section-title">Workflows by Instrument</h2>
        </div>

        <div class="instrument-grid">
          <!-- Instrument 1 -->
          <div class="instrument-card">
            <div class="instrument-icon">🔊</div>
            <h3 class="instrument-name">808s and Bass</h3>
            <p class="instrument-tip">Mono bass, no reverb, distortion for presence</p>
            <a href="#" class="instrument-link">View Guide →</a>
          </div>

          <!-- Instrument 2 -->
          <div class="instrument-card">
            <div class="instrument-icon">🎹</div>
            <h3 class="instrument-name">Pianos</h3>
            <p class="instrument-tip">Manage velocity, clean low end, warm limiter</p>
            <a href="#" class="instrument-link">View Guide →</a>
          </div>

          <!-- Instrument 3 -->
          <div class="instrument-card">
            <div class="instrument-icon">🎻</div>
            <h3 class="instrument-name">Strings</h3>
            <p class="instrument-tip">Use expression macros, long release for legato</p>
            <a href="#" class="instrument-link">View Guide →</a>
          </div>

          <!-- Instrument 4 -->
          <div class="instrument-card">
            <div class="instrument-icon">🌊</div>
            <h3 class="instrument-name">Pads</h3>
            <p class="instrument-tip">Automate filter, high-pass to remove mud</p>
            <a href="#" class="instrument-link">View Guide →</a>
          </div>

          <!-- Instrument 5 -->
          <div class="instrument-card">
            <div class="instrument-icon">⚡</div>
            <h3 class="instrument-name">Leads</h3>
            <p class="instrument-tip">Glide control, reduce harshness around 4kHz</p>
            <a href="#" class="instrument-link">View Guide →</a>
          </div>

          <!-- Instrument 6 -->
          <div class="instrument-card">
            <div class="instrument-icon">🎸</div>
            <h3 class="instrument-name">Guitars</h3>
            <p class="instrument-tip">Limiter for amp, strum tool, palm mute macro</p>
            <a href="#" class="instrument-link">View Guide →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- SECTION 12: GENRE TEMPLATES -->
    <!-- ============================================ -->
    <section id="genres" class="section section-genres">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">🎵 Genres</span>
          <h2 class="section-title">Genre Templates</h2>
          <p class="section-subtitle">Fast Starting Points</p>
        </div>

        <!-- Genre Selector -->
        <div class="genre-selector">
          <button class="genre-btn active" data-genre="lofi">Lo-Fi Hip Hop</button>
          <button class="genre-btn" data-genre="synthwave">Synthwave</button>
          <button class="genre-btn" data-genre="trap">Trap</button>
          <button class="genre-btn" data-genre="house">Deep House</button>
          <button class="genre-btn" data-genre="techno">Techno</button>
          <button class="genre-btn" data-genre="dubstep">Dubstep</button>
        </div>

        <!-- Genre Template Display -->
        <div class="genre-template" id="genreTemplate">
          <div class="genre-header">
            <h3 class="genre-name">Lo-Fi Hip Hop</h3>
            <span class="genre-bpm">70-90 BPM</span>
          </div>

          <div class="genre-content">
            <div class="genre-section">
              <h4 class="genre-section-title">Macro Settings</h4>
              <div class="genre-params">
                <div class="genre-param">
                  <span class="param-name">Filter/Tone:</span>
                  <code class="param-val">Low (~30%)</code>
                </div>
                <div class="genre-param">
                  <span class="param-name">Movement:</span>
                  <code class="param-val">Subtle wobble (~40%)</code>
                </div>
              </div>
            </div>

            <div class="genre-section">
              <h4 class="genre-section-title">FX Chain</h4>
              <div class="genre-params">
                <div class="genre-param">
                  <span class="param-name">Master Filter:</span>
                  <code class="param-val">LP @ 2-3kHz</code>
                </div>
                <div class="genre-param">
                  <span class="param-name">Limiter:</span>
                  <code class="param-val">Warming (30% Pre)</code>
                </div>
              </div>
            </div>

            <div class="genre-section">
              <h4 class="genre-section-title">Common Mistakes</h4>
              <ul class="genre-tips">
                <li>❌ Too much reverb (keep it intimate)</li>
                <li>❌ Too clean (add warmth/saturation)</li>
              </ul>
            </div>
          </div>

          <div class="genre-actions">
            <button class="btn btn-primary" id="copyGenreTemplate">
              Copy Full Template
            </button>
          </div>
        </div>

        <div class="section-footer">
          <a href="#" class="btn btn-secondary">
            View All Genre Templates (JSON)
          </a>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- SECTION 13: FAQ -->
    <!-- ============================================ -->
    <section id="faq" class="section section-faq">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">❓ FAQ</span>
          <h2 class="section-title">Frequently Asked Questions</h2>
        </div>

        <div class="faq-list">
          <!-- FAQ Item 1 -->
          <details class="faq-item">
            <summary class="faq-question">
              <span class="faq-icon">Q:</span>
              Can I create presets from scratch?
              <span class="faq-chevron">▼</span>
            </summary>
            <div class="faq-answer">
              <p>
                <strong>A:</strong> No. FLEX uses encrypted flexpack files.
                Use macros, envelopes, filters, and FX to reshape existing presets.
              </p>
              <a href="#" class="faq-link">Learn more about FLEX vs other synths →</a>
            </div>
          </details>

          <!-- FAQ Item 2 -->
          <details class="faq-item">
            <summary class="faq-question">
              <span class="faq-icon">Q:</span>
              Why no oscillator editing?
              <span class="faq-chevron">▼</span>
            </summary>
            <div class="faq-answer">
              <p>
                <strong>A:</strong> FLEX prioritizes speed and curated sound design
                for production workflows. For deep synthesis, use Sytrus, Harmor, or Serum.
              </p>
              <a href="#" class="faq-link">FLEX vs Others comparison →</a>
            </div>
          </details>

          <!-- FAQ Item 3 -->
          <details class="faq-item">
            <summary class="faq-question">
              <span class="faq-icon">Q:</span>
              Is FLEX only for beginners?
              <span class="faq-chevron">▼</span>
            </summary>
            <div class="faq-answer">
              <p>
                <strong>A:</strong> Absolutely not. FLEX is a speed tool for
                sketching, production, and mix-ready layers used by professionals.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- SECTION 14: DEEP LINKS & RESOURCES -->
    <!-- ============================================ -->
    <section id="resources" class="section section-resources">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">📚 Resources</span>
          <h2 class="section-title">Deep Links & References</h2>
        </div>

        <div class="resources-grid">
          <div class="resource-card">
            <div class="resource-icon">🗺️</div>
            <h3 class="resource-title">Master Index</h3>
            <p class="resource-desc">Complete navigation with 350+ links</p>
            <a href="#" class="resource-link">Open →</a>
          </div>

          <div class="resource-card">
            <div class="resource-icon">🚀</div>
            <h3 class="resource-title">Start Here</h3>
            <p class="resource-desc">6 user pathways for beginners to experts</p>
            <a href="#" class="resource-link">Open →</a>
          </div>

          <div class="resource-card">
            <div class="resource-icon">📄</div>
            <h3 class="resource-title">One-Page Reference</h3>
            <p class="resource-desc">Printable cheat sheet</p>
            <a href="#" class="resource-link">Open →</a>
          </div>

          <div class="resource-card">
            <div class="resource-icon">📊</div>
            <h3 class="resource-title">Visual Diagrams</h3>
            <p class="resource-desc">ASCII envelope and filter curves</p>
            <a href="#" class="resource-link">Open →</a>
          </div>

          <div class="resource-card">
            <div class="resource-icon">🎛️</div>
            <h3 class="resource-title">Parameter Cheat Sheet</h3>
            <p class="resource-desc">All controls and shortcuts</p>
            <a href="#" class="resource-link">Open →</a>
          </div>

          <div class="resource-card">
            <div class="resource-icon">📦</div>
            <h3 class="resource-title">JSON Data Files</h3>
            <p class="resource-desc">54 machine-readable presets</p>
            <a href="#" class="resource-link">Browse →</a>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- ============================================ -->
  <!-- FIXED POSITION ELEMENTS (Overlays) -->
  <!-- ============================================ -->

  <!-- Quick Actions Panel -->
  <div class="quick-actions-panel" id="quickActionsPanel">
    <button class="quick-action" data-scroll-to="quick-wins">
      <span class="action-icon">⚡</span>
      <span class="action-text">Quick Wins</span>
    </button>
    <button class="quick-action" data-scroll-to="troubleshooting">
      <span class="action-icon">🔧</span>
      <span class="action-text">Troubleshoot</span>
    </button>
    <button class="quick-action" data-scroll-to="workflows">
      <span class="action-icon">🎯</span>
      <span class="action-text">Workflows</span>
    </button>
    <button class="quick-action" data-scroll-to="genres">
      <span class="action-icon">🎵</span>
      <span class="action-text">Genres</span>
    </button>
    <button class="quick-action" id="searchToggle">
      <span class="action-icon">🔍</span>
      <span class="action-text">Search</span>
    </button>
  </div>

  <!-- Search Overlay -->
  <div class="search-overlay" id="searchOverlay">
    <div class="search-container">
      <input
        type="text"
        class="search-input"
        placeholder="Search FLEX documentation..."
        id="searchInput"
        autocomplete="off"
      >
      <div class="search-results" id="searchResults">
        <!-- Results populated by JavaScript -->
      </div>
      <div class="search-hints">
        <kbd>↑↓</kbd> Navigate
        <kbd>↵</kbd> Select
        <kbd>ESC</kbd> Close
      </div>
    </div>
  </div>

  <!-- Back to Top Button -->
  <button class="back-to-top" id="backToTop" aria-label="Back to top">
    <span class="back-to-top-icon">↑</span>
  </button>

  <!-- ============================================ -->
  <!-- FOOTER (Inherit from main site) -->
  <!-- ============================================ -->
  <footer class="site-footer">
    <!-- Your existing footer -->
  </footer>

  <!-- ============================================ -->
  <!-- SCRIPTS -->
  <!-- ============================================ -->

  <!-- Existing site JS -->
  <script src="/js/main.js"></script>

  <!-- FLEX page specific JS -->
  <script src="/js/flex-page.js"></script>
  <script src="/js/envelope-visualizer.js"></script>
  <script src="/js/search.js"></script>
  <script src="/js/musical-particles.js"></script>

</body>
</html>
```

---

## 📦 Data Integration Points

### JSON File Mapping

Each section pulls data from specific JSON files:

```javascript
// Data loader configuration
const DATA_SOURCES = {
  envelopes: '/data/presets/envelope-shapes.json',
  filters: '/data/presets/master-filter-curves.json',
  spatial: '/data/presets/delay-reverb-spaces.json',
  limiter: '/data/presets/limiter-dynamics.json',
  genres: '/data/presets/genre-templates.json',
  macros: '/data/presets/macro-archetypes.json',
  params: '/data/parameters/flex-params.json',
  troubleshooting: '/data/rules/flex-troubleshooting.json'
};

// Load data on demand
async function loadData(source) {
  const url = DATA_SOURCES[source];
  const response = await fetch(url);
  return response.json();
}
```

---

## 🎨 CSS File Structure

```
css/
├── main.css                    # Existing site styles (inherit)
├── flex-page.css               # FLEX page specific styles
│   ├── Variables & tokens
│   ├── Layout & grid
│   ├── Hero section
│   ├── Card components
│   ├── Troubleshooting grid
│   ├── Envelope visualizer
│   ├── Filter cards
│   ├── Workflow cards
│   ├── Genre templates
│   ├── FAQ accordion
│   ├── Quick actions panel
│   ├── Search overlay
│   └── Responsive breakpoints
└── components/
    ├── buttons.css
    ├── cards.css
    ├── forms.css
    └── utilities.css
```

---

## 📱 Responsive Behavior Summary

### Desktop (1024px+)
- 3-column grids for cards
- Sticky TOC navigation
- Quick actions panel (bottom-right)
- Full envelope visualizer
- Side-by-side comparisons

### Tablet (768px - 1023px)
- 2-column grids
- Collapsible TOC
- Quick actions panel adapts
- Simplified visualizations

### Mobile (< 768px)
- Single column layout
- Stack all cards
- Bottom bar navigation (quick actions)
- Touch-friendly buttons (min 44px)
- Simplified envelope controls

---

## 🔄 JavaScript Modules

### Required Scripts

1. **flex-page.js** - Main page controller
   - Smooth scroll navigation
   - TOC highlighting
   - Copy-to-clipboard
   - Tab switching
   - Filter functionality

2. **envelope-visualizer.js** - Interactive envelope display
   - SVG path generation
   - Slider updates
   - Preset loading
   - Copy functionality

3. **search.js** - Search overlay
   - Fuzzy search (Fuse.js)
   - Keyboard navigation
   - Results filtering
   - Keyboard shortcuts

4. **musical-particles.js** - Background animation
   - Canvas rendering
   - Musical note particles
   - Performance optimized

---

## 🚀 Integration Checklist

### Step 1: File Setup
- [ ] Create `/flex` directory in your site
- [ ] Add HTML structure to new page
- [ ] Copy CSS files to `/css` directory
- [ ] Copy JS files to `/js` directory
- [ ] Copy JSON data files to `/data` directory

### Step 2: Link to Main Site
- [ ] Add navigation link in site header
- [ ] Update sitemap.xml
- [ ] Add meta tags for SEO
- [ ] Configure routing (if using framework)

### Step 3: Design System Integration
- [ ] Import site-wide CSS variables
- [ ] Match existing color scheme
- [ ] Use existing font stack
- [ ] Inherit button styles
- [ ] Match spacing system

### Step 4: Test
- [ ] Test all scroll anchors
- [ ] Test copy buttons
- [ ] Test search functionality
- [ ] Test envelope visualizer
- [ ] Test on mobile devices
- [ ] Test keyboard navigation
- [ ] Validate all links

### Step 5: Optimize
- [ ] Minify CSS/JS
- [ ] Optimize images
- [ ] Lazy load heavy components
- [ ] Add service worker (optional)
- [ ] Test Lighthouse score

---

## 📊 Section-by-Section Checklist

- [ ] **Hero** - Title, subtitle, 2 CTAs, particles
- [ ] **TOC** - Sticky navigation, active states
- [ ] **60-Second Setup** - 5 checklist items with checkboxes
- [ ] **Quick Wins** - 5 cards, copy buttons, links
- [ ] **Troubleshooting** - Grid of symptom/fix cards, filters
- [ ] **Interface Map** - Visual diagram with zones
- [ ] **Sound Design** - 6-step workflow, collapsible archetypes
- [ ] **Envelopes** - Preset selector, interactive visualizer
- [ ] **Filters** - Recipe cards with copy buttons
- [ ] **Space/Depth** - Delay/Reverb preset cards
- [ ] **Limiter** - Comparison table
- [ ] **Workflows (Goal)** - 5 workflow cards with links
- [ ] **Workflows (Instrument)** - 6 instrument cards
- [ ] **Genres** - Selector, template display, copy button
- [ ] **FAQ** - Accordion items with links
- [ ] **Resources** - 6 resource cards with links
- [ ] **Quick Actions** - Fixed panel, scroll triggers
- [ ] **Search** - Overlay, keyboard shortcuts, results
- [ ] **Back to Top** - Button appears on scroll

---

## 🎯 Success Metrics

**Target Performance:**
- Page load: < 2s
- Search response: < 100ms
- Smooth 60fps animations
- Lighthouse score: 90+

**User Experience:**
- Find a fix: < 30 seconds
- Complete 60-second setup: < 90 seconds
- Copy a setting: 1 click
- Navigate sections: Keyboard accessible

---

This structure is ready for implementation. Every section is clearly defined with semantic HTML, integration points are marked, and all data sources are mapped. Would you like me to create any specific section in more detail, or generate the CSS/JavaScript for particular components?
