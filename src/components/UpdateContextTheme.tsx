import React, {useState} from 'react';
import {ThemeContext} from "./Context";
import Button from "./Button/Button";

const UpdateContextTheme = () => {

    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={theme}>
            <div><Button>Click me</Button></div>
        </ThemeContext.Provider>
    );
};

export default UpdateContextTheme;