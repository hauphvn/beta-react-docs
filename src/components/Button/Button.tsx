import React, {useContext} from 'react';
import {ThemeContext} from "../Context";
import './Button.scss';
const Button = (props: any) => {
    const {children} = props;
    const theme = useContext(ThemeContext);
    const className = `button-root button-theme-${theme}`
    return (
        <button className={className}>
            {children}
        </button>
    );
};

export default Button;