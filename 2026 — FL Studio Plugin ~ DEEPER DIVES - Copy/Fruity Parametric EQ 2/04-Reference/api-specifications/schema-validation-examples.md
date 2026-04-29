# Schema Validation Examples

Practical examples of validating band data using JSON Schema (eg1.json).

## Using AJV (JavaScript/Node.js)

### Installation
```bash
npm install ajv
```

### Basic Validation

```javascript
import Ajv from 'ajv';
import schema from './02-Data/schema/eg1.json' assert { type: 'json' };
import bandDefinitions from './02-Data/band-definitions/eg2.json' assert { type: 'json' };

const ajv = new Ajv();
const validate = ajv.compile(schema);

// Validate the entire band definitions file
const valid = validate(bandDefinitions);

if (!valid) {
  console.error('Validation errors:', validate.errors);
} else {
  console.log('✓ Band definitions are valid');
}
```

### Validating Individual Bands

```javascript
// Validate a single band
function validateBand(band) {
  // Extract just the band schema from the full schema
  const bandSchema = schema.properties.bands.items;
  const validateBand = ajv.compile(bandSchema);

  const valid = validateBand(band);

  if (!valid) {
    return {
      valid: false,
      errors: validateBand.errors
    };
  }

  return { valid: true };
}

// Test with a band
const band1 = bandDefinitions.bands[0];
const result = validateBand(band1);
console.log(result);
```

### Validating User-Created Bands

```javascript
function validateUserBand(userBand) {
  const bandSchema = schema.properties.bands.items;
  const validateBand = ajv.compile(bandSchema);

  const valid = validateBand(userBand);

  if (!valid) {
    return {
      valid: false,
      errors: validateBand.errors.map(err => ({
        field: err.instancePath,
        message: err.message,
        params: err.params
      }))
    };
  }

  return { valid: true };
}

// Example: User creates a band
const userBand = {
  bandId: 5,
  color: "green",
  zone: "Presence / Clarity",
  frequencyHz: {
    typicalRange: [1800, 3200],
    anchorTargets: [2000, 2500, 3000]
  },
  controls: {
    typeOptions: ["bell", "high_shelf"],
    defaultType: "bell",
    gainDb: {
      typical: [-3, 3],
      safeMaxTrack: 6,
      safeMaxBus: 3,
      safeMaxMaster: 1.5
    },
    bwPercent: {
      meaning: "0% = widest, 100% = narrowest",
      wide: [20, 40],
      medium: [40, 60],
      narrow: [60, 80],
      default: 50
    }
  },
  roles: {
    primary: ["Add presence"],
    fixes: ["Buried vocals"],
    creative: ["Aggressive clarity"],
    warnings: ["Don't overuse"]
  },
  uiCopy: {
    label: "Presence",
    oneLiner: "Brings sounds forward",
    tooltip: "Boost for clarity",
    dos: ["Use on vocals"],
    donts: ["Don't boost too much"]
  }
};

const result = validateUserBand(userBand);
console.log(result);
```

---

## Error Handling

### Common Validation Errors

```javascript
// 1. Missing required field
const invalidBand = {
  bandId: 1,
  color: "purple"
  // Missing required fields...
};

const result = validateBand(invalidBand);
/*
{
  valid: false,
  errors: [
    { field: '/zone', message: 'must have required property zone' },
    { field: '/frequencyHz', message: 'must have required property frequencyHz' },
    ...
  ]
}
*/

// 2. Wrong type
const invalidBand2 = {
  ...validBand,
  bandId: "1" // Should be number, not string
};

// 3. Invalid enum value
const invalidBand3 = {
  ...validBand,
  color: "red" // Not in allowed values
};

// 4. Array constraint violation
const invalidBand4 = {
  ...validBand,
  frequencyHz: {
    typicalRange: [100], // Should be exactly 2 items
    anchorTargets: []
  }
};
```

### User-Friendly Error Messages

```javascript
function formatValidationError(error) {
  const messages = {
    'required': `Missing required field: ${error.params.missingProperty}`,
    'type': `Field ${error.instancePath} should be ${error.params.type}`,
    'enum': `Field ${error.instancePath} must be one of: ${error.params.allowedValues.join(', ')}`,
    'minimum': `Field ${error.instancePath} must be at least ${error.params.limit}`,
    'maximum': `Field ${error.instancePath} must be at most ${error.params.limit}`,
    'minItems': `Array ${error.instancePath} must have at least ${error.params.limit} items`,
    'maxItems': `Array ${error.instancePath} must have at most ${error.params.limit} items`
  };

  return messages[error.keyword] || error.message;
}

function validateWithFriendlyErrors(band) {
  const result = validateBand(band);

  if (!result.valid) {
    return {
      valid: false,
      errors: result.errors.map(formatValidationError)
    };
  }

  return { valid: true };
}
```

