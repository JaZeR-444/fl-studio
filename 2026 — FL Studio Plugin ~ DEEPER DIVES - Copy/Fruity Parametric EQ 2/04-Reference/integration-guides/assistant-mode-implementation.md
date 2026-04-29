# Smart Assistant Mode Implementation

Build intelligent EQ assistants that guide users through corrective and creative EQ decisions using the rules engine and band archetypes.

## Core Assistant Modes

### 1. Symptom-Based Assistant
**User describes problem → System recommends solutions**

### 2. Goal-Based Assistant
**User states desired outcome → System suggests approach**

### 3. Learning Assistant
**Explains why each decision helps → Educational guidance**

### 4. Context-Aware Assistant
**Adapts recommendations based on track type, mix stage, genre**

---

## Symptom-Based Assistant

### Basic Implementation

```javascript
class SymptomAssistant {
  constructor(rules, presets, bandDefinitions) {
    this.rules = rules;
    this.presets = presets;
    this.bandDefinitions = bandDefinitions;
  }

  diagnose(symptom) {
    const rule = this.rules.find(r => r.symptom === symptom);

    if (!rule) {
      return {
        found: false,
        message: "I don't recognize that symptom. Can you describe it differently?"
      };
    }

    const recommendations = rule.recommendations.map(rec => {
      const band = this.bandDefinitions.bands[rec.bandId - 1];
      const archetype = this.findArchetype(rec.bandId, rec.archetype);

      return {
        bandId: rec.bandId,
        bandName: band.uiCopy.label,
        bandColor: band.color,
        action: rec.archetype,
        settings: archetype,
        reasoning: rec.notes,
        warning: band.roles.warnings[0],
        priority: rule.priority
      };
    });

    return {
      found: true,
      symptom: symptom,
      priority: rule.priority,
      urgency: this.getPriorityLabel(rule.priority),
      recommendations,
      nextSteps: this.getNextSteps(rule)
    };
  }

  getPriorityLabel(priority) {
    const labels = {
      1: 'Critical - Fix First',
      2: 'Important - Address Soon',
      3: 'Polish - Final Touch'
    };
    return labels[priority] || 'Unknown';
  }

  getNextSteps(rule) {
    if (rule.priority === 1) {
      return "Apply this fix before making other adjustments. Critical issues mask other problems.";
    } else if (rule.priority === 2) {
      return "Apply after fixing any critical issues. This will significantly improve your mix.";
    } else {
      return "Apply as a final polish step after addressing more critical issues.";
    }
  }

  findArchetype(bandId, name) {
    const bandKey = this.getBandKey(bandId);
    const archetypes = this.presets.bandArchetypes[bandKey];
    return archetypes.find(a => a.name === name);
  }

  getBandKey(bandId) {
    const band = this.bandDefinitions.bands[bandId - 1];
    const zoneName = band.zone.split('/')[0].trim().toLowerCase().replace(/ /g, '_');
    return `band${bandId}_${zoneName}`;
  }
}
```

### UI Implementation

