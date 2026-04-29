'use client';

import { useState, useEffect, useCallback } from 'react';

const TOOLKIT_STORAGE_KEY = 'fl-studio-hub-toolkit';
const VIEW_PREFERENCE_KEY = 'fl-studio-hub-view-mode';

export type ViewMode = 'grid' | 'list';

interface UseToolkitReturn {
    toolkit: string[];
    addToToolkit: (pluginId: string) => void;
    removeFromToolkit: (pluginId: string) => void;
    toggleToolkit: (pluginId: string) => void;
    isInToolkit: (pluginId: string) => boolean;
    clearToolkit: () => void;
    toolkitCount: number;
}

interface UseViewModeReturn {
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
    toggleViewMode: () => void;
}

/**
 * Custom hook for managing the user's plugin toolkit (favorites)
 * Persists to localStorage for cross-session persistence
 */
export function useToolkit(): UseToolkitReturn {
    const [toolkit, setToolkit] = useState<string[]>([]);
    const [isHydrated, setIsHydrated] = useState(false);

    // Load from localStorage on mount (client-side only)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            try {
                const stored = localStorage.getItem(TOOLKIT_STORAGE_KEY);
                if (stored) {
                    const parsed = JSON.parse(stored);
                    if (Array.isArray(parsed)) {
                        setToolkit(parsed);
                    }
                }
            } catch (e) {
                console.error('Failed to load toolkit from localStorage:', e);
            }
            setIsHydrated(true);
        }
    }, []);

    // Save to localStorage whenever toolkit changes
    useEffect(() => {
        if (isHydrated && typeof window !== 'undefined') {
            try {
                localStorage.setItem(TOOLKIT_STORAGE_KEY, JSON.stringify(toolkit));
            } catch (e) {
                console.error('Failed to save toolkit to localStorage:', e);
            }
        }
    }, [toolkit, isHydrated]);

    const addToToolkit = useCallback((pluginId: string) => {
        setToolkit(prev => {
            if (prev.includes(pluginId)) return prev;
            return [...prev, pluginId];
        });
    }, []);

    const removeFromToolkit = useCallback((pluginId: string) => {
        setToolkit(prev => prev.filter(id => id !== pluginId));
    }, []);

    const toggleToolkit = useCallback((pluginId: string) => {
        setToolkit(prev => {
            if (prev.includes(pluginId)) {
                return prev.filter(id => id !== pluginId);
            }
            return [...prev, pluginId];
        });
    }, []);

    const isInToolkit = useCallback((pluginId: string) => {
        return toolkit.includes(pluginId);
    }, [toolkit]);

    const clearToolkit = useCallback(() => {
        setToolkit([]);
    }, []);

    return {
        toolkit,
        addToToolkit,
        removeFromToolkit,
        toggleToolkit,
        isInToolkit,
        clearToolkit,
        toolkitCount: toolkit.length,
    };
}

/**
 * Custom hook for managing view mode preference (grid/list)
 * Persists to localStorage for cross-session persistence
 */
export function useViewMode(): UseViewModeReturn {
    const [viewMode, setViewModeState] = useState<ViewMode>('grid');
    const [isHydrated, setIsHydrated] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            try {
                const stored = localStorage.getItem(VIEW_PREFERENCE_KEY);
                if (stored === 'grid' || stored === 'list') {
                    setViewModeState(stored);
                }
            } catch (e) {
                console.error('Failed to load view mode from localStorage:', e);
            }
            setIsHydrated(true);
        }
    }, []);

    // Save to localStorage whenever view mode changes
    useEffect(() => {
        if (isHydrated && typeof window !== 'undefined') {
            try {
                localStorage.setItem(VIEW_PREFERENCE_KEY, viewMode);
            } catch (e) {
                console.error('Failed to save view mode to localStorage:', e);
            }
        }
    }, [viewMode, isHydrated]);

    const setViewMode = useCallback((mode: ViewMode) => {
        setViewModeState(mode);
    }, []);

    const toggleViewMode = useCallback(() => {
        setViewModeState(prev => prev === 'grid' ? 'list' : 'grid');
    }, []);

    return {
        viewMode,
        setViewMode,
        toggleViewMode,
    };
}
