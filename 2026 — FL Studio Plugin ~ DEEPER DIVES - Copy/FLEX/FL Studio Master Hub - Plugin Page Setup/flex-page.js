/**
 * FLEX Plugin Page - JavaScript Utilities
 * Version: 1.0
 * Date: 2026-01-30
 *
 * Core functionality for the FLEX page
 */

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initQuickActions();
  initSearchOverlay();
  initBackToTop();
  initCopyButtons();
  initTOCHighlight();
  initFilterButtons();
  initChecklistProgress();
  initGenreSelector();
});

// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================

function initSmoothScroll() {
  // Handle all scroll-to buttons
  document.querySelectorAll('[data-scroll-to]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = button.dataset.scrollTo;
      const target = document.getElementById(targetId);

      if (target) {
        const offset = 80; // Account for sticky header
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Handle anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ============================================
// QUICK ACTIONS PANEL
// ============================================

function initQuickActions() {
  const panel = document.getElementById('quickActionsPanel');
  if (!panel) return;

  // Handle scroll-to actions
  panel.querySelectorAll('[data-scroll-to]').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.scrollTo;
      const target = document.getElementById(targetId);

      if (target) {
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ============================================
// SEARCH OVERLAY
// ============================================

function initSearchOverlay() {
  const overlay = document.getElementById('searchOverlay');
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  const toggleBtn = document.getElementById('searchToggle');

  if (!overlay || !input || !results) return;

  // Open search with / key
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && !isInputFocused()) {
      e.preventDefault();
      openSearch();
    } else if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeSearch();
    }
  });

  // Toggle button
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (overlay.classList.contains('active')) {
        closeSearch();
      } else {
        openSearch();
      }
    });
  }

  // Close on overlay click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeSearch();
    }
  });

  // Search input
  input.addEventListener('input', debounce((e) => {
    performSearch(e.target.value, results);
  }, 300));

  // Keyboard navigation in results
  input.addEventListener('keydown', (e) => {
    handleSearchNavigation(e, results);
  });

  function openSearch() {
    overlay.classList.add('active');
    input.focus();
  }

  function closeSearch() {
    overlay.classList.remove('active');
    input.value = '';
    results.innerHTML = '';
  }

  function isInputFocused() {
    const activeElement = document.activeElement;
    return activeElement.tagName === 'INPUT' ||
           activeElement.tagName === 'TEXTAREA' ||
           activeElement.isContentEditable;
  }
}