```javascript
// Symptom selector UI
function renderSymptomSelector() {
  const symptoms = [
    { id: 'rumble_or_headroom_loss', label: 'Rumbling / Eating Headroom', icon: '🔊' },
    { id: 'muddy_or_cloudy', label: 'Muddy / Cloudy', icon: '🌫️' },
    { id: 'boxy_or_cardboard', label: 'Boxy / Cardboard Sound', icon: '📦' },
    { id: 'nasal_or_honky', label: 'Nasal / Honky', icon: '👃' },
    { id: 'buried_or_unclear', label: 'Buried / Unclear', icon: '🔇' },
    { id: 'harsh_or_fatiguing', label: 'Harsh / Fatiguing', icon: '⚠️' },
    { id: 'dull_or_closed', label: 'Dull / Closed', icon: '🌑' }
  ];

  return symptoms.map(symptom => ({
    id: symptom.id,
    label: symptom.label,
    icon: symptom.icon,
    onClick: () => handleSymptom(symptom.id)
  }));
}

function handleSymptom(symptomId) {
  const assistant = new SymptomAssistant(rules, presets, bandDefinitions);
  const result = assistant.diagnose(symptomId);

  if (!result.found) {
    showMessage(result.message);
    return;
  }

  // Display recommendations
  showDiagnosis({
    symptom: symptomId,
    urgency: result.urgency,
    recommendations: result.recommendations,
    nextSteps: result.nextSteps
  });
}

function showDiagnosis(diagnosis) {
  const container = document.getElementById('assistant-panel');

  // Clear previous
  container.innerHTML = '';

  // Header
  const header = document.createElement('div');
  header.className = 'diagnosis-header';
  header.innerHTML = `
    <h3>${diagnosis.symptom.replace(/_/g, ' ')}</h3>
    <span class="urgency priority-${diagnosis.recommendations[0].priority}">
      ${diagnosis.urgency}
    </span>
  `;
  container.appendChild(header);

  // Recommendations
  diagnosis.recommendations.forEach(rec => {
    const card = document.createElement('div');
    card.className = 'recommendation-card';
    card.style.borderLeftColor = getBandColor(rec.bandColor);

    card.innerHTML = `
      <div class="band-info">
        <h4>Band ${rec.bandId}: ${rec.bandName}</h4>
        <span class="band-color" style="background: ${getBandColor(rec.bandColor)}"></span>
      </div>

      <div class="action">
        <strong>Action:</strong> ${rec.action}
      </div>

      <div class="settings">
        <span>Type: ${rec.settings.type}</span>
        <span>Frequency: ${rec.settings.freqHz} Hz</span>
        <span>Gain: ${rec.settings.gainDb > 0 ? '+' : ''}${rec.settings.gainDb} dB</span>
        <span>Bandwidth: ${rec.settings.bwPercent}%</span>
      </div>

      <div class="reasoning">
        <strong>Why:</strong> ${rec.reasoning}
      </div>

      ${rec.warning ? `<div class="warning">⚠️ ${rec.warning}</div>` : ''}

      <button class="apply-btn" onclick="applyRecommendation(${JSON.stringify(rec)})">
        Apply This Fix
      </button>
    `;

    container.appendChild(card);
  });

  // Next steps
  const nextSteps = document.createElement('div');
  nextSteps.className = 'next-steps';
  nextSteps.innerHTML = `<p><strong>Next Steps:</strong> ${diagnosis.nextSteps}</p>`;
  container.appendChild(nextSteps);
}
```

---

## Multi-Symptom Assistant

**Handle multiple issues simultaneously**

```javascript
class MultiSymptomAssistant extends SymptomAssistant {
  diagnoseMultiple(symptoms) {
    const allRecommendations = symptoms
      .map(symptom => this.diagnose(symptom))
      .filter(result => result.found);

    // Sort by priority
    allRecommendations.sort((a, b) => a.priority - b.priority);

    // Detect band conflicts
    const bandUsage = new Map();
    const plan = [];

    allRecommendations.forEach(diagnosis => {
      diagnosis.recommendations.forEach(rec => {
        if (!bandUsage.has(rec.bandId)) {
          plan.push({
            ...rec,
            symptom: diagnosis.symptom,
            priority: diagnosis.priority
          });
          bandUsage.set(rec.bandId, rec);
        } else {
          // Band conflict - note alternative
          const existing = bandUsage.get(rec.bandId);
          console.warn(`Band ${rec.bandId} conflict:`, {
            existing: existing.action,
            alternative: rec.action
          });
        }
      });
    });

    return {
      symptoms,
      plan,
      conflicts: this.findConflicts(allRecommendations),
      priorityOrder: this.getPriorityOrder(plan)
    };
  }

  findConflicts(diagnoses) {
    const bandMap = new Map();
    const conflicts = [];

    diagnoses.forEach(diagnosis => {
      diagnosis.recommendations.forEach(rec => {
        if (bandMap.has(rec.bandId)) {
          conflicts.push({
            bandId: rec.bandId,
            conflict: [
              { symptom: bandMap.get(rec.bandId).symptom, action: bandMap.get(rec.bandId).action },
              { symptom: diagnosis.symptom, action: rec.action }
            ]
          });
        } else {
          bandMap.set(rec.bandId, {
            symptom: diagnosis.symptom,
            action: rec.action
          });
        }
      });
    });

    return conflicts;
  }

  getPriorityOrder(plan) {
    // Group by priority
    const grouped = {
      critical: plan.filter(p => p.priority === 1),
      important: plan.filter(p => p.priority === 2),
      polish: plan.filter(p => p.priority === 3)
    };

    return {
      order: [
        ...grouped.critical,
        ...grouped.important,
        ...grouped.polish
      ],
      message: this.getPriorityMessage(grouped)
    };
  }

  getPriorityMessage(grouped) {
    const messages = [];

    if (grouped.critical.length > 0) {
      messages.push(`First, fix ${grouped.critical.length} critical issue(s)`);
    }
    if (grouped.important.length > 0) {
      messages.push(`Then address ${grouped.important.length} important issue(s)`);
    }
    if (grouped.polish.length > 0) {
      messages.push(`Finally, apply ${grouped.polish.length} polish step(s)`);
    }

    return messages.join('. ') + '.';
  }
}
```

