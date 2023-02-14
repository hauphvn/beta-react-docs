import React, {useState} from 'react';
import {ThemeContext} from "./Context";
import Button from "./Button/Button";

const UpdateContextTheme = () => {

    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={theme}>
           <div className={`update-context-theme-${theme}`}>
               <div><Button>Click me</Button></div>
               <label htmlFor="dark-mode">
                   <input id={'dark-mode'} type="checkbox" onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} checked={theme === 'dark'}/>
                   Dark mode
               </label>
           </div>
        </ThemeContext.Provider>
    );
};

export default UpdateContextTheme;