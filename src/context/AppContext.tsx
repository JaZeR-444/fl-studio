// context/AppContext.tsx
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Theme } from '../types';

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

const safePrefersDark = () => {
  try {
    return typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  } catch {
    return false;
  }
};

// Define the application state type
interface AppState {
  darkMode: boolean;
  activeSection: string;
  mobileMenuOpen: boolean;
  // Add more state properties as needed
}

// Define the actions that can be dispatched
type AppAction =
  | { type: 'TOGGLE_DARK_MODE' }
  | { type: 'SET_ACTIVE_SECTION'; payload: string }
  | { type: 'TOGGLE_MOBILE_MENU' }
  | { type: 'SET_MOBILE_MENU'; payload: boolean };

// Define the context type
interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

// Initial state
const initialState: AppState = {
  darkMode: (() => {
    const stored = safeLocalStorage.getItem('darkMode');
    if (stored === 'true') return true;
    if (stored === 'false') return false;
    return safePrefersDark();
  })(),
  activeSection: 'home',
  mobileMenuOpen: false,
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

  // Apply dark mode class to document on initial load
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
