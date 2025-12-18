import { useState, useEffect } from 'react';
import { updateChartTheme } from '../utils/chartUtils';

export const useDarkModeWithCharts = (initialCharts: any[] = []) => {
  const [darkMode, setDarkMode] = useState(false);
  const [charts, setCharts] = useState(initialCharts);

  // Initialize dark mode based on system preference
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' ||
      (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
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