---

## Semantic Validation

Beyond structure, validate against band definitions:

```javascript
function validateBandSemantics(userBand, bandDefinitions) {
  const errors = [];
  const warnings = [];

  // 1. Get reference band
  const refBand = bandDefinitions.bands[userBand.bandId - 1];

  if (!refBand) {
    errors.push(`Invalid band ID: ${userBand.bandId}`);
    return { valid: false, errors, warnings };
  }

  // 2. Check filter type is supported
  if (userBand.controls && userBand.controls.typeOptions) {
    userBand.controls.typeOptions.forEach(type => {
      if (!refBand.controls.typeOptions.includes(type)) {
        errors.push(`Filter type "${type}" not supported for Band ${userBand.bandId}`);
      }
    });
  }

  // 3. Check frequency range makes sense
  if (userBand.frequencyHz && userBand.frequencyHz.typicalRange) {
    const [userMin, userMax] = userBand.frequencyHz.typicalRange;
    const [refMin, refMax] = refBand.frequencyHz.typicalRange;

    if (userMin < refMin * 0.5 || userMax > refMax * 2) {
      warnings.push(`Frequency range [${userMin}, ${userMax}] Hz significantly differs from typical [${refMin}, ${refMax}] Hz`);
    }
  }

  // 4. Check gain limits are reasonable
  if (userBand.controls && userBand.controls.gainDb) {
    const gain = userBand.controls.gainDb;

    if (gain.safeMaxBus > gain.safeMaxTrack) {
      errors.push('safeMaxBus should not exceed safeMaxTrack');
    }

    if (gain.safeMaxMaster > gain.safeMaxBus) {
      errors.push('safeMaxMaster should not exceed safeMaxBus');
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}
```

---

## Archetype Validation

```javascript
function validateArchetype(archetype, bandId, bandDefinitions) {
  const errors = [];
  const band = bandDefinitions.bands[bandId - 1];

  // 1. Check filter type is supported
  if (!band.controls.typeOptions.includes(archetype.type)) {
    errors.push(`Filter type "${archetype.type}" not supported for Band ${bandId}`);
  }

  // 2. Check frequency is in typical range
  const [minFreq, maxFreq] = band.frequencyHz.typicalRange;
  if (archetype.freqHz < minFreq || archetype.freqHz > maxFreq) {
    errors.push(`Frequency ${archetype.freqHz} Hz outside typical range [${minFreq}, ${maxFreq}] Hz`);
  }

  // 3. Check gain is within safe limits (assume track level)
  const maxGain = band.controls.gainDb.safeMaxTrack;
  if (Math.abs(archetype.gainDb) > maxGain) {
    errors.push(`Gain ${archetype.gainDb} dB exceeds safe maximum ${maxGain} dB`);
  }

  // 4. Check bandwidth is 0-100
  if (archetype.bwPercent < 0 || archetype.bwPercent > 100) {
    errors.push(`Bandwidth ${archetype.bwPercent}% must be between 0-100`);
  }

  return {
    valid: errors.length === 0,
    errors
  };
}
```

---

## Preset Validation

