import React from 'react';
import { Theme } from './src/utils/types';

export const ThemeContext = React.createContext<{ theme: Theme, toggleTheme: () => void }>({

    theme: 'light',
    toggleTheme: () => { },
});
