import { useContext } from 'react';
import { ThemeContext } from '../../theme-context';
import { Theme } from '../utils/commonTypes';
import { useTheme as useThemeApp } from '@ui-kitten/components';


// Function to handle theme-based styling
export


    // Define the return type of the hook
    interface UseThemeResult {
    theme: string;
    themeStyle: object;
    toggleTheme: () => void,
    handleColor: (color: string) => string
}

// Custom hook to use the theme context and handle theme styles
export const useTheme = (): UseThemeResult => {
    const themeApp = useThemeApp()
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

    const handleColor = (color: string) => {
        return themeApp[color]
    }

    return {
        theme,
        themeStyle: handleTheme(theme), // Get theme-specific styles
        toggleTheme,
        handleColor
    };
};
