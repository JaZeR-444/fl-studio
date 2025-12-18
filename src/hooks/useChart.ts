import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  RadarController,
  LineController,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  RadialLinearScale
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  RadarController,
  LineController,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  RadialLinearScale
);

interface ChartHookProps {
  type: 'radar' | 'line';
  data: any;
  options?: any;
  darkMode?: boolean;
}

export const useChart = ({ type, data, options, darkMode }: ChartHookProps) => {
  const chartRef = useRef<ChartJS | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      // Destroy existing chart if it exists
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      // Create new chart
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        // Configure chart based on theme
        const gridColor = darkMode ? '#52525b' : '#e5e7eb'; // zinc-600 vs gray-200
        const textColor = darkMode ? '#d4d4d4' : '#52525b';

        // Merge options with theme-specific defaults
        const chartOptions = {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            // Default scales configuration (for line charts)
            y: {
              grid: { color: gridColor },
              ticks: { color: textColor }
            },
            x: {
              grid: { display: false },
              ticks: { color: textColor }
            },
            // Radial scales configuration (for radar charts)
            r: {
              grid: { color: gridColor },
              ticks: { display: false },
              pointLabels: { color: textColor }
            },
            ...options?.scales
          },
          plugins: {
            legend: {
              labels: {
                color: textColor
              }
            },
            tooltip: {
              titleColor: textColor,
              bodyColor: textColor,
              backgroundColor: darkMode ? 'rgba(39, 39, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)',
            },
            ...options?.plugins
          },
          ...options
        };

        chartRef.current = new ChartJS(ctx, {
          type,
          data,
          options: chartOptions
        });
      }
    }

    // Cleanup function
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [type, data, options, darkMode]);

  return { canvasRef, chart: chartRef.current };
};