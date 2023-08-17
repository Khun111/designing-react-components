import React, { createContext } from 'react';
import useTheme from '../hooks/useTheme';

export const ThemeContext = createContext();

function ThemeProvider ({ children, startingTheme }) {
    const {theme, setTheme} = useTheme(startingTheme);
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}
export default ThemeProvider;
