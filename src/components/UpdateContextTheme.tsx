import React, {useState} from 'react';
import {ThemeContext} from "./Context";

const UpdateContextTheme = () => {
    console.log(ThemeContext)
    const [theme, setTheme] = useState('light');
    return (
        <div>

        </div>
    );
};

export default UpdateContextTheme;
