import { useState, useEffect } from 'react';
import { SongTemplate, Difficulty, GenreColor } from '@/types';
import { Heart, ChevronDown, ChevronUp, Download, Lightbulb, Plug, ChevronsUpDown } from 'lucide-react';

// Genre color mapping for gradient backgrounds
const genreColors: Record<string, GenreColor> = {
  edm: { from: '#3B82F6', to: '#06B6D4' },
  trap: { from: '#A855F7', to: '#EC4899' },
  hiphop: { from: '#F97316', to: '#EAB308' },
  pop: { from: '#EC4899', to: '#F43F5E' },
  rock: { from: '#EF4444', to: '#F97316' },
  lofi: { from: '#6366F1', to: '#A855F7' },
  rnb: { from: '#8B5CF6', to: '#D946EF' },
};

// Difficulty colors
const difficultyConfig: Record<Difficulty, { label: string; color: string; bg: string }> = {
  beginner: { label: 'Beginner', color: 'text-green-400', bg: 'bg-green-500/20 border-green-500/30' },
  intermediate: { label: 'Intermediate', color: 'text-yellow-400', bg: 'bg-yellow-500/20 border-yellow-500/30' },
  advanced: { label: 'Advanced', color: 'text-red-400', bg: 'bg-red-500/20 border-red-500/30' },
};

