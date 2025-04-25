import React, { createContext, useContext, useState, ReactNode } from 'react';
import { lightTheme, darkTheme } from './theme';
import type { Theme } from './theme';

// Define the context value type
interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  followedCategories: string[];
  followCategory: (category: string) => void;
  unfollowCategory: (category: string) => void;
}

// Create the context
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(darkTheme); // Default to dark theme
  const [followedCategories, setFollowedCategories] = useState<string[]>([
    'መንፈሳዊ',           // Spiritual
    'ሰብኣዊ ምዕባለ',      // Personal development
    'ቢዝነስ',            // Business
    'መርዓን ሓዳርን',      // Relationship
    'ሓበሬታ',           // Information
    'ትረኻታት',          // Stories
    'ጽባቐ ኣስመራ',       // Beauty of Asmara
    'ነውሪታት',          // Incedencies
    'ስድራቤት',          // Family
    'ቤትሰናይ',          // senaystudio
  ]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === darkTheme ? lightTheme : darkTheme));
  };

  const followCategory = (category: string) => {
    setFollowedCategories((prev) => [...new Set([...prev, category])]);
  };

  const unfollowCategory = (category: string) => {
    setFollowedCategories((prev) => prev.filter((cat) => cat !== category));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        followedCategories,
        followCategory,
        unfollowCategory,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