```javascript
function validatePreset(preset, bandDefinitions, archetypes) {
  const errors = [];

  // 1. Check structure
  if (!preset.name || typeof preset.name !== 'string') {
    errors.push('Preset must have a name');
  }

  if (!Array.isArray(preset.bands)) {
    errors.push('Preset must have a bands array');
    return { valid: false, errors };
  }

  // 2. Validate each band configuration
  preset.bands.forEach((bandConfig, index) => {
    // Check band ID is valid
    if (bandConfig.bandId < 1 || bandConfig.bandId > 7) {
      errors.push(`Band configuration ${index} has invalid bandId: ${bandConfig.bandId}`);
      return;
    }

    // If using archetype reference
    if (bandConfig.source && bandConfig.source.type === 'archetype') {
      const archetype = findArchetype(bandConfig.bandId, bandConfig.source.name, archetypes);
      if (!archetype) {
        errors.push(`Archetype "${bandConfig.source.name}" not found for band ${bandConfig.bandId}`);
      } else {
        // Validate archetype
        const validation = validateArchetype(archetype, bandConfig.bandId, bandDefinitions);
        if (!validation.valid) {
          errors.push(...validation.errors);
        }
      }
    }

    // If using custom settings
    if (bandConfig.source && bandConfig.source.type === 'custom') {
      const validation = validateArchetype(
        bandConfig.source.settings,
        bandConfig.bandId,
        bandDefinitions
      );
      if (!validation.valid) {
        errors.push(...validation.errors);
      }
    }
  });

  // 3. Check for duplicate band IDs
  const bandIds = preset.bands.map(b => b.bandId);
  const duplicates = bandIds.filter((id, index) => bandIds.indexOf(id) !== index);
  if (duplicates.length > 0) {
    errors.push(`Duplicate band IDs in preset: ${duplicates.join(', ')}`);
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

function findArchetype(bandId, name, archetypes) {
  const bandKey = `band${bandId}_${getBandZoneName(bandId)}`;
  const bandArchetypes = archetypes.bandArchetypes[bandKey];
  return bandArchetypes?.find(a => a.name === name);
}
```

---

## TypeScript Integration

```typescript
import { JSONSchemaType } from 'ajv';

// Generate TypeScript types from schema
interface Band {
  bandId: number;
  color: 'purple' | 'pink' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue';
  zone: string;
  frequencyHz: {
    typicalRange: [number, number];
    anchorTargets: number[];
  };
  controls: {
    typeOptions: Array<'high_pass' | 'low_pass' | 'bell' | 'high_shelf' | 'low_shelf' | 'notch'>;
    defaultType: 'high_pass' | 'low_pass' | 'bell' | 'high_shelf' | 'low_shelf' | 'notch';
    gainDb: {
      typical: [number, number];
      safeMaxTrack: number;
      safeMaxBus: number;
      safeMaxMaster: number;
    };
    bwPercent: {
      meaning: string;
      wide: [number, number];
      medium: [number, number];
      narrow: [number, number];
      default: number;
    };
  };
  roles: {
    primary: string[];
    fixes: string[];
    creative: string[];
    warnings: string[];
  };
  uiCopy: {
    label: string;
    oneLiner: string;
    tooltip: string;
    dos: string[];
    donts: string[];
  };
}

// Use with AJV
const schema: JSONSchemaType<Band> = {
  type: 'object',
  properties: {
    // ... schema definition
  },
  required: ['bandId', 'color', 'zone', 'frequencyHz', 'controls', 'roles', 'uiCopy']
};

const validate = ajv.compile(schema);

// Now TypeScript knows the shape
const band: Band = {
  bandId: 1,
  // ... TypeScript will enforce all required fields
};
```

---

## Best Practices

1. **Always validate on load** - Catch data corruption early
2. **Validate user input** - Before saving custom bands/presets
3. **Provide friendly errors** - Don't show raw JSON Schema errors to users
4. **Semantic validation** - Check meaning, not just structure
5. **Version compatibility** - Check version field, migrate if needed
6. **Performance** - Compile validators once, reuse many times
7. **Cache validated data** - Don't re-validate on every access

---

## Testing

```javascript
// Unit tests for validation
describe('Band Validation', () => {
  test('Valid band passes validation', () => {
    const result = validateBand(validBand);
    expect(result.valid).toBe(true);
  });

  test('Missing required field fails', () => {
    const result = validateBand({ bandId: 1 });
    expect(result.valid).toBe(false);
    expect(result.errors).toContainEqual(
      expect.objectContaining({ message: expect.stringContaining('required') })
    );
  });

  test('Invalid color enum fails', () => {
    const result = validateBand({...validBand, color: 'red' });
    expect(result.valid).toBe(false);
  });

  test('Frequency outside range warns', () => {
    const archetype = { type: 'bell', freqHz: 5000, bwPercent: 50, gainDb: 2 };
    const result = validateArchetype(archetype, 1, bandDefinitions); // Band 1 is 20-120 Hz
    expect(result.errors.length).toBeGreaterThan(0);
  });
});
```

---

## Next Steps

- See `typescript-interfaces.md` for type definitions
- See `data-model-overview.md` for architecture
- See `../integration-guides/json-workflow.md` for usage patterns