---

## Learning Assistant

**Educates while recommending**

```javascript
class LearningAssistant extends SymptomAssistant {
  explain(bandId, action) {
    const band = this.bandDefinitions.bands[bandId - 1];

    return {
      band: {
        name: band.uiCopy.label,
        oneLiner: band.uiCopy.oneLiner,
        tooltip: band.uiCopy.tooltip
      },
      action: {
        what: `${action} on Band ${bandId}`,
        why: this.explainWhy(bandId, action),
        how: this.explainHow(bandId, action),
        when: this.explainWhen(bandId, action)
      },
      theory: {
        primaryRole: band.roles.primary,
        commonFixes: band.roles.fixes,
        creativeUses: band.roles.creative
      },
      guidance: {
        dos: band.uiCopy.dos,
        donts: band.uiCopy.donts,
        warnings: band.roles.warnings
      }
    };
  }

  explainWhy(bandId, action) {
    const explanations = {
      1: {
        'HP Clean': 'High-pass filtering removes sub-bass rumble that eats headroom without adding audible low end.',
        'HP Tight': 'A higher cutoff point for sources that have no useful low frequency content.'
      },
      2: {
        'De-Mud': 'The 200-300 Hz range is where mud accumulates in mixes. Cutting here clears space for bass and kick.',
        'Add Body': 'Boosting this range adds warmth and thickness, but use sparingly to avoid mud.'
      },
      // ... more explanations
    };

    return explanations[bandId]?.[action] || 'This adjustment helps solve the identified issue.';
  }

  explainHow(bandId, action) {
    return `This uses a ${action.toLowerCase()} setting with carefully chosen frequency, gain, and bandwidth to target the specific issue without affecting adjacent frequencies.`;
  }

  explainWhen(bandId, action) {
    const band = this.bandDefinitions.bands[bandId - 1];
    const fixes = band.roles.fixes;

    return `Use this when you hear: ${fixes.slice(0, 2).join(', or ')}.`;
  }

  provideContext(bandId) {
    const band = this.bandDefinitions.bands[bandId - 1];

    return {
      frequencyRange: {
        range: band.frequencyHz.typicalRange,
        description: `This band covers ${band.frequencyHz.typicalRange[0]}-${band.frequencyHz.typicalRange[1]} Hz`,
        context: this.getFrequencyContext(band.frequencyHz.typicalRange)
      },
      commonInstruments: this.getCommonInstruments(bandId),
      visualMetaphor: this.getVisualMetaphor(bandId)
    };
  }

  getFrequencyContext(range) {
    const [min, max] = range;

    if (max < 250) return 'Sub-bass and low bass region - felt more than heard';
    if (max < 500) return 'Low midrange - warmth and body live here';
    if (max < 1000) return 'Lower midrange - where boxiness and honk appear';
    if (max < 2000) return 'Midrange - core of human voice and many instruments';
    if (max < 5000) return 'Upper midrange - presence and intelligibility';
    if (max < 10000) return 'High frequencies - detail and articulation';
    return 'Very high frequencies - air and sparkle';
  }

  getCommonInstruments(bandId) {
    const instrumentMap = {
      1: ['Kick drum fundamentals', 'Bass guitar lowest notes', 'Sub-bass synths'],
      2: ['Bass guitar body', 'Kick drum punch', 'Vocal warmth', 'Piano low end'],
      3: ['Vocal body', 'Snare body', 'Guitar lower mids', 'Room resonance'],
      4: ['Vocal core', 'Guitar honk', 'Nasal frequencies'],
      5: ['Vocal presence', 'Snare crack', 'Guitar attack', 'Hi-hat definition'],
      6: ['Vocal detail', 'Cymbal shimmer', 'Guitar brightness'],
      7: ['Vocal air', 'Cymbal sparkle', 'Overall mix polish']
    };

    return instrumentMap[bandId] || [];
  }

  getVisualMetaphor(bandId) {
    const metaphors = {
      1: 'The foundation of a building - invisible but essential',
      2: 'The warmth of a fireplace - comforting but can get smoky',
      3: 'Opening the windows in a stuffy room',
      4: 'The annoying voice in a megaphone',
      5: 'Someone stepping into a spotlight',
      6: 'The sparkle in someone\'s eyes',
      7: 'Fresh mountain air'
    };

    return metaphors[bandId];
  }
}
```

