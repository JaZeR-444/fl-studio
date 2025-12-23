import { useState, useEffect } from 'react';
import { updateChartTheme } from '../utils/chartUtils';

export const useDarkModeWithCharts = (initialCharts: any[] = []) => {
  const [darkMode, setDarkMode] = useState(false);
  const [charts, setCharts] = useState(initialCharts);

  // Initialize dark mode based on system preference
  useEffect(() => {
    const safeGetItem = (key: string) => {
      try {
        return window.localStorage.getItem(key);
      } catch {
        return null;
      }
    };

    const safePrefersDark = () => {
      try {
        return window.matchMedia?.('(prefers-color-scheme: dark)').matches;
      } catch {
        return false;
      }
    };

    const stored = safeGetItem('darkMode');
    const isDark = stored === 'true' || (stored === null && safePrefersDark());
    setDarkMode(isDark);
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        try {
          window.localStorage.setItem('darkMode', 'true');
        } catch {
          // ignore
        }
      } else {
        document.documentElement.classList.remove('dark');
        try {
          window.localStorage.setItem('darkMode', 'false');
        } catch {
          // ignore
        }
      }
      
      // Update all charts with new theme
      charts.forEach(chart => {
        updateChartTheme(chart, darkMode);
      });
    }
  }, [darkMode, charts]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Function to add chart to the list for theme updates
  const addChart = (chart: any) => {
    setCharts(prev => [...prev, chart]);
  };

  return {
    darkMode,
    toggleDarkMode,
    addChart,
    charts
  };
};
