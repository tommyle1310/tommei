import { useContext } from 'react';
import { ThemeContext } from '../../theme-context';
import { Theme } from '../utils/types';

// Function to handle theme-based styling
export


    // Define the return type of the hook
    interface UseThemeResult {
    theme: string;
    themeStyle: object;
    toggleTheme: () => void
}

// Custom hook to use the theme context and handle theme styles
export const useTheme = (): UseThemeResult => {
    const { theme } = useContext(ThemeContext);
    const themeContext = useContext(ThemeContext);


    const handleTheme = (theme: Theme) => {
        return {
            backgroundColor: theme === 'light' ? '#fff' : '#000',
            color: theme === 'light' ? '#000' : '#fff',
        };
    };
    const toggleTheme = () => {

        themeContext.toggleTheme();
    }

    return {
        theme,
        themeStyle: handleTheme(theme), // Get theme-specific styles
        toggleTheme
    };
};