### Educational UI

```javascript
function showLearningMode(bandId, action) {
  const learningAssistant = new LearningAssistant(rules, presets, bandDefinitions);
  const explanation = learningAssistant.explain(bandId, action);
  const context = learningAssistant.provideContext(bandId);

  const modal = document.createElement('div');
  modal.className = 'learning-modal';
  modal.innerHTML = `
    <div class="learning-content">
      <h2>${explanation.band.name}</h2>
      <p class="one-liner">${explanation.band.oneLiner}</p>

      <section class="action-explanation">
        <h3>Action: ${explanation.action.what}</h3>

        <div class="explanation-cards">
          <div class="card">
            <h4>Why?</h4>
            <p>${explanation.action.why}</p>
          </div>

          <div class="card">
            <h4>How?</h4>
            <p>${explanation.action.how}</p>
          </div>

          <div class="card">
            <h4>When?</h4>
            <p>${explanation.action.when}</p>
          </div>
        </div>
      </section>

      <section class="context">
        <h3>Frequency Context</h3>
        <p>${context.frequencyRange.description}</p>
        <p><em>${context.frequencyRange.context}</em></p>
        <p class="metaphor">"${context.visualMetaphor}"</p>

        <h4>Common Instruments in This Range:</h4>
        <ul>
          ${context.commonInstruments.map(inst => `<li>${inst}</li>`).join('')}
        </ul>
      </section>

      <section class="guidance">
        <div class="dos-donts">
          <div class="dos">
            <h4>Do:</h4>
            <ul>
              ${explanation.guidance.dos.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>

          <div class="donts">
            <h4>Don't:</h4>
            <ul>
              ${explanation.guidance.donts.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>

        ${explanation.guidance.warnings.map(warning =>
          `<div class="warning">⚠️ ${warning}</div>`
        ).join('')}
      </section>

      <button class="apply-btn" onclick="applyWithUnderstanding(${bandId}, '${action}')">
        I Understand - Apply This
      </button>
    </div>
  `;

  document.body.appendChild(modal);
}
```

---

## Context-Aware Assistant

**Adapts to track type, genre, mix stage**

```javascript
class ContextAwareAssistant extends SymptomAssistant {
  constructor(rules, presets, bandDefinitions, context = {}) {
    super(rules, presets, bandDefinitions);
    this.context = {
      trackType: context.trackType || 'unknown', // vocal, drum, bass, etc.
      mixStage: context.mixStage || 'track', // track, bus, master
      genre: context.genre || 'general', // edm, hiphop, rock, etc.
      density: context.density || 'medium' // sparse, medium, dense
    };
  }

  diagnose(symptom) {
    const baseDiagnosis = super.diagnose(symptom);

    if (!baseDiagnosis.found) return baseDiagnosis;

    // Adapt recommendations based on context
    baseDiagnosis.recommendations = baseDiagnosis.recommendations.map(rec => {
      return {
        ...rec,
        settings: this.adaptSettings(rec.settings, rec.bandId),
        contextNote: this.getContextNote(rec.bandId, rec.action)
      };
    });

    return baseDiagnosis;
  }

  adaptSettings(settings, bandId) {
    const adapted = { ...settings };

    // Scale gain based on mix stage
    const gainScale = {
      track: 1.0,
      bus: 0.5,
      master: 0.25
    };

    adapted.gainDb *= (gainScale[this.context.mixStage] || 1.0);

    // Adjust bandwidth based on density
    if (this.context.density === 'dense') {
      // Narrower cuts in dense mixes to avoid collateral damage
      adapted.bwPercent = Math.min(100, adapted.bwPercent * 1.3);
    } else if (this.context.density === 'sparse') {
      // Wider moves in sparse mixes
      adapted.bwPercent = Math.max(0, adapted.bwPercent * 0.7);
    }

    return adapted;
  }

  getContextNote(bandId, action) {
    const notes = [];

    // Track type specific notes
    if (this.context.trackType === 'vocal' && bandId === 5) {
      notes.push('Vocals benefit greatly from presence boosts, but be careful not to stack this across multiple vocal tracks');
    }

    // Mix stage notes
    if (this.context.mixStage === 'master') {
      notes.push('Master bus EQ should be subtle - gain has been scaled down accordingly');
    }

    // Genre notes
    if (this.context.genre === 'edm' && bandId === 7) {
      notes.push('EDM often uses aggressive high-shelf boosts for modern brightness');
    }

    return notes.join('. ');
  }

  suggestWorkflow() {
    const workflows = {
      vocal: [
        { step: 1, band: 1, action: 'HP Clean', reason: 'Remove rumble and mud' },
        { step: 2, band: 2, action: 'De-Mud', reason: 'Clear low-mids' },
        { step: 3, band: 3, action: 'De-Box', reason: 'Remove cardboard resonance' },
        { step: 4, band: 5, action: 'Lead Clarity', reason: 'Add presence' },
        { step: 5, band: 7, action: 'Air Shelf', reason: 'Polish and air' }
      ],
      drum: [
        { step: 1, band: 1, action: 'HP Tight', reason: 'Remove sub rumble (unless kick/bass)' },
        { step: 2, band: 3, action: 'De-Box', reason: 'Remove boxiness' },
        { step: 3, band: 5, action: 'Add Detail', reason: 'Bring out transients' }
      ]
    };

    return workflows[this.context.trackType] || [];
  }
}
```

---

## Voice/Chat Interface

**Natural language processing**

```javascript
class NaturalLanguageAssistant extends ContextAwareAssistant {
  parse(userInput) {
    const input = userInput.toLowerCase();

    // Symptom keywords
    const symptomMap = {
      'mud': 'muddy_or_cloudy',
      'cloudy': 'muddy_or_cloudy',
      'thick': 'muddy_or_cloudy',
      'boxy': 'boxy_or_cardboard',
      'cardboard': 'boxy_or_cardboard',
      'hollow': 'boxy_or_cardboard',
      'nasal': 'nasal_or_honky',
      'honky': 'nasal_or_honky',
      'harsh': 'harsh_or_fatiguing',
      'sharp': 'harsh_or_fatiguing',
      'dull': 'dull_or_closed',
      'dark': 'dull_or_closed',
      'buried': 'buried_or_unclear',
      'unclear': 'buried_or_unclear',
      'rumble': 'rumble_or_headroom_loss'
    };

    // Find matching symptoms
    const detectedSymptoms = Object.entries(symptomMap)
      .filter(([keyword]) => input.includes(keyword))
      .map(([, symptom]) => symptom);

    if (detectedSymptoms.length === 0) {
      return {
        understood: false,
        message: "I'm not sure what you're describing. Can you use terms like 'muddy', 'harsh', 'dull', 'boxy', etc.?"
      };
    }

    return {
      understood: true,
      symptoms: [...new Set(detectedSymptoms)], // unique
      response: this.generateResponse(detectedSymptoms)
    };
  }

  generateResponse(symptoms) {
    if (symptoms.length === 1) {
      return this.diagnose(symptoms[0]);
    } else {
      const multiAssistant = new MultiSymptomAssistant(
        this.rules,
        this.presets,
        this.bandDefinitions
      );
      return multiAssistant.diagnoseMultiple(symptoms);
    }
  }

  chat(userInput) {
    const parsed = this.parse(userInput);

    if (!parsed.understood) {
      return {
        type: 'clarification',
        message: parsed.message,
        suggestions: this.getSuggestions()
      };
    }

    return {
      type: 'recommendation',
      input: userInput,
      symptoms: parsed.symptoms,
      response: parsed.response
    };
  }

  getSuggestions() {
    return [
      "The mix sounds muddy",
      "Vocals are harsh",
      "Track sounds dull",
      "There's a boxy resonance",
      "The low end is rumbling"
    ];
  }
}

// Usage
const nlAssistant = new NaturalLanguageAssistant(rules, presets, bandDefinitions, {
  trackType: 'vocal',
  mixStage: 'track'
});

const response = nlAssistant.chat("The vocal sounds muddy and a bit harsh");
// Returns recommendations for both muddy and harsh symptoms
```

---

## Best Practices

1. **Always Explain Why** - Users learn faster when they understand reasoning
2. **Respect Priority** - Critical fixes before polish
3. **Show Warnings** - Display band-specific cautions
4. **Allow Customization** - Let users adjust recommended settings
5. **Track Context** - Adapt to track type, mix stage, genre
6. **Enable A/B Testing** - Let users compare before/after
7. **Provide Fallbacks** - Handle unknown symptoms gracefully
8. **Educate Progressively** - Beginner mode → Advanced mode

---

## Next Steps

- See `preset-system-architecture.md` for preset generation
- See `json-workflow.md` for data integration
- See `../terminology-glossary/` for user-facing language
