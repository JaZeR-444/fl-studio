// context/AppContext.tsx
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

const safeLocalStorage = {
  getItem(key: string) {
    try {
      return typeof window !== 'undefined' ? window.localStorage.getItem(key) : null;
    } catch {
      return null;
    }
  },
  setItem(key: string, value: string) {
    try {
      if (typeof window !== 'undefined') window.localStorage.setItem(key, value);
    } catch {
      // ignore (storage may be unavailable in some privacy modes)
    }
  },
  removeItem(key: string) {
    try {
      if (typeof window !== 'undefined') window.localStorage.removeItem(key);
    } catch {
      // ignore
    }
  },
};

// Define the application state type
interface AppState {
  darkMode: boolean;
  activeSection: string;
  mobileMenuOpen: boolean;
  showCommandPalette: boolean;
  // Add more state properties as needed
}

// Define the actions that can be dispatched
type AppAction =
  | { type: 'TOGGLE_DARK_MODE' }
  | { type: 'SET_DARK_MODE'; payload: boolean }
  | { type: 'SET_ACTIVE_SECTION'; payload: string }
  | { type: 'TOGGLE_MOBILE_MENU' }
  | { type: 'SET_MOBILE_MENU'; payload: boolean }
  | { type: 'TOGGLE_COMMAND_PALETTE' }
  | { type: 'SET_COMMAND_PALETTE'; payload: boolean };

// Define the context type
interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

// Initial state
const initialState: AppState = {
  darkMode: true, // Default to dark mode for this app's design, stable for hydration
  activeSection: 'home',
  mobileMenuOpen: false,
  showCommandPalette: false,
};

// Reducer function
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      const newDarkMode = !state.darkMode;
      if (typeof document !== 'undefined') {
        if (newDarkMode) {
          document.documentElement.classList.add('dark');
          safeLocalStorage.setItem('darkMode', 'true');
        } else {
          document.documentElement.classList.remove('dark');
          safeLocalStorage.setItem('darkMode', 'false');
        }
      }
      return {
        ...state,
        darkMode: newDarkMode,
      };

    case 'SET_DARK_MODE':
      if (typeof document !== 'undefined') {
        if (action.payload) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
      return {
        ...state,
        darkMode: action.payload,
      };

    case 'SET_ACTIVE_SECTION':
      return {
        ...state,
        activeSection: action.payload,
      };
      
    case 'TOGGLE_MOBILE_MENU':
      return {
        ...state,
        mobileMenuOpen: !state.mobileMenuOpen,
      };
      
    case 'SET_MOBILE_MENU':
      return {
        ...state,
        mobileMenuOpen: action.payload,
      };

    case 'TOGGLE_COMMAND_PALETTE':
      return {
        ...state,
        showCommandPalette: !state.showCommandPalette,
      };

    case 'SET_COMMAND_PALETTE':
      return {
        ...state,
        showCommandPalette: action.payload,
      };
      
    default:
      return state;
  }
};

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load initial dark mode from localStorage on mount (client-only)
  React.useEffect(() => {
    const stored = safeLocalStorage.getItem('darkMode');
    if (stored !== null) {
      const isDark = stored === 'true';
      if (isDark !== state.darkMode) {
        dispatch({ type: 'SET_DARK_MODE', payload: isDark });
      }
    }
  }, []);

  // Apply dark mode class to document on state change
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      if (state.darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [state.darkMode]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

// Safe version that returns undefined when outside provider (for components used in root layout)
export const useAppContextSafe = () => {
  return useContext(AppContext);
};
