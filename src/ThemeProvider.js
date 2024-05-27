import React, { useState, createContext, useContext} from 'react';

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ childeren }) => {
    const [darkMode, setDarkmode] = useState(false);
    
    const toggleDarkMode = () => {
        setDarkmode(prevMode => !prevMode);
    };
    return (<ThemeContext.Provider value = {{ darkMode, toggleDarkMode}}>
        {{childeren}}
    </ThemeContext.Provider>
    );
}