import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the theme
interface Theme {
  colors: {
    background: string;
    text: string;
    cardBackground: string;
    divider: string;
    tagBackground: string;
    tagText: string;
  };
}

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

// Define light and dark themes
const darkTheme: Theme = {
  colors: {
    background: '#000000',
    text: '#ffffff',
    cardBackground: '#1a1a1a',
    divider: '#444444',
    tagBackground: '#333333',
    tagText: '#ffffff',
  },
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(darkTheme); // Default to dark theme
  const [followedCategories, setFollowedCategories] = useState<string[]>([]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === darkTheme ? darkTheme : darkTheme));
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