export const TemplatesSection = () => {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [bpmFilter, setBpmFilter] = useState('all');
  const [keyFilter, setKeyFilter] = useState('all');
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty | 'all'>('all');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});
  const [allExpanded, setAllExpanded] = useState(false); // Start collapsed
  const [expandedLayers, setExpandedLayers] = useState<Record<string, boolean>>({});

  // Load favorites from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('fl-template-favorites');
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('fl-template-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const toggleCard = (id: number) => {
    const currentState = expandedCards[id] !== undefined ? expandedCards[id] : allExpanded;
    setExpandedCards(prev => ({ ...prev, [id]: !currentState }));
  };

  const expandAllCards = () => {
    setAllExpanded(true);
    setExpandedCards({});
  };

  const collapseAllCards = () => {
    setAllExpanded(false);
    setExpandedCards({});
  };

  const toggleLayer = (key: string) => {
    setExpandedLayers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Generate filename slug from template name and genre
  const generateSlug = (genre: string, name: string): string => {
    const cleanName = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return `${genre}-${cleanName}`;
  };

  // Download template as .flp file or JSON fallback
  const handleDownload = (template: SongTemplate) => {
    const slug = generateSlug(template.genre, template.name);
    const flpFilename = `${slug}.flp`;
    const flpPath = `/templates/${flpFilename}`;

    // Try to download .flp file first
    fetch(flpPath, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          // .flp file exists, download it
          const link = document.createElement('a');
          link.href = flpPath;
          link.download = flpFilename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          // .flp file doesn't exist, offer JSON export instead
          downloadTemplateJSON(template, slug);
        }
      })
      .catch(() => {
        // Network error or file doesn't exist, use JSON fallback
        downloadTemplateJSON(template, slug);
      });
  };

  // Export template configuration as JSON
  const downloadTemplateJSON = (template: SongTemplate, slug: string) => {
    const templateData = {
      ...template,
      exportedFrom: 'FL Studio Master Hub',
      exportDate: new Date().toISOString(),
      instructions: [
        '1. Open FL Studio and create a new project',
        `2. Set BPM to ${template.bpm} and key to ${template.key}`,
        '3. Create the following channels/layers:',
        ...template.layers.flatMap((layer, idx) =>
          [`   ${idx + 1}. ${layer.category}:`, ...layer.elements.map(e => `      - ${e}`)]
        ),
        '4. Route channels to mixer tracks and color-code them',
        '5. Save your project and start producing!',
      ],
      mixingTips: getMixingTips(template.genre),
      recommendedPlugins: template.layers.flatMap(layer =>
        layer.recommendedPlugins || []
      ).filter((plugin, index, self) =>
        index === self.findIndex(p => p.name === plugin.name)
      ),
    };

    const jsonString = JSON.stringify(templateData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${slug}-template.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // Show helpful message
    alert(
      `📋 Template Configuration Downloaded\n\n` +
      `The .flp file for "${template.name}" is not yet available.\n\n` +
      `Instead, we've downloaded a JSON file with:\n` +
      `• Complete layer structure\n` +
      `• Step-by-step setup instructions\n` +
      `• Mixing tips for ${template.genre}\n` +
      `• Recommended plugins\n\n` +
      `Use this as a blueprint to set up the template manually in FL Studio.`
    );
  };

  // Helper to enrich templates with default values
  const getDifficulty = (bpm: number, layerCount: number): Difficulty => {
    if (bpm < 100 && layerCount <= 5) return 'beginner';
    if (bpm > 140 || layerCount > 6) return 'advanced';
    return 'intermediate';
  };

  const getMixingTips = (genre: string): string[] => {
    const tips: Record<string, string[]> = {
      edm: ['Sidechain bass to kick at -4 to -6dB', 'Keep sub bass mono below 120Hz', 'Use stereo widening on leads above 200Hz'],
      trap: ['Layer 808s with clean sub for punch', 'High-pass hi-hats at 300Hz', 'Use saturation on snares for presence'],
      hiphop: ['Keep vocals 3-6dB above mix', 'Compress drums parallel for punch', 'Use subtle tape saturation for warmth'],
      pop: ['Reference commercial tracks for loudness', 'Automate reverb for verse/chorus contrast', 'De-ess vocals at 5-8kHz'],
      rock: ['Room mics add depth to drums', 'Double-track guitars for width', 'High-pass bass at 40Hz for clarity'],
      lofi: ['Add subtle tape wobble for character', 'Roll off highs above 12kHz', 'Use vinyl crackle sparingly'],
      rnb: ['Warm up vocals with subtle saturation', 'Use 1/4 note delays on vocals', 'Keep bass smooth with light compression'],
    };
    return tips[genre] || ['Balance all elements carefully', 'Use reference tracks'];
  };

  // Song templates data
  const songTemplates: SongTemplate[] = [
    // EDM TEMPLATES
    {
      id: 1,
      genre: 'edm',
      name: 'Progressive House',
      bpm: 128,
      key: 'A Minor',
      description: 'Melodic progressive house with layered synths and emotional builds',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Four-on-Floor Kick', 'Clap (on 2 & 4)', 'Open Hi-Hat (offbeat)', 'Closed Hi-Hat', 'Crash Cymbals', 'Ride Cymbal']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Sub Bass', 'Bass Synth (filtered)']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Lead Synth', 'Pluck Sequence', 'Piano Melody']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Lush Pad', 'Chord Stabs', 'Atmospheric Synth']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['White Noise Build', 'Downlifter', 'Reverb Tail', 'Risers']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Vocal Chops', 'Main Vocal Line']
        }
      ]
    },
    {
      id: 2,
      genre: 'edm',
      name: 'Future Bass',
      bpm: 128,
      key: 'A Minor',
      description: 'Melodic progressive house with layered synths',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Four-on-Floor Kick', 'Clap (on 2 & 4)', 'Open Hi-Hat (offbeat)', 'Closed Hi-Hat', 'Crash Cymbals', 'Ride Cymbal']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Sub Bass', 'Bass Synth (filtered)']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Lead Synth', 'Pluck Sequence', 'Piano Melody']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Lush Pad', 'Chord Stabs', 'Atmospheric Synth']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['White Noise Build', 'Downlifter', 'Reverb Tail', 'Risers']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Vocal Chops', 'Main Vocal Line']
        }
      ]
    },
    {
      id: 3,
      genre: 'edm',
      name: 'Deep House',
      bpm: 122,
      key: 'G Major',
      description: 'Groovy deep house with soulful vocals and warm basslines',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Deep Kick', 'Soft Clap', 'Open/Closed Hi-Hats', 'Shaker', 'Rim Click', 'Crash']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Deep Sub Bass', 'Rhodes Bass', 'Filtered Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Rhodes Piano', 'Vocal Sample', 'Muted Guitar']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Warm Pad', 'String Stabs', 'Organ Chords']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Hiss', 'Reverb Tail', 'Filter Automation']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Soulful Vocal Sample', 'Vocal Chops', 'Background Hums']
        }
      ]
    },
    // TRAP TEMPLATES
    {
      id: 4,
      genre: 'trap',
      name: 'Modern Trap',
      bpm: 140,
      key: 'C Minor',
      description: 'Hard-hitting trap with 808s and rapid hi-hats',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['808 Kick', 'Punchy Snare/Clap', 'Rapid Hi-Hats (32nd/64th)', 'Percussion Rolls', 'Rim Shots']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['808 Bass (Tuned)', 'Sub Bass Layer']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Bell Lead', 'Vocal Chops', 'Arp Synth']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Dark Pad', 'String Layer']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Riser Sweeps', 'Impact Hits', 'Vinyl Crackle', 'Reverse Cymbal']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Lead Vocal', 'Ad-libs', 'Vocal FX']
        }
      ]
    },
    {
      id: 5,
      genre: 'trap',
      name: 'Melodic Trap',
      bpm: 145,
      key: 'D Minor',
      description: 'Emotional trap with guitar melodies and atmospheric pads',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['808 Kick', 'Layered Snare/Clap', 'Rolled Hi-Hats', 'Open Hat', 'Cymbal']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Melodic 808', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Guitar Melody', 'Piano Lead', 'Synth Arp', 'Flute']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Lush Pad', 'Strings', 'Ambient Synth']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Riser', 'Downlifter', 'Impact', 'Reverse Melody']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Autotuned Vocal', 'Vocal Layers', 'Ad-libs']
        }
      ]
    },
    {
      id: 6,
      genre: 'trap',
      name: 'Dark Trap',
      bpm: 138,
      key: 'F# Minor',
      description: 'Aggressive dark trap with heavy distortion',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Distorted 808 Kick', 'Hard Clap', 'Triplet Hi-Hats', 'Snare Rolls', 'Crash']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Distorted 808', 'Growl Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Dark Bell', 'Dissonant Synth', 'Reversed Samples']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Dark Drone', 'Distorted Pad', 'Horror Strings']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Gunshot', 'Siren', 'Metal Clang', 'Distortion Riser']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Pitched-Down Vocal', 'Screams', 'Vocal Chops']
        }
      ]
    },
    // HIP HOP TEMPLATES
    {
      id: 7,
      genre: 'hiphop',
      name: 'Boom Bap Hip Hop',
      bpm: 90,
      key: 'E Minor',
      description: 'Classic boom bap with vinyl samples',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Punchy Kick', 'Snappy Snare', 'Hi-Hat Pattern', 'Crash', 'Shaker/Tambourine']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Deep Sub Bass', 'Walking Bass Line']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Sampled Loop', 'Piano Stabs', 'Guitar Lick']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Jazz Chords', 'Organ Background', 'String Section']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Crackle', 'Scratch Samples', 'Record Stop', 'Tape Hiss']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Rap Vocal', 'Vocal Sample Chops', 'Ad-libs']
        }
      ]
    },
    {
      id: 8,
      genre: 'hiphop',
      name: 'Trap Hip Hop',
      bpm: 150,
      key: 'B♭ Minor',
      description: 'Modern hip hop with trap influence and bouncy flow',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Punchy Kick', 'Layered Snare', 'Rapid Hi-Hats', '808 Rolls', 'Open Hat']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['808 Bass', 'Sub Layer']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Piano Loop', 'Bell Pattern', 'Synth Lead']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Pad', 'String Shots', 'Vocal Sample']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Riser', 'Impact', 'Vinyl Noise', 'Transition FX']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Rap Vocal', 'Ad-libs', 'Vocal Chops']
        }
      ]
    },
    {
      id: 9,
      genre: 'hiphop',
      name: 'Lo-fi Boom Bap',
      bpm: 88,
      key: 'A Minor',
      description: 'Chill lo-fi boom bap with dusty drums and jazz samples',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Dusty Kick', 'Vintage Snare', 'Brushed Hi-Hat', 'Shaker', 'Vinyl Noise Layer']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Upright Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Jazz Sample', 'Rhodes Piano', 'Guitar Lick', 'Sax Sample']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Jazz Chords', 'String Sample', 'Warm Pad']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Crackle', 'Tape Hiss', 'Lo-fi Filter', 'Bit Crusher']
        },
        {
          category: 'Ambient',
          color: 'bg-indigo-500',
          elements: ['Rain', 'Cafe Sounds', 'Record Noise']
        }
      ]
    },
    // POP TEMPLATES
    {
      id: 10,
      genre: 'pop',
      name: 'Modern Pop',
      bpm: 120,
      key: 'G Major',
      description: 'Radio-ready pop production with catchy hooks',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Tight Kick', 'Clap/Snare', 'Hi-Hat Pattern', 'Tambourine', 'Finger Snaps', 'Hand Claps']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Synth Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Piano Hook', 'Synth Lead', 'Guitar Riff', 'Bells/Mallets']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Pad Chords', 'Synth Stabs', 'Guitar Chords', 'String Section']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Riser', 'Impact', 'Sweep', 'Vinyl Stop']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Lead Vocal', 'Harmonies', 'Background Vocals', 'Ad-libs']
        }
      ]
    },
    {
      id: 11,
      genre: 'pop',
      name: 'Dance Pop',
      bpm: 128,
      key: 'C Major',
      description: 'Upbeat dance pop with four-on-floor energy',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Four-on-Floor Kick', 'Clap', 'Hi-Hat (16ths)', 'Shaker', 'Crash', 'Tambourine']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Pumping Side-Chain Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Synth Hook', 'Vocal Chops', 'Arp Synth']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Supersaw Pad', 'Piano Chords', 'Brass Stabs']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Riser', 'Downlifter', 'Impact', 'White Noise']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Lead Vocal', 'Vocal Harmonies', 'Vocal Chops', 'Talk Box']
        }
      ]
    },
    {
      id: 12,
      genre: 'pop',
      name: 'Indie Pop',
      bpm: 115,
      key: 'D Major',
      description: 'Organic indie pop with live instruments and warm production',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Live Kick', 'Live Snare', 'Hi-Hat', 'Tambourine', 'Shaker', 'Finger Snaps']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Electric Bass', 'Synth Bass Layer']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Acoustic Guitar', 'Electric Guitar Lead', 'Piano', 'Glockenspiel']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Acoustic Guitar Chords', 'Synth Pad', 'String Section']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Reverb Tail', 'Delay Throw', 'Tape Stop']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Natural Lead Vocal', 'Gang Vocals', 'Harmonies', 'Whistling']
        }
      ]
    },
    // ROCK TEMPLATES
    {
      id: 13,
      genre: 'rock',
      name: 'Alternative Rock',
      bpm: 140,
      key: 'D Major',
      description: 'Energetic alternative rock arrangement',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Live Kick', 'Live Snare', 'Tom Fills', 'Hi-Hat', 'Ride Cymbal', 'Crash Cymbal']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Electric Bass Guitar', 'Bass Octave Doubling']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Lead Guitar', 'Guitar Lick', 'Vocal Melody']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Rhythm Guitar (Distorted)', 'Clean Guitar Arpeggios', 'Organ/Keys']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Guitar Feedback', 'Delay Throw', 'Reverb Tail']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Lead Vocal', 'Harmony Vocals', 'Gang Vocals']
        }
      ]
    },
    {
      id: 14,
      genre: 'rock',
      name: 'Hard Rock',
      bpm: 130,
      key: 'E Minor',
      description: 'Heavy rock with powerful riffs and driving drums',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Double Bass Kick', 'Powerful Snare', 'Crash Cymbals', 'Hi-Hat', 'China Cymbal', 'Tom Fills']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Distorted Bass Guitar', 'Pick Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Guitar Solo', 'Lead Riff', 'Pinch Harmonics']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Power Chords', 'Rhythm Guitar (Heavy Distortion)', 'Breakdown Riff']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Guitar Feedback', 'Wah Pedal', 'Amp Noise']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Gritty Lead Vocal', 'Scream/Growl', 'Backing Vocals']
        }
      ]
    },
    {
      id: 15,
      genre: 'rock',
      name: 'Indie Rock',
      bpm: 135,
      key: 'A Major',
      description: 'Jangly indie rock with clean guitars and melodic vocals',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Punchy Kick', 'Snare', 'Hi-Hat', 'Ride', 'Crash', 'Tom Fills']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Melodic Bass Guitar', 'Picked Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Jangly Guitar Lead', 'Clean Guitar Melody', 'Keyboard Line']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Clean Rhythm Guitar', 'Arpeggiated Guitar', 'Organ', 'Synth Pad']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Reverb', 'Delay', 'Tremolo', 'Chorus']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Melodic Lead Vocal', 'Harmonies', 'Gang Vocals', 'Falsetto']
        }
      ]
    },
    // LO-FI TEMPLATES
    {
      id: 16,
      genre: 'lofi',
      name: 'Lo-fi Hip Hop',
      bpm: 85,
      key: 'C Minor',
      description: 'Chill lo-fi beats with vinyl texture',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Soft Kick', 'Dusty Snare', 'Rim Shot', 'Brush Hi-Hat', 'Shaker']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Warm Sub Bass', 'Upright Bass Sample']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Electric Piano', 'Guitar Loop', 'Music Box', 'Flute/Sax Sample']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Jazz Chords', 'Rhodes Piano', 'Warm Pad']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Crackle', 'Rain Sounds', 'Tape Hiss', 'Record Pop', 'Filter Automation']
        },
        {
          category: 'Ambient',
          color: 'bg-indigo-500',
          elements: ['Cafe Ambience', 'Nature Sounds', 'Vocal Hums']
        }
      ]
    },
    {
      id: 17,
      genre: 'lofi',
      name: 'Lo-fi Study Beats',
      bpm: 78,
      key: 'F Major',
      description: 'Minimal lo-fi for studying and focus',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Soft Kick', 'Rimshot', 'Minimal Hi-Hat', 'Shaker']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Deep Sub Bass', 'Muted Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Piano Loop', 'Guitar Pluck', 'Kalimba', 'Harp']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Soft Pad', 'String Texture', 'Ambient Synth']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Noise', 'Tape Warble', 'Lo-fi Filter']
        },
        {
          category: 'Ambient',
          color: 'bg-indigo-500',
          elements: ['White Noise', 'Fire Crackle', 'Wind Chimes']
        }
      ]
    },
    {
      id: 18,
      genre: 'lofi',
      name: 'Jazzhop',
      bpm: 92,
      key: 'B♭ Major',
      description: 'Jazz-influenced lo-fi with complex chords',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Swing Kick', 'Jazz Snare', 'Brush Cymbals', 'Ride Pattern']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Walking Jazz Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Jazz Guitar', 'Trumpet Sample', 'Rhodes Solo', 'Vibraphone']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Jazz 7th Chords', 'Piano Comping', 'String Ensemble']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Crackle', 'Tape Saturation', 'Room Reverb']
        },
        {
          category: 'Ambient',
          color: 'bg-indigo-500',
          elements: ['City Ambience', 'Night Sounds', 'Record Noise']
        }
      ]
    },
    // R&B TEMPLATES
    {
      id: 19,
      genre: 'rnb',
      name: 'R&B/Soul',
      bpm: 75,
      key: 'E♭ Major',
      description: 'Smooth R&B with rich harmonies',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Soft Kick', 'Snare (with ghost notes)', 'Hi-Hat (swing feel)', 'Rim Shot', 'Tambourine']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Deep Sub Bass', 'Synth Bass (filtered)', 'Electric Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Electric Piano Riff', 'Guitar Lick', 'Synth Lead']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Rhodes Chords', 'Lush Strings', 'Warm Pad', 'Organ']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Noise', 'Tape Stop', 'Reverse Vocal']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Lead Vocal', 'Vocal Harmonies', 'Background Vocals', 'Vocal Runs']
        }
      ]
    },
    {
      id: 20,
      genre: 'rnb',
      name: 'Alternative R&B',
      bpm: 80,
      key: 'A Minor',
      description: 'Modern alternative R&B with electronic elements',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Punchy Kick', 'Clap/Snare', 'Hi-Hat Pattern', 'Percussion Loops', 'Rim Clicks']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['808 Bass', 'Synth Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Synth Lead', 'Vocal Chops', 'Guitar Ambience', 'Keys']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Atmospheric Pad', 'Ambient Synth', 'Dark Chords']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Riser', 'Downlifter', 'Glitch Effects', 'Reverse FX']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Processed Lead Vocal', 'Vocal Layers', 'Pitched Vocals', 'Ad-libs']
        }
      ]
    },
    {
      id: 21,
      genre: 'rnb',
      name: 'Neo-Soul',
      bpm: 90,
      key: 'D Minor',
      description: 'Neo-soul with live instrumentation and organic grooves',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Live Kick', 'Live Snare (with ghost notes)', 'Open Hi-Hat', 'Shaker', 'Tambourine', 'Percussion']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Live Electric Bass', 'Upright Bass', 'Sub Layer']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Rhodes Piano', 'Guitar Licks', 'Organ Lead', 'Horn Section']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Jazz Chords (Rhodes)', 'String Arrangement', 'Wurlitzer', 'Pad']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Tape Warmth', 'Analog Saturation', 'Room Reverb']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Soulful Lead Vocal', 'Harmonies', 'Background Vocals', 'Vocal Runs', 'Ad-libs']
        }
      ]
    },
    // Additional templates (EDM, Trap, etc.)
    {
      id: 22,
      genre: 'edm',
      name: 'Dubstep',
      bpm: 140,
      key: 'G Minor',
      description: 'Heavy dubstep with wobble bass and half-time drums',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Sub Kick', 'Snare (half-time)', 'Hi-Hats', 'Snare Rolls', 'Crash']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Wobble Bass', 'Sub Bass', 'Growl Bass', 'Scream Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Atmospheric Lead', 'Arp Synth']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Dark Pad', 'Drone', 'Cinematic Strings']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Riser Build', 'Downsweep', 'Impact Hit', 'Vocal Chop FX', 'Gunshot/Laser']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Vocal Samples', 'Vocal Chops']
        }
      ]
    },
    {
      id: 23,
      genre: 'edm',
      name: 'Tech House',
      bpm: 126,
      key: 'A Minor',
      description: 'Groovy tech house with minimal elements and rolling basslines',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Tight Kick (Four-on-Floor)', 'Crisp Clap', 'Shaker Loop', 'Percussion Hits', 'Open Hi-Hat']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Rolling Bassline', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Minimal Synth Stab', 'Vocal Sample Chop']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Atmospheric Pad', 'Chord Stab']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Whoosh', 'Vinyl Effect', 'Filter Sweep']
        },
        {
          category: 'Groove Elements',
          color: 'bg-orange-500',
          elements: ['Cowbell', 'Bongo', 'Conga', 'Wood Block']
        }
      ]
    },
    {
      id: 24,
      genre: 'edm',
      name: 'Trance',
      bpm: 138,
      key: 'C# Minor',
      description: 'Uplifting trance with arpeggiated leads and epic breakdowns',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Punchy Kick', 'Clap', 'Rolling Hi-Hat (16ths)', 'Crash', 'Open Hat']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Pulsing Bassline', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Arp Lead', 'Pluck Melody', 'Synth Lead']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Supersaw Chords', 'Trance Pad', 'String Layer']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Long Riser', 'Gate Effect', 'Downlifter', 'Impact']
        }
      ]
    },
    {
      id: 25,
      genre: 'edm',
      name: 'Drum & Bass',
      bpm: 174,
      key: 'A Minor',
      description: 'High-energy drum & bass with complex breakbeats',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Punchy Kick', 'Layered Snare', 'Amen Break', 'Reese Drums', 'Cymbal Crashes']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Reese Bass', 'Sub Bass', 'Modulated Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Arp Synth', 'Vocal Chops', 'Atmospheric Lead']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Dark Pad', 'Ambient Texture']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Riser', 'Downlifter', 'Impact', 'Glitch FX']
        }
      ]
    },
    {
      id: 26,
      genre: 'trap',
      name: 'Rage Trap',
      bpm: 155,
      key: 'E Minor',
      description: 'Aggressive high-energy trap with distorted 808s',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Clipping Kick', 'Distorted Clap', 'Rapid Hi-Hats', 'Tom Rolls']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Distorted 808', 'Overdriven Sub']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Electric Guitar Riff', 'Distorted Synth Lead', 'Siren']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Power Chords', 'Dissonant Pad']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Guitar Feedback', 'Impact', 'Scream Sample']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Aggressive Vocal', 'Pitched Vocal', 'Screams']
        }
      ]
    },
    {
      id: 27,
      genre: 'hiphop',
      name: 'UK Drill',
      bpm: 140,
      key: 'D Minor',
      description: 'Dark UK drill with sliding 808s',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Punchy Kick', 'Layered Snare', 'Rapid Hi-Hats (32nd)', 'Percussion Rolls']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Sliding 808 Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Piano Melody', 'Dark Synth', 'String Stabs']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Dark Pad', 'Ominous Strings', 'Choir']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Gunshot', 'Siren', 'Riser', 'Impact']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['UK Rap Vocal', 'Ad-libs', 'Vocal Chops']
        }
      ]
    },
    {
      id: 28,
      genre: 'pop',
      name: 'K-Pop',
      bpm: 125,
      key: 'B♭ Major',
      description: 'High-energy K-pop with dense production',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Punchy Kick', 'Layered Snare/Clap', 'Hi-Hat', 'Percussion Fills']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Synth Bass', 'Side-Chain Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Synth Lead', 'Piano', 'Guitar Riff', 'Brass Hits']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Supersaw Pad', 'Chord Stabs', 'String Section']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Riser', 'Impact', 'Sweep', 'Glitch']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Lead Vocal', 'Rap Section', 'Harmonies', 'Ad-libs']
        }
      ]
    },
    {
      id: 29,
      genre: 'rock',
      name: 'Punk Rock',
      bpm: 180,
      key: 'A Major',
      description: 'Fast-paced punk rock with raw energy',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Fast Kick', 'Snare (on 2 & 4)', 'Hi-Hat (8ths)', 'Crash']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Picked Bass Guitar', 'Root Notes']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Guitar Riff', 'Simple Solo']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Power Chords', 'Distorted Rhythm Guitar']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Feedback', 'Amp Noise']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Shouted Vocal', 'Gang Vocals']
        }
      ]
    },
    {
      id: 30,
      genre: 'lofi',
      name: 'Chillhop',
      bpm: 90,
      key: 'D Minor',
      description: 'Relaxing chillhop with smooth jazz samples',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Soft Kick', 'Dusty Snare', 'Hi-Hat', 'Shaker']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Upright Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Rhodes Piano', 'Jazz Guitar', 'Trumpet Sample']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Jazz Chords', 'Warm Pad']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Crackle', 'Tape Hiss']
        },
        {
          category: 'Ambient',
          color: 'bg-indigo-500',
          elements: ['Cafe Sounds', 'Rain']
        }
      ]
    },
    {
      id: 31,
      genre: 'rnb',
      name: 'Trap Soul',
      bpm: 68,
      key: 'F Minor',
      description: 'Modern trap soul with 808s and emotional vocals',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['808 Kick', 'Snare/Clap', 'Hi-Hat Rolls', 'Rim Click']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['808 Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Rhodes Piano', 'Guitar', 'Synth Lead']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Pad', 'Strings', 'Ambient Synth']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Riser', 'Vinyl Noise', 'Reverse Vocal']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Lead Vocal', 'Vocal Layers', 'Harmonies', 'Ad-libs']
        }
      ]
    },
    {
      id: 32,
      genre: 'edm',
      name: 'Synthwave',
      bpm: 100,
      key: 'E Minor',
      description: 'Retro 80s synthwave with lush analog pads and driving basslines',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Gated Reverb Snare', 'Four-on-Floor Kick', 'Tom Fills', 'Closed Hi-Hat']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Analog Bass', 'Sub Layer']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Lead Synth (saw/square)', 'Arpeggio', 'Synth Bell']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Lush Pad', 'Strings', 'Brass Stabs']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Tape Delay', 'Reverb Wash', 'Vinyl Crackle']
        }
      ]
    },
    {
      id: 33,
      genre: 'edm',
      name: 'Bass House',
      bpm: 126,
      key: 'G Minor',
      description: 'Heavy bass house with wobble bass and punchy drums',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Punchy Kick', 'Clap', 'Closed Hi-Hat', 'Open Hi-Hat', 'Shaker']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Wobble Bass', 'Sub Bass', 'Bass Stab']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Vocal Sample', 'Stab Synth', 'Lead Hook']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['White Noise Build', 'Downlifter', 'Impact']
        }
      ]
    },
    {
      id: 34,
      genre: 'edm',
      name: 'Hardstyle',
      bpm: 150,
      key: 'D Minor',
      description: 'Hard-hitting hardstyle with reverse bass and euphoric leads',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Distorted Kick', 'Reverse Bass Kick', 'Clap', 'Ride Cymbal', 'Crash']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Screeching Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Euphoric Lead', 'Pitched Kick', 'Vocal Chops']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Pad', 'Atmospheric Layer']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Buildup Riser', 'Alarm', 'Siren FX']
        }
      ]
    },
    {
      id: 35,
      genre: 'afrobeats',
      name: 'Afrobeats',
      bpm: 102,
      key: 'C Major',
      description: 'Infectious afrobeats with log drums and percussion',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Kick', 'Snare/Rim', 'Log Drum', 'Shekere', 'Conga', 'Hi-Hat']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Sub Bass', 'Melodic Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Synth Lead', 'Keys', 'Kalimba', 'Guitar Lick']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Pad', 'Horn Section', 'Strings']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Lead Vocal', 'Backing Vocals', 'Ad-libs']
        }
      ]
    },
    {
      id: 36,
      genre: 'reggaeton',
      name: 'Reggaeton',
      bpm: 95,
      key: 'A Minor',
      description: 'Classic reggaeton with dembow rhythm and Latin percussion',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Kick (dembow pattern)', 'Snare', 'Timbale', 'Bongo', 'Hi-Hat']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['808 Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Synth Lead', 'Piano', 'Pluck']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Pad', 'Brass', 'String Stabs']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Lead Vocal (Spanish)', 'Backing Vocals', 'Ad-libs', 'Shouts']
        }
      ]
    },
    {
      id: 37,
      genre: 'club',
      name: 'Jersey Club',
      bpm: 140,
      key: 'F# Minor',
      description: 'High-energy Jersey club with chopped vocals and bed squeaks',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Kick', 'Snare', 'Bed Squeak', 'Hi-Hat', 'Percussion']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Sub Bass', '808 Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Chopped Vocal', 'Synth Stab', 'Lead']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Airhorn', 'Siren', 'Vocal Chops']
        }
      ]
    },
    {
      id: 38,
      genre: 'phonk',
      name: 'Phonk',
      bpm: 130,
      key: 'G# Minor',
      description: 'Dark phonk with Memphis samples and cowbell',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Kick', 'Snare', 'Cowbell', 'Hi-Hat Rolls', 'Cymbal']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['808 Bass (distorted)', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Memphis Sample', 'Dark Bell', 'Synth Lead']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Vocal Sample (pitched down)', 'Three 6 Mafia Sample']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Crackle', 'Tape Stop', 'Reverb Wash']
        }
      ]
    },
    {
      id: 39,
      genre: 'pop',
      name: 'Hyperpop',
      bpm: 170,
      key: 'B Major',
      description: 'Maximalist hyperpop with pitch-shifted vocals and distorted bass',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Distorted Kick', 'Clap', 'Hi-Hat (double-time)', 'Percussion']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Distorted Bass', 'Sub Bass', 'Bass Glitch']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Hypersaw Lead', 'Pitched Vocal Chops', 'Synth Bell']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Supersaw Pad', 'Detuned Synth']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Pitch-Shifted Vocal', 'Harmonies', 'Vocal Chops']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Glitch FX', 'Bitcrush', 'Reverb', 'Distortion']
        }
      ]
    },
    {
      id: 40,
      genre: 'breakbeat',
      name: 'Breakbeat',
      bpm: 138,
      key: 'E Minor',
      description: 'Funky breakbeat with chopped drum loops and bass',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Amen Break', 'Additional Kick', 'Snare Layer', 'Cymbal']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Reese Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Synth Stab', 'Lead', 'Vocal Sample']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Scratch FX', 'Siren', 'Reverse Cymbal']
        }
      ]
    },
    {
      id: 41,
      genre: 'edm',
      name: 'Psytrance',
      bpm: 145,
      key: 'D Minor',
      description: 'Psychedelic trance with rolling bassline and trippy FX',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Kick', 'Hi-Hat (16th triplets)', 'Percussion Loop', 'Cymbal']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Rolling Bassline', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Acid Lead', 'Pluck Sequence', 'Synth Riff']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Psychedelic FX', 'Laser', 'Reverse Sweep', 'Voice Sample']
        }
      ]
    },
    {
      id: 42,
      genre: 'ambient',
      name: 'Ambient',
      bpm: 80,
      key: 'C Major',
      description: 'Atmospheric ambient with evolving pads and field recordings',
      layers: [
        {
          category: 'Pads',
          color: 'bg-purple-500',
          elements: ['Evolving Pad', 'Granular Texture', 'Drone', 'String Layer']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Sparse Piano', 'Synth Bell', 'Melodic Texture']
        },
        {
          category: 'Atmosphere',
          color: 'bg-green-500',
          elements: ['Field Recording', 'Nature Sounds', 'Rain', 'Wind']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Reverb Tail', 'Delay Wash', 'Granular Glitch']
        }
      ]
    },
    {
      id: 43,
      genre: 'vaporwave',
      name: 'Vaporwave',
      bpm: 70,
      key: 'F# Major',
      description: 'Nostalgic vaporwave with slowed samples and dreamy aesthetics',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Slow Kick', 'Snare', 'Hi-Hat']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Sub Bass', 'Synth Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Slowed Sample', 'Chopped Vocal', 'Synth Lead', 'Elevator Music']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Dreamy Pad', 'Detuned Synth', 'FM Rhodes']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Noise', 'Bitcrush', 'VHS Glitch', 'Reverb Wash']
        }
      ]
    },
    {
      id: 44,
      genre: 'trap',
      name: 'Latin Trap',
      bpm: 96,
      key: 'B Minor',
      description: 'Latin trap with reggaeton influence and Spanish vocals',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['808 Kick', 'Snare', 'Hi-Hat Rolls', 'Timbale', 'Rim Click']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['808 Bass (sliding)', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Flute', 'Guitar', 'Piano', 'Synth Lead']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Pad', 'Strings']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Spanish Vocal', 'Harmonies', 'Ad-libs']
        }
      ]
    },
    {
      id: 45,
      genre: 'garage',
      name: 'UK Garage',
      bpm: 130,
      key: 'G Minor',
      description: '2-step UK garage with shuffled drums and soulful vocals',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Kick (2-step pattern)', 'Snare', 'Shuffled Hi-Hat', 'Rim', 'Percussion']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Sub Bass', 'Wobble Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Vocal Chops', 'Rhodes Piano', 'Organ']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Pad', 'Strings']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Soulful Vocal', 'Harmonies', 'Vocal Sample']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Reverb', 'Delay', 'Vinyl Crackle']
        }
      ]
    },
    {
      id: 46,
      genre: 'trap',
      name: 'Sad Trap',
      bpm: 140,
      key: 'D Minor',
      description: 'Emotional trap with melancholic melodies and reverb-drenched vocals',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Soft Kick', 'Layered Snare', 'Hi-Hat Rolls', 'Rim Click']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['808 Bass (sustained)', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Sad Piano', 'Guitar', 'Bell']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Lush Pad', 'Strings', 'Ambient Texture']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Vocal (heavy reverb)', 'Harmonies', 'Vocal Chops']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Rain FX', 'Reverb Tail', 'Vinyl Crackle']
        }
      ]
    },
    {
      id: 47,
      genre: 'trap',
      name: 'Heavy Trap',
      bpm: 145,
      key: 'E Minor',
      description: 'Aggressive trap with distorted 808s and hard-hitting drums',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Hard Kick', 'Layered Clap', 'Hi-Hat Rolls (1/32)', 'Crash']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Distorted 808', 'Sub Bass (compressed)']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Dark Synth', 'Brass Stab', 'Lead']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Riser', 'Impact', 'Glitch FX', 'Siren']
        }
      ]
    },
    {
      id: 48,
      genre: 'trap',
      name: 'Drill',
      bpm: 140,
      key: 'C# Minor',
      description: 'Chicago/Brooklyn drill with sliding 808s and ominous piano',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Punchy Kick', 'Snare', 'Hi-Hat (double-time)', 'Cymbal']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Sliding 808', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Dark Piano', 'Bell', 'String Pluck']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Pad', 'Choir']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Gunshot', 'Reverse Cymbal', 'Riser']
        }
      ]
    },
    {
      id: 49,
      genre: 'trap',
      name: 'Plugg',
      bpm: 135,
      key: 'F# Major',
      description: 'Melodic plugg trap with dreamy bells and airy hi-hats',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Soft Kick', 'Clap', 'Airy Hi-Hat', 'Shaker']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['808 Bass (melodic)', 'Sub Layer']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Bell', 'Flute', 'Music Box', 'Guitar']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Dreamy Pad', 'Ambient Texture']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Noise', 'Reverb Wash', 'Delay']
        }
      ]
    },
    {
      id: 50,
      genre: 'hiphop',
      name: 'NY Drill',
      bpm: 140,
      key: 'A Minor',
      description: 'New York drill with aggressive sliding 808s and dark samples',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Heavy Kick', 'Clap', 'Hi-Hat (triplet rolls)', 'Snare Roll']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Sliding 808 (aggressive)', 'Distorted Sub']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Dark Sample', 'Piano Stab', 'String']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vocal Tag', 'Gunshot', 'Siren', 'Reverse']
        }
      ]
    },
    {
      id: 51,
      genre: 'hiphop',
      name: 'West Coast',
      bpm: 90,
      key: 'G Major',
      description: 'Classic West Coast hip hop with funk bassline and synth leads',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Kick', 'Snare (layered)', 'Hi-Hat (swung)', 'Tambourine']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Funk Bass', 'Sub Layer']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Synth Lead', 'Rhodes', 'Whistle']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Pad', 'Organ', 'Strings']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Vocal', 'Harmonies', 'Ad-libs']
        }
      ]
    },
    {
      id: 52,
      genre: 'hiphop',
      name: 'Southern Hip Hop',
      bpm: 75,
      key: 'E Minor',
      description: 'Southern bounce with heavy 808s and brass stabs',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Kick', 'Snare', 'Hi-Hat (bouncing pattern)', 'Rim', 'Cowbell']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Heavy 808', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Brass Stab', 'Piano', 'Organ']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Strings', 'Choir']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Vocal', 'Call & Response', 'Ad-libs']
        }
      ]
    },
    {
      id: 53,
      genre: 'hiphop',
      name: 'Jazz Rap',
      bpm: 88,
      key: 'Bb Major',
      description: 'Jazz-influenced hip hop with live instrumentation feel',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Kick (acoustic)', 'Snare (brush)', 'Hi-Hat (swung)', 'Cymbal Ride']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Upright Bass', 'Sub Layer']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Saxophone', 'Trumpet', 'Rhodes Piano', 'Guitar']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Jazz Chords', 'Strings']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Crackle', 'Tape Hiss', 'Record Scratch']
        }
      ]
    },
    {
      id: 54,
      genre: 'pop',
      name: 'Alt Pop',
      bpm: 110,
      key: 'A Minor',
      description: 'Alternative pop with experimental production and moody vibes',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Processed Kick', 'Snare (reverb)', 'Hi-Hat (glitchy)', 'Percussion']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Sub Bass', 'Distorted Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Detuned Synth', 'Guitar', 'Piano']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Dark Pad', 'Strings', 'Ambient Layer']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Vocal (processed)', 'Harmonies', 'Vocal Chops']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Glitch', 'Bitcrush', 'Reverb', 'Delay']
        }
      ]
    },
    {
      id: 55,
      genre: 'pop',
      name: 'Dream Pop',
      bpm: 115,
      key: 'E Major',
      description: 'Ethereal dream pop with reverb-soaked guitars and ambient textures',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Soft Kick', 'Snare (distant)', 'Hi-Hat', 'Shaker']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Bass Guitar (reverb)', 'Sub Layer']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Reverb Guitar', 'Synth Lead', 'Bell']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Lush Pad', 'Strings', 'Choir', 'Ambient Texture']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Ethereal Vocal', 'Harmonies (layered)', 'Vocal Pad']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Reverb Wash', 'Delay', 'Shimmer']
        }
      ]
    },
    {
      id: 56,
      genre: 'pop',
      name: 'Bedroom Pop',
      bpm: 100,
      key: 'G Major',
      description: 'Lo-fi bedroom pop with intimate vocals and DIY production aesthetic',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Soft Kick', 'Snare (lo-fi)', 'Hi-Hat', 'Shaker', 'Tambourine']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Bass Guitar', 'Sub Layer']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Guitar (DI)', 'Synth', 'Piano', 'Ukulele']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Pad', 'Ambient Guitar']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Intimate Vocal', 'Harmonies', 'Whisper Layer']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Noise', 'Tape Warble', 'Room Reverb']
        }
      ]
    },
    {
      id: 57,
      genre: 'rock',
      name: 'Post-Punk',
      bpm: 140,
      key: 'A Minor',
      description: 'Dark post-punk with angular guitars and driving bass',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Kick', 'Snare (reverb)', 'Hi-Hat', 'Tom Fills']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Bass Guitar (prominent)', 'Melodic Bassline']
        },
        {
          category: 'Guitar',
          color: 'bg-blue-500',
          elements: ['Angular Guitar', 'Tremolo Guitar', 'Reverb Guitar']
        },
        {
          category: 'Synth',
          color: 'bg-green-500',
          elements: ['Synth Pad', 'Synth Bass']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Baritone Vocal', 'Harmonies', 'Spoken Word']
        }
      ]
    },
    {
      id: 58,
      genre: 'rock',
      name: 'Emo',
      bpm: 155,
      key: 'E Minor',
      description: 'Emotional emo rock with dynamic shifts and passionate vocals',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Kick (dynamic)', 'Snare', 'Hi-Hat', 'Crash (emotional hits)', 'Tom Fills']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Bass Guitar', 'Root Notes']
        },
        {
          category: 'Guitar',
          color: 'bg-blue-500',
          elements: ['Clean Arpeggios', 'Distorted Power Chords', 'Lead Guitar', 'Tapping']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Emotional Vocal', 'Screams', 'Harmonies', 'Gang Vocals']
        }
      ]
    },
    {
      id: 59,
      genre: 'rock',
      name: 'Grunge',
      bpm: 120,
      key: 'E Minor',
      description: 'Raw grunge with heavy distortion and dropped-D tuning',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Kick', 'Snare (heavy)', 'Hi-Hat', 'Crash', 'Ride']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Bass Guitar (fuzz)', 'Dropped Tuning']
        },
        {
          category: 'Guitar',
          color: 'bg-blue-500',
          elements: ['Distorted Rhythm (dropped-D)', 'Lead Guitar', 'Feedback']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Raw Vocal', 'Harmonies', 'Screams']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Guitar Feedback', 'Amp Noise']
        }
      ]
    },
    {
      id: 60,
      genre: 'lofi',
      name: 'Lo-Fi Trap',
      bpm: 140,
      key: 'C Minor',
      description: 'Lo-fi meets trap with dusty samples and hard-hitting 808s',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Kick (dusty)', 'Snare', 'Hi-Hat Rolls', 'Vinyl Drums']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['808 Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Dusty Piano', 'Guitar Sample', 'Bell']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Warm Pad', 'String Sample']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Crackle', 'Tape Hiss', 'Bitcrush']
        }
      ]
    },
    {
      id: 61,
      genre: 'lofi',
      name: 'Study Beats',
      bpm: 75,
      key: 'F Major',
      description: 'Minimal lo-fi study beats with soft drums and warm textures',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Soft Kick', 'Snare (brushed)', 'Hi-Hat (closed)', 'Shaker']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Sub Bass (warm)', 'Bass Guitar']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Rhodes Piano', 'Guitar (mellow)', 'Kalimba']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Pad', 'Strings (soft)']
        },
        {
          category: 'Ambient',
          color: 'bg-indigo-500',
          elements: ['Rain', 'Café Ambience', 'Page Turning']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Noise', 'Tape Warble']
        }
      ]
    },
    {
      id: 62,
      genre: 'lofi',
      name: 'Dusty Vinyl',
      bpm: 82,
      key: 'D Minor',
      description: 'Classic dusty lo-fi with heavy vinyl texture and soul samples',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Kick (dusty)', 'Snare (vintage)', 'Hi-Hat', 'Vinyl Break']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Bass Sample', 'Sub Layer']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Soul Sample', 'Piano (degraded)', 'Guitar', 'Horn']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['String Sample', 'Choir Sample']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Heavy Vinyl Crackle', 'Tape Hiss', 'Record Pop', 'Dust']
        }
      ]
    },
    {
      id: 63,
      genre: 'lofi',
      name: 'Bedroom Lo-Fi',
      bpm: 78,
      key: 'A Minor',
      description: 'Intimate bedroom lo-fi with live instrumentation feel',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Kick (lo-fi)', 'Snare', 'Brush Hi-Hat', 'Finger Snap']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Bass Guitar (DI)', 'Sub Layer']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Guitar (fingerpicked)', 'Rhodes', 'Toy Piano']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Pad', 'Humming Layer']
        },
        {
          category: 'Ambient',
          color: 'bg-indigo-500',
          elements: ['Room Tone', 'Birds', 'Distant Traffic']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Tape Warble', 'Vinyl Crackle', 'Cassette Hiss']
        }
      ]
    },
    {
      id: 64,
      genre: 'trap',
      name: 'Flute Trap',
      bpm: 138,
      key: 'E Minor',
      description: 'Melodic trap featuring prominent flute melodies and lush atmospheres',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Kick', 'Snare', 'Hi-Hat Rolls', 'Rim Click', 'Shaker']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['808 Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Flute Lead', 'Flute Harmonies', 'Bell', 'Piano']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Pad', 'Strings', 'Choir']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Riser', 'Reverb Tail', 'Vocal Chop']
        }
      ]
    },
    {
      id: 65,
      genre: 'trap',
      name: 'Ambient Trap',
      bpm: 135,
      key: 'C# Minor',
      description: 'Atmospheric trap with spacious production and ethereal textures',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Soft Kick', 'Clap', 'Hi-Hat (sparse)', 'Shaker']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['808 Bass (long decay)', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Synth Lead (detuned)', 'Bell', 'Arp']
        },
        {
          category: 'Atmosphere',
          color: 'bg-green-500',
          elements: ['Ambient Pad', 'Drone', 'Texture Layer', 'Vocal Pad']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Reverb Wash', 'Delay', 'Granular FX', 'Field Recording']
        }
      ]
    },
    {
      id: 66,
      genre: 'trap',
      name: 'Soul Trap',
      bpm: 142,
      key: 'F Minor',
      description: 'Soulful trap with sampled vocals and warm organic textures',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Kick', 'Snare', 'Hi-Hat Rolls', 'Shaker', 'Tambourine']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['808 Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Soul Sample', 'Rhodes Piano', 'Guitar', 'Vinyl Keys']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['String Sample', 'Pad', 'Choir Sample']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Vocal Sample (chopped)', 'Vocal Harmony', 'Ad-libs']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Crackle', 'Tape Warble', 'Record Scratch']
        }
      ]
    },
    {
      id: 67,
      genre: 'trap',
      name: 'Detroit Trap',
      bpm: 144,
      key: 'Bb Minor',
      description: 'Detroit-style trap with aggressive drums and dark synths',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Hard Kick', 'Snare/Clap', 'Hi-Hat Rolls (fast)', 'Cymbal']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Distorted 808', 'Sub Bass (heavy)']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Dark Synth', 'Bell', 'Lead']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Pad', 'Strings (minor)']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Siren', 'Alarm', 'Impact', 'Vocal Tag']
        }
      ]
    },
    {
      id: 68,
      genre: 'trap',
      name: 'Spacey Trap',
      bpm: 137,
      key: 'G# Minor',
      description: 'Futuristic trap with synth-heavy production and cosmic atmospheres',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Kick', 'Snare (reverb)', 'Hi-Hat', 'Rim', 'Laser FX']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['808 Bass', 'Synth Bass', 'Sub Layer']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Spacey Synth Lead', 'Arp (cosmic)', 'Bell', 'Pluck']
        },
        {
          category: 'Atmosphere',
          color: 'bg-green-500',
          elements: ['Sci-Fi Pad', 'Space Drone', 'Ambient Texture']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Laser', 'Riser', 'Downlifter', 'Glitch']
        }
      ]
    },
    {
      id: 69,
      genre: 'hiphop',
      name: 'East Coast',
      bpm: 92,
      key: 'D Minor',
      description: 'Classic East Coast hip hop with boom bap drums and jazz samples',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Kick (punchy)', 'Snare (crisp)', 'Hi-Hat (closed)', 'Cymbal']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Bass Sample', 'Sub Layer']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Jazz Sample', 'Piano Loop', 'Horn Stab', 'Guitar']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['String Sample', 'Vinyl Keys']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Vinyl Crackle', 'Scratch FX', 'Record Pop']
        }
      ]
    },
    {
      id: 70,
      genre: 'hiphop',
      name: 'Atlanta Hip Hop',
      bpm: 78,
      key: 'A Minor',
      description: 'Modern Atlanta style with bouncy drums and melodic elements',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Kick', 'Snare', 'Hi-Hat (triplets)', 'Rim', 'Shaker']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['808 Bass (melodic)', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Piano', 'Bell', 'Synth Lead', 'Flute']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Pad', 'Strings']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Vocal', 'Ad-libs', 'Vocal Chops']
        }
      ]
    },
    {
      id: 71,
      genre: 'hiphop',
      name: 'Memphis Hip Hop',
      bpm: 72,
      key: 'F# Minor',
      description: 'Memphis style with lo-fi drums, cowbell, and dark samples',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Kick', 'Snare (vintage)', 'Hi-Hat', 'Cowbell', 'Cymbal']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['808 Bass', 'Sub Bass']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Dark Sample', 'Piano (detuned)', 'Synth Bell']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Vocal Sample (pitched)', 'Vocal Chant', 'Shouts']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Tape Hiss', 'Vinyl Crackle', 'Record Pop']
        }
      ]
    },
    {
      id: 72,
      genre: 'hiphop',
      name: 'Abstract Hip Hop',
      bpm: 86,
      key: 'Eb Minor',
      description: 'Experimental hip hop with unconventional samples and textures',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Kick (processed)', 'Snare (glitchy)', 'Hi-Hat', 'Percussion (found sounds)']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Bass (distorted)', 'Sub Layer']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Obscure Sample', 'Synth (detuned)', 'Field Recording', 'Voice Sample']
        },
        {
          category: 'Texture',
          color: 'bg-green-500',
          elements: ['Ambient Noise', 'Drone', 'Granular Texture']
        },
        {
          category: 'FX',
          color: 'bg-yellow-500',
          elements: ['Glitch', 'Bitcrush', 'Reverse', 'Delay Wash']
        }
      ]
    },
    {
      id: 73,
      genre: 'hiphop',
      name: 'Conscious Hip Hop',
      bpm: 90,
      key: 'C Minor',
      description: 'Conscious hip hop with live instrumentation and positive vibes',
      layers: [
        {
          category: 'Drums',
          color: 'bg-red-500',
          elements: ['Kick (acoustic)', 'Snare', 'Hi-Hat (swung)', 'Shaker', 'Tambourine']
        },
        {
          category: 'Bass',
          color: 'bg-purple-500',
          elements: ['Bass Guitar', 'Sub Layer']
        },
        {
          category: 'Melody',
          color: 'bg-blue-500',
          elements: ['Guitar (clean)', 'Piano', 'Horn Section', 'Organ']
        },
        {
          category: 'Harmony',
          color: 'bg-green-500',
          elements: ['Strings', 'Choir', 'Pad']
        },
        {
          category: 'Vocals',
          color: 'bg-pink-500',
          elements: ['Vocal', 'Backing Vocals', 'Spoken Word']
        }
      ]
    }
  ];

  const genres = ['all', 'edm', 'trap', 'hiphop', 'pop', 'rock', 'lofi', 'rnb', 'afrobeats', 'reggaeton', 'club', 'phonk', 'breakbeat', 'ambient', 'vaporwave', 'garage'];
  const bpmRanges = [
    { value: 'all', label: 'All BPM' },
    { value: 'slow', label: 'Slow (60-99)' },
    { value: 'medium', label: 'Medium (100-129)' },
    { value: 'fast', label: 'Fast (130+)' },
  ];
  const keyTypes = [
    { value: 'all', label: 'All Keys' },
    { value: 'major', label: 'Major' },
    { value: 'minor', label: 'Minor' },
  ];
  const difficulties: Array<{ value: Difficulty | 'all'; label: string }> = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
  ];

  // Enrich templates with computed values
  const enrichedTemplates = songTemplates.map(t => ({
    ...t,
    difficulty: t.difficulty || getDifficulty(t.bpm, t.layers.length),
    genreColor: t.genreColor || genreColors[t.genre] || genreColors.edm,
    mixingTips: t.mixingTips || getMixingTips(t.genre),
  }));
  
  // Apply all filters
  const filteredTemplates = enrichedTemplates.filter(t => {
    if (currentFilter !== 'all' && t.genre !== currentFilter) return false;
    if (bpmFilter === 'slow' && t.bpm >= 100) return false;
    if (bpmFilter === 'medium' && (t.bpm < 100 || t.bpm >= 130)) return false;
    if (bpmFilter === 'fast' && t.bpm < 130) return false;
    if (keyFilter === 'major' && !t.key.toLowerCase().includes('major')) return false;
    if (keyFilter === 'minor' && !t.key.toLowerCase().includes('minor')) return false;
    if (difficultyFilter !== 'all' && t.difficulty !== difficultyFilter) return false;
    return true;
  });

  return (
    <section id="templates" className="page-section">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-gradient">Song</span>
          <span className="text-white"> Templates</span>
        </h2>
        <p className="text-[var(--text-muted)]">
          Jumpstart your creativity with genre-specific starting points.
        </p>
      </div>

      {/* Hero Card */}
      <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/20 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <span className="text-3xl">🎵</span>
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">Instant Inspiration</h3>
            <p className="text-blue-200/80 mb-3">
              Don't stare at a blank project. These templates come pre-loaded with channel racks, mixer routing, and essential plugins for your genre.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">{songTemplates.length}</span>
                <span className="text-blue-200/60">Blueprints</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">4</span>
                <span className="text-blue-200/60">Core Genres</span>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Enhanced Filter Bar */}
        <div className="mb-8 space-y-4">
          {/* Genre Buttons */}
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setCurrentFilter(genre)}
                className={`template-filter px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  currentFilter === genre
                    ? 'bg-purple-primary-700/40 text-purple-primary-200 shadow-purple-glow'
                    : 'bg-purple-primary-700/20 text-purple-primary-300 hover:bg-purple-primary-700/30 hover:text-purple-primary-100'
                }`}
              >
                {genre === 'all' ? 'All Templates' : genre.charAt(0).toUpperCase() + genre.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Advanced Filters */}
          <div className="flex flex-wrap gap-3">
            <select
              value={bpmFilter}
              onChange={(e) => setBpmFilter(e.target.value)}
              className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-purple-500 focus:outline-none"
            >
              {bpmRanges.map(opt => <option key={opt.value} value={opt.value} className="bg-gray-900">{opt.label}</option>)}
            </select>
            <select
              value={keyFilter}
              onChange={(e) => setKeyFilter(e.target.value)}
              className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-purple-500 focus:outline-none"
            >
              {keyTypes.map(opt => <option key={opt.value} value={opt.value} className="bg-gray-900">{opt.label}</option>)}
            </select>
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value as Difficulty | 'all')}
              className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-purple-500 focus:outline-none"
            >
              {difficulties.map(opt => <option key={opt.value} value={opt.value} className="bg-gray-900">{opt.label}</option>)}
            </select>
            <span className="text-sm text-white/50 self-center ml-2">
              {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''}
            </span>
            <button
              onClick={allExpanded ? collapseAllCards : expandAllCards}
              className="ml-auto flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 text-sm transition-colors"
            >
              <ChevronsUpDown className="w-4 h-4" />
              {allExpanded ? 'Collapse All' : 'Expand All'}
            </button>
          </div>
        </div>


        {/* Templates Grid */}
        <div id="templates-container" className="space-y-8">
          {filteredTemplates.map((template) => {
            // Default to allExpanded, but individual toggle overrides
            const isExpanded = expandedCards[template.id] !== undefined ? expandedCards[template.id] : allExpanded;
            const diffConfig = difficultyConfig[template.difficulty];
            
            return (
              <div 
                key={template.id} 
                className="content-card overflow-hidden transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${template.genreColor.from}15 0%, ${template.genreColor.to}15 100%)`,
                  borderColor: `${template.genreColor.from}40`,
                }}
              >
                {/* Header with gradient based on genre */}
                <div 
                  className="p-6 relative"
                  style={{
                    background: `linear-gradient(135deg, ${template.genreColor.from}40 0%, ${template.genreColor.to}40 100%)`,
                  }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{template.name}</h3>
                        <span className={`px-2 py-0.5 text-xs font-medium rounded border ${diffConfig.bg} ${diffConfig.color}`}>
                          {diffConfig.label}
                        </span>
                      </div>
                      <p className="text-white/70 text-sm uppercase tracking-wide">{template.genre}</p>
                      <p className="text-white/80 text-sm mt-2">{template.description}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      {/* Favorite Button */}
                      <button
                        onClick={() => toggleFavorite(template.id)}
                        className={`p-2 rounded-lg transition-all ${
                          favorites.includes(template.id)
                            ? 'bg-pink-500/30 text-pink-400'
                            : 'bg-white/10 text-white/50 hover:text-pink-400'
                        }`}
                        title={favorites.includes(template.id) ? 'Remove from favorites' : 'Add to favorites'}
                      >
                        <Heart className={`w-5 h-5 ${favorites.includes(template.id) ? 'fill-current' : ''}`} />
                      </button>
                      {/* BPM & Key */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                        <span className="text-white/60 text-xs">BPM</span>
                        <div className="text-white font-mono text-2xl font-bold">{template.bpm}</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                        <span className="text-white/60 text-xs">Key</span>
                        <div className="text-white font-bold">{template.key}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() => toggleCard(template.id)}
                    className="absolute bottom-2 right-4 text-white/50 hover:text-white flex items-center gap-1 text-xs"
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    {isExpanded ? 'Collapse' : 'Expand'}
                  </button>
                </div>

                {/* Collapsible Content */}
                <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  {/* Channel Rack Style Layers */}
                  <div className="p-6 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xs font-bold text-white/60 uppercase flex items-center gap-2">
                        <span className="w-3 h-3 rounded bg-gradient-to-r from-purple-500 to-pink-500"></span>
                        Channel Rack
                      </h4>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            const newState: Record<string, boolean> = {};
                            template.layers.forEach((_, idx) => { newState[`${template.id}-${idx}`] = true; });
                            setExpandedLayers(prev => ({ ...prev, ...newState }));
                          }}
                          className="text-xs text-white/50 hover:text-white px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          Expand All
                        </button>
                        <button
                          onClick={() => {
                            const newState: Record<string, boolean> = {};
                            template.layers.forEach((_, idx) => { newState[`${template.id}-${idx}`] = false; });
                            setExpandedLayers(prev => ({ ...prev, ...newState }));
                          }}
                          className="text-xs text-white/50 hover:text-white px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          Collapse All
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {template.layers.map((layer, index) => {
                        const layerKey = `${template.id}-${index}`;
                        const isLayerExpanded = expandedLayers[layerKey];
                        
                        return (
                          <div key={index} className="group">
                            {/* Channel Rack Bar */}
                            <button
                              onClick={() => toggleLayer(layerKey)}
                              className="w-full flex items-center gap-3 p-2 rounded-lg bg-black/20 hover:bg-black/30 transition-colors"
                            >
                              <div className={`w-4 h-8 rounded ${layer.color}`}></div>
                              <span className="text-white font-medium text-sm flex-1 text-left">{layer.category}</span>
                              <span className="text-white/50 text-xs font-mono">{layer.elements.length}</span>
                              {isLayerExpanded ? <ChevronUp className="w-4 h-4 text-white/50" /> : <ChevronDown className="w-4 h-4 text-white/50" />}
                            </button>
                            
                            {/* Expanded Elements */}
                            <div className={`transition-all duration-200 overflow-hidden ${isLayerExpanded ? 'max-h-40 mt-2' : 'max-h-0'}`}>
                              <div className="pl-7 flex flex-wrap gap-2">
                                {layer.elements.map((element, idx) => (
                                  <span key={idx} className="px-2 py-1 text-xs rounded bg-white/10 text-white/80">
                                    {element}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Mixing Tips */}
                  {template.mixingTips && template.mixingTips.length > 0 && (
                    <div className="px-6 pb-4">
                      <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                        <h4 className="text-xs font-bold text-amber-400 uppercase mb-2 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4" />
                          Mixing Tips
                        </h4>
                        <ul className="space-y-1">
                          {template.mixingTips.map((tip, idx) => (
                            <li key={idx} className="text-sm text-amber-200/80 flex items-start gap-2">
                              <span className="text-amber-400">•</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Download Button */}
                  <div className="px-6 pb-6">
                    <button
                      onClick={() => handleDownload(template)}
                      className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                    >
                      <Download className="w-5 h-5" />
                      Download Template
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      


      {/* Category Color Legend */}
      <div className="mt-12 content-card">
        <h3 className="font-bold text-white mb-4">Category Color Guide</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-red-500 shadow-sm"></div>
            <span className="text-sm text-purple-primary-300">Drums</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-purple-500 shadow-sm"></div>
            <span className="text-sm text-purple-primary-300">Bass</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-blue-500 shadow-sm"></div>
            <span className="text-sm text-purple-primary-300">Melody</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-green-500 shadow-sm"></div>
            <span className="text-sm text-purple-primary-300">Harmony</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-yellow-500 shadow-sm"></div>
            <span className="text-sm text-purple-primary-300">FX / Effects</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-pink-500 shadow-sm"></div>
            <span className="text-sm text-purple-primary-300">Vocals</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-indigo-500 shadow-sm"></div>
            <span className="text-sm text-purple-primary-300">Ambient</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-purple-primary-600 shadow-sm"></div>
            <span className="text-sm text-purple-primary-300">Groove Elements</span>
          </div>
        </div>
      </div>
    </section>
  );
};