// Search functionality (basic - can be enhanced with Fuse.js)
function performSearch(query, resultsContainer) {
  if (!query || query.length < 2) {
    resultsContainer.innerHTML = '';
    return;
  }

  // Simple search through sections (can be enhanced)
  const sections = document.querySelectorAll('.section');
  const results = [];

  sections.forEach(section => {
    const title = section.querySelector('.section-title');
    const content = section.textContent.toLowerCase();

    if (title && content.includes(query.toLowerCase())) {
      results.push({
        title: title.textContent,
        id: section.id,
        snippet: getSnippet(section, query)
      });
    }
  });

  // Display results
  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div class="search-result-item">
        <div class="search-result-title">No results found</div>
        <div class="search-result-path">Try a different search term</div>
      </div>
    `;
    return;
  }

  resultsContainer.innerHTML = results.map((result, index) => `
    <div class="search-result-item ${index === 0 ? 'selected' : ''}"
         data-target="${result.id}">
      <div class="search-result-title">${result.title}</div>
      <div class="search-result-path">#${result.id}</div>
    </div>
  `).join('');

  // Add click handlers
  resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.dataset.target;
      const target = document.getElementById(targetId);
      if (target) {
        document.getElementById('searchOverlay').classList.remove('active');
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });
}

function getSnippet(element, query) {
  const text = element.textContent;
  const index = text.toLowerCase().indexOf(query.toLowerCase());
  const start = Math.max(0, index - 50);
  const end = Math.min(text.length, index + query.length + 50);
  return '...' + text.substring(start, end) + '...';
}

function handleSearchNavigation(e, resultsContainer) {
  const selected = resultsContainer.querySelector('.selected');
  if (!selected) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    const next = selected.nextElementSibling;
    if (next) {
      selected.classList.remove('selected');
      next.classList.add('selected');
      next.scrollIntoView({ block: 'nearest' });
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    const prev = selected.previousElementSibling;
    if (prev) {
      selected.classList.remove('selected');
      prev.classList.add('selected');
      prev.scrollIntoView({ block: 'nearest' });
    }
  } else if (e.key === 'Enter') {
    e.preventDefault();
    selected.click();
  }
}

// ============================================
// BACK TO TOP BUTTON
// ============================================

function initBackToTop() {
  const button = document.getElementById('backToTop');
  if (!button) return;

  // Show/hide on scroll
  window.addEventListener('scroll', throttle(() => {
    if (window.pageYOffset > 500) {
      button.classList.add('visible');
    } else {
      button.classList.remove('visible');
    }
  }, 200));

  // Scroll to top
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ============================================
// COPY TO CLIPBOARD
// ============================================

function initCopyButtons() {
  // Inline copy buttons
  document.querySelectorAll('.btn-copy-inline, .btn-copy').forEach(button => {
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = button.dataset.copy || button.previousElementSibling?.textContent;

      if (textToCopy) {
        try {
          await navigator.clipboard.writeText(textToCopy);
          showCopyFeedback(button);
        } catch (err) {
          console.error('Failed to copy:', err);
        }
      }
    });
  });

  // Copy preset buttons
  document.querySelectorAll('.btn-copy-preset').forEach(button => {
    button.addEventListener('click', async () => {
      const card = button.closest('.archetype-card, .genre-template');
      if (card) {
        const settings = extractSettings(card);
        try {
          await navigator.clipboard.writeText(settings);
          showCopyFeedback(button);
        } catch (err) {
          console.error('Failed to copy:', err);
        }
      }
    });
  });

  // Copy envelope values
  const copyEnvelopeBtn = document.getElementById('copyEnvelopeBtn');
  if (copyEnvelopeBtn) {
    copyEnvelopeBtn.addEventListener('click', async () => {
      const values = {
        A: document.getElementById('attackValue')?.textContent || '0%',
        H: document.getElementById('holdValue')?.textContent || '0%',
        D: document.getElementById('decayValue')?.textContent || '0%',
        S: document.getElementById('sustainValue')?.textContent || '0%',
        R: document.getElementById('releaseValue')?.textContent || '0%'
      };

      const text = `A: ${values.A}, H: ${values.H}, D: ${values.D}, S: ${values.S}, R: ${values.R}`;

      try {
        await navigator.clipboard.writeText(text);
        showCopyFeedback(copyEnvelopeBtn);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
  }
}

function extractSettings(card) {
  const params = card.querySelectorAll('.param-row, .genre-param');
  let settings = '';

  params.forEach(param => {
    const label = param.querySelector('.param-label, .param-name')?.textContent;
    const value = param.querySelector('.param-value, .param-val, code')?.textContent;
    if (label && value) {
      settings += `${label} ${value}\n`;
    }
  });

  return settings;
}

function showCopyFeedback(button) {
  const originalText = button.textContent;
  const originalHTML = button.innerHTML;

  button.textContent = '✓ Copied!';
  button.style.background = 'var(--accent-green)';

  setTimeout(() => {
    if (originalHTML.includes('<')) {
      button.innerHTML = originalHTML;
    } else {
      button.textContent = originalText;
    }
    button.style.background = '';
  }, 2000);
}

// ============================================
// TOC HIGHLIGHT ON SCROLL
// ============================================

function initTOCHighlight() {
  const tocLinks = document.querySelectorAll('.toc-link');
  if (tocLinks.length === 0) return;

  const sections = Array.from(tocLinks).map(link => {
    const href = link.getAttribute('href');
    return document.querySelector(href);
  }).filter(Boolean);

  window.addEventListener('scroll', throttle(() => {
    const scrollPosition = window.pageYOffset + 150;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        tocLinks.forEach(link => link.classList.remove('active'));
        tocLinks[index].classList.add('active');
      }
    });
  }, 100));
}

// ============================================
// FILTER BUTTONS
// ============================================

function initFilterButtons() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const troubleCards = document.querySelectorAll('.trouble-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter cards
      troubleCards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ============================================
// CHECKLIST PROGRESS
// ============================================

function initChecklistProgress() {
  const checkboxes = document.querySelectorAll('.checklist-checkbox');

  // Load saved progress from localStorage
  checkboxes.forEach((checkbox, index) => {
    const saved = localStorage.getItem(`flex-checklist-${index}`);
    if (saved === 'true') {
      checkbox.checked = true;
    }

    // Save on change
    checkbox.addEventListener('change', () => {
      localStorage.setItem(`flex-checklist-${index}`, checkbox.checked);
    });
  });
}

// ============================================
// GENRE SELECTOR
// ============================================

function initGenreSelector() {
  const genreButtons = document.querySelectorAll('.genre-btn');
  const genreTemplate = document.getElementById('genreTemplate');

  if (!genreTemplate) return;

  // Genre data (can be loaded from JSON)
  const genreData = {
    lofi: {
      name: 'Lo-Fi Hip Hop',
      bpm: '70-90 BPM',
      macros: [
        { name: 'Filter/Tone', value: 'Low (~30%)' },
        { name: 'Movement', value: 'Subtle wobble (~40%)' }
      ],
      fx: [
        { name: 'Master Filter', value: 'LP @ 2-3kHz' },
        { name: 'Limiter', value: 'Warming (30% Pre)' }
      ],
      mistakes: [
        'Too much reverb (keep it intimate)',
        'Too clean (add warmth/saturation)'
      ]
    },
    synthwave: {
      name: 'Synthwave',
      bpm: '100-120 BPM',
      macros: [
        { name: 'Unison', value: 'High (~80%)' },
        { name: 'Movement', value: 'Slow modulation (~50%)' }
      ],
      fx: [
        { name: 'Delay', value: 'Ping Pong (~30%)' },
        { name: 'Limiter', value: 'Clean (Limiter)' }
      ],
      mistakes: [
        'Too dark (keep brightness)',
        'Too dry (use spatial effects)'
      ]
    }
    // Add more genres as needed
  };

  genreButtons.forEach(button => {
    button.addEventListener('click', () => {
      const genre = button.dataset.genre;
      const data = genreData[genre];

      if (!data) return;

      // Update active state
      genreButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Update template display
      updateGenreTemplate(data);
    });
  });
}

function updateGenreTemplate(data) {
  const genreTemplate = document.getElementById('genreTemplate');

  genreTemplate.innerHTML = `
    <div class="genre-header">
      <h3 class="genre-name">${data.name}</h3>
      <span class="genre-bpm">${data.bpm}</span>
    </div>

    <div class="genre-content">
      <div class="genre-section">
        <h4 class="genre-section-title">Macro Settings</h4>
        <div class="genre-params">
          ${data.macros.map(m => `
            <div class="genre-param">
              <span class="param-name">${m.name}:</span>
              <code class="param-val">${m.value}</code>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="genre-section">
        <h4 class="genre-section-title">FX Chain</h4>
        <div class="genre-params">
          ${data.fx.map(f => `
            <div class="genre-param">
              <span class="param-name">${f.name}:</span>
              <code class="param-val">${f.value}</code>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="genre-section">
        <h4 class="genre-section-title">Common Mistakes</h4>
        <ul class="genre-tips">
          ${data.mistakes.map(m => `<li>❌ ${m}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="genre-actions">
      <button class="btn btn-primary btn-copy-preset" id="copyGenreTemplate">
        Copy Full Template
      </button>
    </div>
  `;

  // Reinit copy button
  const copyBtn = document.getElementById('copyGenreTemplate');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const settings = extractSettings(genreTemplate);
      try {
        await navigator.clipboard.writeText(settings);
        showCopyFeedback(copyBtn);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
  }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ============================================
// DATA LOADING (for JSON files)
// ============================================

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

// Cache for loaded data
const dataCache = {};

async function loadData(source) {
  if (dataCache[source]) {
    return dataCache[source];
  }

  try {
    const response = await fetch(DATA_SOURCES[source]);
    if (!response.ok) {
      throw new Error(`Failed to load ${source}`);
    }
    const data = await response.json();
    dataCache[source] = data;
    return data;
  } catch (error) {
    console.error(`Error loading ${source}:`, error);
    return null;
  }
}

// Export for use in other scripts
window.FLEXPage = {
  loadData,
  showCopyFeedback
};

// ============================================
// CONSOLE INFO
// ============================================

console.log('%cFLEX Quick Guide', 'font-size: 20px; font-weight: bold; color: #4a9eff;');
console.log('%cPress "/" to search • ESC to close', 'color: #a0a0a0;');
console.log('%cKeyboard shortcuts enabled ⌨️', 'color: #10b981;');
