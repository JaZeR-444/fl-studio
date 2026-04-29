// src/lib/categoryColors.ts
// Centralized color mapping for plugin categories

export interface CategoryColorSet {
    bg: string;
    border: string;
    text: string;
    gradient: string;
}

export const categoryColors: Record<string, CategoryColorSet> = {
    // Synthesizers - Purple family
    'Synthesizer': {
        bg: 'bg-purple-500/20',
        border: 'border-purple-500/40',
        text: 'text-purple-400',
        gradient: 'from-purple-600 to-violet-600'
    },
    'Subtractive Synthesizer': {
        bg: 'bg-purple-500/20',
        border: 'border-purple-500/40',
        text: 'text-purple-400',
        gradient: 'from-purple-600 to-violet-600'
    },
    'Additive Synthesizer (Preset Browser)': {
        bg: 'bg-violet-500/20',
        border: 'border-violet-500/40',
        text: 'text-violet-400',
        gradient: 'from-violet-600 to-purple-600'
    },
    'Drum Synthesizer (Kick/Bass Drum)': {
        bg: 'bg-pink-500/20',
        border: 'border-pink-500/40',
        text: 'text-pink-400',
        gradient: 'from-pink-600 to-rose-600'
    },
    'Monophonic Bass Synthesizer': {
        bg: 'bg-fuchsia-500/20',
        border: 'border-fuchsia-500/40',
        text: 'text-fuchsia-400',
        gradient: 'from-fuchsia-600 to-pink-600'
    },

    // Samplers - Green family
    'Sampler': {
        bg: 'bg-green-500/20',
        border: 'border-green-500/40',
        text: 'text-green-400',
        gradient: 'from-green-600 to-emerald-600'
    },
    'Single-Sample Audio Sampler': {
        bg: 'bg-green-500/20',
        border: 'border-green-500/40',
        text: 'text-green-400',
        gradient: 'from-green-600 to-emerald-600'
    },

    // Effects - Cyan/Blue family
    'Effect': {
        bg: 'bg-cyan-500/20',
        border: 'border-cyan-500/40',
        text: 'text-cyan-400',
        gradient: 'from-cyan-600 to-blue-600'
    },
    'Spatial/Creative FX': {
        bg: 'bg-cyan-500/20',
        border: 'border-cyan-500/40',
        text: 'text-cyan-400',
        gradient: 'from-cyan-600 to-teal-600'
    },

    // Dynamics - Orange family
    'Dynamics': {
        bg: 'bg-orange-500/20',
        border: 'border-orange-500/40',
        text: 'text-orange-400',
        gradient: 'from-orange-600 to-amber-600'
    },
    'Dynamics/Mastering': {
        bg: 'bg-orange-500/20',
        border: 'border-orange-500/40',
        text: 'text-orange-400',
        gradient: 'from-orange-600 to-amber-600'
    },

    // Utilities - Blue family
    'Utility': {
        bg: 'bg-blue-500/20',
        border: 'border-blue-500/40',
        text: 'text-blue-400',
        gradient: 'from-blue-600 to-indigo-600'
    },
    'MIDI Control Interface / Internal Controller Generator': {
        bg: 'bg-blue-500/20',
        border: 'border-blue-500/40',
        text: 'text-blue-400',
        gradient: 'from-blue-600 to-indigo-600'
    },

    // Experimental/Special - Indigo family
    'Image-to-Sound / Spectral Synthesizer': {
        bg: 'bg-indigo-500/20',
        border: 'border-indigo-500/40',
        text: 'text-indigo-400',
        gradient: 'from-indigo-600 to-purple-600'
    },

    // Default fallback
    'default': {
        bg: 'bg-slate-500/20',
        border: 'border-slate-500/40',
        text: 'text-slate-400',
        gradient: 'from-slate-600 to-gray-600'
    }
};

export function getCategoryColor(category: string, brandColor?: string): CategoryColorSet {
    // If a brand color is provided, generate dynamic JIT styles
    if (brandColor) {
        return {
            bg: `bg-[${brandColor}]/20`,
            border: `border-[${brandColor}]/40`,
            text: `text-[${brandColor}]`,
            gradient: `from-[${brandColor}] to-[${brandColor}]` // using same color for gradient start/end for simplicity, or we could darken/lighten if we had a util
        };
    }

    // Try exact match first
    if (categoryColors[category]) {
        return categoryColors[category];
    }

    // Try partial matching
    const lowerCategory = category.toLowerCase();

    if (lowerCategory.includes('synth')) return categoryColors['Synthesizer'];
    if (lowerCategory.includes('sampl')) return categoryColors['Sampler'];
    if (lowerCategory.includes('effect') || lowerCategory.includes('fx')) return categoryColors['Effect'];
    if (lowerCategory.includes('dynamic') || lowerCategory.includes('compres') || lowerCategory.includes('limit')) return categoryColors['Dynamics'];
    if (lowerCategory.includes('util') || lowerCategory.includes('control') || lowerCategory.includes('midi')) return categoryColors['Utility'];
    if (lowerCategory.includes('drum') || lowerCategory.includes('kick') || lowerCategory.includes('bass drum')) return categoryColors['Drum Synthesizer (Kick/Bass Drum)'];

    return categoryColors['default'];
}
